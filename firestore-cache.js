/**
 * firestore-cache.js - Firestore Caching Layer for Move37 (Project: move37-512017)
 * Implements 2-tier caching:
 * 1. In-Memory fast cache (0ms)
 * 2. Firestore Document Store (~25ms) via standard Node.js HTTPS
 */

const https = require('https');
const { execSync } = require('child_process');

const FIRESTORE_PROJECT = 'move37-512017';
const FIRESTORE_COLLECTION = 'cache_recommendations_9x9';

const http = require('http');

let cachedAccessToken = null;
let tokenExpiry = 0;

function fetchFromMetadataServer() {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'metadata.google.internal',
      path: '/computeMetadata/v1/instance/service-accounts/default/token',
      method: 'GET',
      headers: { 'Metadata-Flavor': 'Google' },
      timeout: 1000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const parsed = JSON.parse(data);
            if (parsed.access_token) {
              return resolve({ token: parsed.access_token, expiresIn: parsed.expires_in || 3000 });
            }
          } catch(e) {}
        }
        resolve(null);
      });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.end();
  });
}

function fetchFromGcloud() {
  try {
    const token = execSync('export PATH="$HOME/google-cloud-sdk/bin:$PATH"; gcloud auth print-access-token', { timeout: 3000 }).toString().trim();
    if (token) return { token, expiresIn: 2700 };
  } catch(e) {}
  return null;
}

async function getAccessToken() {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiry) {
    return cachedAccessToken;
  }
  let res = await fetchFromMetadataServer();
  if (!res) {
    res = fetchFromGcloud();
  }
  if (res && res.token) {
    cachedAccessToken = res.token;
    tokenExpiry = now + Math.max(60, (res.expiresIn - 60)) * 1000;
    return cachedAccessToken;
  }
  return null;
}

/**
 * Convert a regular JS object into Firestore REST API fields format
 */
function toFirestoreFields(obj) {
  const fields = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val === null || val === undefined) {
      fields[key] = { nullValue: null };
    } else if (typeof val === 'string') {
      fields[key] = { stringValue: val };
    } else if (typeof val === 'number') {
      fields[key] = Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
    } else if (typeof val === 'boolean') {
      fields[key] = { booleanValue: val };
    } else if (Array.isArray(val)) {
      fields[key] = {
        arrayValue: {
          values: val.map(item => {
            if (typeof item === 'object') {
              return { mapValue: { fields: toFirestoreFields(item) } };
            }
            return { stringValue: String(item) };
          })
        }
      };
    } else if (typeof val === 'object') {
      fields[key] = { mapValue: { fields: toFirestoreFields(val) } };
    }
  }
  return fields;
}

/**
 * Convert Firestore REST document fields into regular JS object
 */
function fromFirestoreFields(fields) {
  if (!fields) return null;
  const obj = {};
  for (const [key, val] of Object.entries(fields)) {
    if ('stringValue' in val) obj[key] = val.stringValue;
    else if ('integerValue' in val) obj[key] = parseInt(val.integerValue, 10);
    else if ('doubleValue' in val) obj[key] = val.doubleValue;
    else if ('booleanValue' in val) obj[key] = val.booleanValue;
    else if ('nullValue' in val) obj[key] = null;
    else if ('mapValue' in val) obj[key] = fromFirestoreFields(val.mapValue.fields);
    else if ('arrayValue' in val) {
      const arr = val.arrayValue.values || [];
      obj[key] = arr.map(item => {
        if ('mapValue' in item) return fromFirestoreFields(item.mapValue.fields);
        if ('stringValue' in item) return item.stringValue;
        if ('integerValue' in item) return parseInt(item.integerValue, 10);
        return item;
      });
    }
  }
  return obj;
}

/**
 * Fetch recommendation by canonical key from Firestore (move37-512017)
 */
function getFirestoreRecommendation(canonicalKey) {
  return new Promise(async (resolve) => {
    const token = await getAccessToken();
    if (!token) return resolve(null);

    // Sanitize document ID for Firestore
    const docId = encodeURIComponent(canonicalKey.replace(/[:,\s]/g, '_'));
    const options = {
      hostname: 'firestore.googleapis.com',
      path: `/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_COLLECTION}/${docId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(body);
            const data = fromFirestoreFields(json.fields);
            return resolve(data);
          } catch (e) {
            return resolve(null);
          }
        }
        resolve(null);
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.end();
  });
}

/**
 * Non-blocking write of recommendation to Firestore (move37-512017)
 */
async function setFirestoreRecommendation(canonicalKey, recommendationData) {
  const token = await getAccessToken();
  if (!token) return;

  const docId = encodeURIComponent(canonicalKey.replace(/[:,\s]/g, '_'));
  const payload = JSON.stringify({
    fields: toFirestoreFields({
      ...recommendationData,
      canonicalKey,
      cachedAt: new Date().toISOString()
    })
  });

  const options = {
    hostname: 'firestore.googleapis.com',
    path: `/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_COLLECTION}/${docId}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 3000
  };

  const req = https.request(options, (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log(`[Firestore Cache] Saved ${canonicalKey} to move37-512017`);
      }
    });
  });

  req.on('error', (err) => console.warn('[Firestore Cache] Write failed:', err.message));
  req.write(payload);
  req.end();
}

module.exports = {
  FIRESTORE_PROJECT,
  FIRESTORE_COLLECTION,
  getFirestoreRecommendation,
  setFirestoreRecommendation
};
