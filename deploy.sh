#!/usr/bin/env bash
set -euo pipefail

# Configuration Defaults
APP_NAME="move37-go"
ENVIRONMENT="${ENVIRONMENT:-private}" # 'work' | 'private'
GCP_PROJECT="${GCP_PROJECT:-move37-512017}"
GCP_REGION="${GCP_REGION:-europe-west1}"
GCP_ACCOUNT="${GCP_ACCOUNT:-aosterloh@gmail.com}"
HOSTING_PROJECT="${HOSTING_PROJECT:-move37-512017}"
AUTH_PROJECT="${AUTH_PROJECT:-aosterloh-cs-muc}"
TARGET="${1:-local}"

# Extract GEMINI_API_KEY if .env exists
GEMINI_KEY=""
if [ -f .env ]; then
  GEMINI_KEY=$(grep -E '^GEMINI_API_KEY=' .env | cut -d '=' -f2- | tr -d '\r\n')
fi

echo "=========================================================="
echo " Move 37 Go Showcase - Target: [${TARGET}] | Env: [${ENVIRONMENT}]"
echo " Cloud Run Project: ${GCP_PROJECT} | Region: ${GCP_REGION}"
echo " Firebase Hosting:  ${HOSTING_PROJECT}"
if [[ "${ENVIRONMENT}" == "work" ]]; then
  echo " Firebase Auth:     ${AUTH_PROJECT} (@google.com only)"
else
  echo " Authentication:    Open Access (No @google.com login needed)"
fi
echo "=========================================================="

authorize_domain() {
  local domain="$1"
  if [[ -z "$domain" || "${ENVIRONMENT}" != "work" ]]; then return 0; fi
  echo "--> Authorizing domain: ${domain} in Firebase Auth project: ${AUTH_PROJECT}..."
  node -e '
  const { execSync } = require("child_process");
  const https = require("https");
  try {
    let token = "";
    for (const acct of ["aosterloh@cloudspace.goog", "aosterloh@gmail.com"]) {
      try {
        const t = execSync("export PATH=\"$HOME/google-cloud-sdk/bin:$PATH\"; gcloud auth print-access-token --account " + acct + " 2>/dev/null").toString().trim();
        if (t) { token = t; break; }
      } catch(e) {}
    }
    const project = "'"${AUTH_PROJECT}"'";
    const domain = process.argv[1];
    if (!token || !domain) process.exit(0);

    const req = https.request({
      hostname: "identitytoolkit.googleapis.com",
      path: "/admin/v2/projects/" + project + "/config",
      method: "GET",
      headers: { "Authorization": "Bearer " + token, "x-goog-user-project": project }
    }, res => {
      let body = ""; res.on("data", d => body += d);
      res.on("end", () => {
        try {
          const json = JSON.parse(body);
          const domains = new Set(json.authorizedDomains || []);
          if (domains.has(domain)) { console.log("Domain already authorized:", domain); return; }
          domains.add(domain);
          const patchData = JSON.stringify({ authorizedDomains: Array.from(domains).sort() });
          const patchReq = https.request({
            hostname: "identitytoolkit.googleapis.com",
            path: "/admin/v2/projects/" + project + "/config?updateMask=authorizedDomains",
            method: "PATCH",
            headers: {
              "Authorization": "Bearer " + token,
              "x-goog-user-project": project,
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(patchData)
            }
          }, pRes => {
            console.log(pRes.statusCode === 200 ? "Successfully added " + domain + " to authorized domains" : "Failed to add domain (status " + pRes.statusCode + ")");
          });
          patchReq.write(patchData);
          patchReq.end();
        } catch(e) {}
      });
    });
    req.on("error", () => {});
    req.end();
  } catch(e) {
    console.log("Skipping automated domain authorization (token unavailable)");
  }
  ' "${domain}" || true
}

deploy_cloudrun() {
  echo "Deploying Cloud Run service [${APP_NAME}] to project [${GCP_PROJECT}]..."
  ENV_FLAG=""
  if [ -n "${GEMINI_KEY}" ]; then
    ENV_FLAG="--set-env-vars=GEMINI_API_KEY=${GEMINI_KEY}"
  fi

  gcloud run deploy "${APP_NAME}" \
    --source . \
    --region "${GCP_REGION}" \
    --platform managed \
    --project "${GCP_PROJECT}" \
    --account "${GCP_ACCOUNT}" \
    --allow-unauthenticated \
    --port 8080 \
    ${ENV_FLAG}

  SERVICE_URL=$(gcloud run services describe "${APP_NAME}" --platform managed --region "${GCP_REGION}" --project "${GCP_PROJECT}" --account "${GCP_ACCOUNT}" --format="value(status.url)")
  echo "=========================================================="
  echo " Cloud Run Service URL: ${SERVICE_URL}"
  echo "=========================================================="
  DOMAIN=$(echo "${SERVICE_URL}" | awk -F[/:] '{print $4}')
  authorize_domain "${DOMAIN}"
}

deploy_firebase() {
  echo "Deploying user-facing web app to Firebase Hosting [${HOSTING_PROJECT}]..."
  authorize_domain "${HOSTING_PROJECT}.web.app"
  authorize_domain "${HOSTING_PROJECT}.firebaseapp.com"
  firebase deploy --only hosting --project "${HOSTING_PROJECT}"
  echo "=========================================================="
  echo " PRIMARY PUBLIC URL: https://${HOSTING_PROJECT}.web.app"
  echo "=========================================================="
}

case "${TARGET}" in
  local)
    echo "Starting local Node.js server on port 8080..."
    export PORT=8080
    node server.js
    ;;

  docker)
    echo "Building Docker container image: ${APP_NAME}:latest..."
    docker build -t "${APP_NAME}:latest" .
    echo "Running container on port 8080..."
    docker run --rm -p 8080:8080 "${APP_NAME}:latest"
    ;;

  cloudrun)
    deploy_cloudrun
    ;;

  firebase)
    deploy_firebase
    ;;

  cloud|all)
    deploy_cloudrun
    deploy_firebase
    ;;

  *)
    echo "Usage: ./deploy.sh [local|docker|cloudrun|firebase|cloud]"
    exit 1
    ;;
esac
