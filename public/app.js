/**
 * app.js - Main Application Orchestrator for Move 37 Go Showcase
 * Connects GoEngine, BoardRenderer, ParticleEngine, SoundSynthesizer, GoAIAgent (Gemini 3.8 Flash),
 * Pro Games Library, and the AlphaGo Historical Database.
 */

import { GoEngine, BLACK, WHITE, EMPTY } from './go-engine.js';
import { BoardRenderer } from './board-renderer.js';
import { ParticleEngine } from './particles.js';
import { sound } from './audio.js';
import { GoAIAgent } from './ai-agent.js';
import { voiceCoach } from './voice-coach.js';
import { ALPHAGO_MATCHES, MOVE_37_DEEP_DIVE, MOVE_78_DEEP_DIVE } from './alphago-games.js';
import { PRO_GAMES_COLLECTION } from './pro-games.js';

class Move37App {
  constructor() {
    this.currentMode = 'learn'; // 'learn' | 'aivsai' | 'alphago'
    this.learningLevel = 1; // 1 | 2 | 3
    this.showHints = true;
    this.showAIExplainer = true;

    // AI vs AI state
    this.aiEngineMode = 'pro'; // 'pro' (high-speed grandmaster self-play) | 'gemini' (live Gemini 3.8 Flash)
    this.selectedProGameIndex = 0;
    this.proGameMoveIndex = 0;
    this.aiPlayInterval = null;
    this.aiSpeed = 800; // ms
    this.isAiPlaying = false;
    this.isGeminiThinking = false;
    this.isFullscreenMode = false;
    this.coachingRequestId = 0;

    // AlphaGo state
    this.selectedYear = '2016';
    this.selectedGameIndex = 0; // Default to Game 2 (Move 37)
    this.alphaGoMatch = null;
    this.alphaMoveIndex = 0; // Current move in replay
    this.alphaPlayInterval = null;
    this.isAlphaPlaying = false;

    // Dom elements
    this.initDOMElements();

    // Engines: Learning Novice defaults to 9x9
    this.engine = new GoEngine(9);
    this.renderer = new BoardRenderer(this.boardCanvas, this.engine);
    this.particles = new ParticleEngine(this.particleCanvas);
    this.aiAgent = new GoAIAgent(this.engine);

    if (this.selectBoardTheme) this.renderer.setTheme(this.selectBoardTheme.value);
    if (this.selectVfxStyle) this.particles.setStyle(this.selectVfxStyle.value);

    // Initial setup
    this.setupTheme();
    this.setupEventListeners();
    this.setupAlphaGoMatches();
    this.resizeCanvas();

    // Start in requested mode from URL or default to Learning Mode
    const urlParams = new URLSearchParams(window.location.search);
    const initialMode = urlParams.get('mode');
    if (['learn', 'aivsai', 'alphago'].includes(initialMode)) {
      this.switchMode(initialMode);
    } else {
      this.switchMode('learn');
    }
    this.updateUI();
  }

  initDOMElements() {
    this.boardViewport = document.getElementById('board-viewport');
    this.boardCanvas = document.getElementById('board-canvas');
    this.particleCanvas = document.getElementById('particle-canvas');

    // Header buttons
    this.modeTabButtons = document.querySelectorAll('.mode-tab-btn');
    this.btnThemeToggle = document.getElementById('btn-theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.soundIcon = document.getElementById('sound-icon');
    this.btnDemoGuide = document.getElementById('btn-demo-guide');
    this.btnOriginalPrompt = document.getElementById('btn-original-prompt');

    // View Toolbar
    this.btnTiltToggle = document.getElementById('btn-tilt-toggle');
    this.tiltLabel = document.getElementById('tilt-label');
    this.btnHeatmapToggle = document.getElementById('btn-heatmap-toggle');
    this.btnCoordsToggle = document.getElementById('btn-coords-toggle');
    this.btnNumbersToggle = document.getElementById('btn-numbers-toggle');
    this.selectBoardSize = document.getElementById('select-board-size');
    this.selectBoardTheme = document.getElementById('select-board-theme');
    this.selectVfxStyle = document.getElementById('select-vfx-style');

    // Board Footer
    this.labelBlackPlayer = document.getElementById('label-black-player');
    this.labelBlackCaps = document.getElementById('label-black-caps');
    this.labelWhitePlayer = document.getElementById('label-white-player');
    this.labelWhiteCaps = document.getElementById('label-white-caps');
    this.turnBadge = document.getElementById('turn-badge');
    this.moveCountBadge = document.getElementById('move-count-badge');

    // Fullscreen and AI Thinking Elements
    this.btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');
    this.fullscreenCoachPanel = document.getElementById('fullscreen-coach-panel');
    this.fsLevelBadge = document.getElementById('fs-level-badge');
    this.fsBlackCaps = document.getElementById('fs-black-caps');
    this.fsWhiteCaps = document.getElementById('fs-white-caps');
    this.fsMoveCount = document.getElementById('fs-move-count');
    this.fsEvalCard = document.getElementById('fs-eval-card');
    this.fsEvalBadge = document.getElementById('fs-eval-badge');
    this.fsEvalTitle = document.getElementById('fs-eval-title');
    this.fsEvalExplanation = document.getElementById('fs-eval-explanation');
    this.fsRecCoord = document.getElementById('fs-rec-coord');
    this.fsWhatToDo = document.getElementById('fs-what-to-do');
    this.fsWatchOut = document.getElementById('fs-watch-out');
    this.fsWhatNot = document.getElementById('fs-what-not');
    this.fsPosSummary = document.getElementById('fs-pos-summary');
    this.btnFsExitPanel = document.getElementById('btn-fs-exit-panel');
    this.fsTopPill = document.getElementById('fs-top-pill');
    this.btnFsTopExit = document.getElementById('btn-fs-top-exit');
    this.aiThinkingIndicator = document.getElementById('ai-thinking-indicator');
    this.fsCandidatesContainer = document.getElementById('fs-candidates-container');
    this.fsCandidateList = document.getElementById('fs-candidate-list');
    this.fsPillTimer = null;

    // Mode Panels
    this.panelLearn = document.getElementById('panel-learn');
    this.panelAiVsAi = document.getElementById('panel-aivsai');
    this.panelAlphaGo = document.getElementById('panel-alphago');

    // Learn Mode Controls
    this.selectCoachVoice = document.getElementById('select-coach-voice');
    this.btnToggleVoice = document.getElementById('btn-toggle-voice');
    this.voiceToggleIcon = document.getElementById('voice-toggle-icon');
    this.voiceToggleLabel = document.getElementById('voice-toggle-label');
    this.btnTestVoice = document.getElementById('btn-test-voice');
    this.levelButtons = document.querySelectorAll('.level-btn');
    this.btnToggleHintBox = document.getElementById('btn-toggle-hint-box');
    this.hintBoxContainer = document.getElementById('hint-box-container');
    this.hintLevelTitle = document.getElementById('hint-level-title');
    this.hintStatusBadge = document.getElementById('hint-status-badge');
    this.hintWhatToDo = document.getElementById('hint-what-to-do');
    this.hintWatchOut = document.getElementById('hint-watch-out');
    this.hintWhatNot = document.getElementById('hint-what-not');
    this.evalBox = document.getElementById('eval-box');
    this.evalBadge = document.getElementById('eval-badge');
    this.evalTitle = document.getElementById('eval-title');
    this.evalExplanation = document.getElementById('eval-explanation');
    this.btnLearnUndo = document.getElementById('btn-learn-undo');
    this.btnLearnPass = document.getElementById('btn-learn-pass');
    this.btnLearnGeminiAsk = document.getElementById('btn-learn-gemini-ask');
    this.btnLearnReset = document.getElementById('btn-learn-reset');

    // AI vs AI Controls
    this.aivsaiStatus = document.getElementById('aivsai-status');
    this.btnEnginePro = document.getElementById('btn-engine-pro');
    this.btnEngineGemini = document.getElementById('btn-engine-gemini');
    this.proGameSelectContainer = document.getElementById('pro-game-select-container');
    this.selectProGame = document.getElementById('select-pro-game');
    this.btnAiPlayPause = document.getElementById('btn-ai-play-pause');
    this.btnAiStepForward = document.getElementById('btn-ai-step-forward');
    this.btnAiStepBack = document.getElementById('btn-ai-step-back');
    this.btnAiReset = document.getElementById('btn-ai-reset');
    this.aiSpeedSlider = document.getElementById('ai-speed-slider');
    this.speedLabel = document.getElementById('speed-label');
    this.aiCommentaryText = document.getElementById('ai-commentary-text');
    this.aiCommentaryEngineLabel = document.getElementById('ai-commentary-engine-label');
    this.btnToggleAiExplainer = document.getElementById('btn-toggle-ai-explainer');

    // AlphaGo Controls
    this.selectAlphaYear = document.getElementById('select-alphago-year');
    this.selectAlphaGame = document.getElementById('select-alphago-game');
    this.alphaMatchTitle = document.getElementById('alphago-match-title');
    this.alphaMatchMeta = document.getElementById('alphago-match-meta');
    this.btnJumpMove37 = document.getElementById('btn-jump-move-37');
    this.btnJumpMove78 = document.getElementById('btn-jump-move-78');
    this.btnAlphaStart = document.getElementById('btn-alpha-start');
    this.btnAlphaPrev = document.getElementById('btn-alpha-prev');
    this.btnAlphaPlay = document.getElementById('btn-alpha-play');
    this.btnAlphaNext = document.getElementById('btn-alpha-next');
    this.btnAlphaEnd = document.getElementById('btn-alpha-end');
    this.alphaScrubber = document.getElementById('alpha-scrubber');
    this.alphaMoveNum = document.getElementById('alpha-move-num');
    this.alphaTotalMoves = document.getElementById('alpha-total-moves');
    this.alphaCommentaryText = document.getElementById('alpha-commentary-text');
    this.btnDeepDiveModal = document.getElementById('btn-deep-dive-modal');

    // Modals
    this.modalMove37 = document.getElementById('modal-move-37');
    this.modalMove78 = document.getElementById('modal-move-78');
    this.modalPrompt = document.getElementById('modal-prompt');
    this.modalGuide = document.getElementById('modal-guide');
    this.modalOngoingGame = document.getElementById('modal-ongoing-game');
    this.ongoingGameDesc = document.getElementById('ongoing-game-desc');
    this.ongoingGameMoveNum = document.getElementById('ongoing-game-move-num');
    this.btnModalNewTab = document.getElementById('btn-modal-new-tab');
    this.btnModalDiscard = document.getElementById('btn-modal-discard');
    this.btnModalCancel = document.getElementById('btn-modal-cancel');

    // Sidebar Top Bar
    this.btnTopRestart = document.getElementById('btn-top-restart');
    this.sidebarModeText = document.getElementById('sidebar-mode-text');
    this.sidebarModeBadge = document.getElementById('sidebar-mode-badge');
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas());
    window.addEventListener('load', () => this.resizeCanvas());

    if (typeof ResizeObserver !== 'undefined' && this.boardViewport) {
      this.resizeObserver = new ResizeObserver(() => {
        this.resizeCanvas();
      });
      this.resizeObserver.observe(this.boardViewport);
    }

    // Unlock Web Speech API & Web Audio on first user interaction gesture
    document.addEventListener('click', () => voiceCoach.unlock(), { once: true });

    if (this.btnTopRestart) {
      this.btnTopRestart.addEventListener('click', () => {
        this.confirmModeSwitchOrRestart(this.currentMode, () => {
          this.handleGlobalRestart();
        });
      });
    }

    this.modeTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetMode = btn.dataset.mode;
        this.confirmModeSwitchOrRestart(targetMode, () => {
          this.switchMode(targetMode);
        });
      });
    });

    this.btnThemeToggle.addEventListener('click', () => this.toggleTheme());

    this.btnSoundToggle.addEventListener('click', () => {
      sound.muted = !sound.muted;
      this.soundIcon.textContent = sound.muted ? '🔇' : '🔊';
    });

    this.btnOriginalPrompt.addEventListener('click', () => this.openModal(this.modalPrompt));
    this.btnDemoGuide.addEventListener('click', () => this.openModal(this.modalGuide));
    this.btnDeepDiveModal.addEventListener('click', () => this.openModal(this.modalMove37));

    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        const modal = document.getElementById(modalId);
        if (modal) this.closeModal(modal);
      });
    });

    [this.modalMove37, this.modalMove78, this.modalPrompt, this.modalGuide, this.modalOngoingGame].filter(Boolean).forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });

    // View Toolbar
    this.btnTiltToggle.addEventListener('click', () => {
      const isTilt = this.boardViewport.classList.toggle('tilt-view');
      this.btnTiltToggle.classList.toggle('active', isTilt);
      this.tiltLabel.textContent = isTilt ? '2D Flat' : '2.5D Tilt';
    });

    this.btnHeatmapToggle.addEventListener('click', () => {
      const active = this.renderer.toggleInfluenceHeatmap();
      this.btnHeatmapToggle.classList.toggle('active', active);
    });

    this.btnCoordsToggle.addEventListener('click', () => {
      const active = this.renderer.toggleCoordinates();
      this.btnCoordsToggle.classList.toggle('active', active);
    });

    this.btnNumbersToggle.addEventListener('click', () => {
      const active = this.renderer.toggleMoveNumbers();
      this.btnNumbersToggle.classList.toggle('active', active);
    });

    this.selectBoardSize.addEventListener('change', (e) => {
      const size = parseInt(e.target.value, 10);
      this.changeBoardSize(size);
    });

    this.selectBoardTheme.addEventListener('change', (e) => {
      this.renderer.setTheme(e.target.value);
    });

    this.selectVfxStyle.addEventListener('change', (e) => {
      this.particles.setStyle(e.target.value);
    });

    // Board Mouse Interaction
    this.boardCanvas.addEventListener('mousemove', (e) => {
      // User can only interact in Learn mode, on Black's turn, when AI/coach is not acting
      if (this.currentMode !== 'learn' || this.engine.turn !== BLACK || this.isGeminiThinking || this.isAiOpponentResponding) {
        this.boardCanvas.style.cursor = 'default';
        this.renderer.setHover(null, null);
        return;
      }
      this.boardCanvas.style.cursor = 'crosshair';
      const rect = this.boardCanvas.getBoundingClientRect();
      const px = (e.clientX - rect.left) * (this.boardCanvas.width / rect.width);
      const py = (e.clientY - rect.top) * (this.boardCanvas.height / rect.height);
      const coord = this.renderer.toBoardCoord(px, py);
      if (coord) {
        this.renderer.setHover(coord.x, coord.y);
      } else {
        this.renderer.setHover(null, null);
      }
    });

    this.boardCanvas.addEventListener('mouseleave', () => {
      this.renderer.setHover(null, null);
    });

    this.boardCanvas.addEventListener('click', (e) => {
      voiceCoach.unlock();

      // STRICT LOGIC GUARD:
      // 1. In 'aivsai' and 'alphago' modes, human clicks are strictly prohibited (AI / pro replay only)
      // 2. In 'learn' mode, human plays exclusively as BLACK. White is the AI opponent.
      // 3. User cannot click while AI is thinking, speaking, or placing a counter-move.
      if (this.currentMode !== 'learn') return;
      if (this.engine.turn !== BLACK) return;
      if (this.isGeminiThinking || this.isAiOpponentResponding) return;

      const rect = this.boardCanvas.getBoundingClientRect();
      const px = (e.clientX - rect.left) * (this.boardCanvas.width / rect.width);
      const py = (e.clientY - rect.top) * (this.boardCanvas.height / rect.height);
      const coord = this.renderer.toBoardCoord(px, py);
      if (coord) {
        this.handleUserPlay(coord.x, coord.y);
      }
    });

    // LEARN MODE CONTROLS
    // Voice Coach setup
    if (this.selectCoachVoice) {
      this.selectCoachVoice.value = voiceCoach.selectedPersona;
      this.selectCoachVoice.addEventListener('change', (e) => {
        voiceCoach.setPersona(e.target.value);
      });
    }

    if (this.btnToggleVoice) {
      const updateVoiceBtn = (active) => {
        this.btnToggleVoice.classList.toggle('active', active);
        this.voiceToggleIcon.textContent = active ? '🔊' : '🔇';
        this.voiceToggleLabel.textContent = active ? 'Voice ON' : 'Muted';
      };
      updateVoiceBtn(voiceCoach.enabled);

      this.btnToggleVoice.addEventListener('click', () => {
        const active = voiceCoach.setEnabled(!voiceCoach.enabled);
        updateVoiceBtn(active);
      });
    }

    if (this.btnTestVoice) {
      this.btnTestVoice.addEventListener('click', () => {
        voiceCoach.testVoice();
      });
    }

    this.levelButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        voiceCoach.stop();
        this.levelButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.learningLevel = parseInt(btn.dataset.level, 10);

        // Auto-adapt board size for learning curve: Lvl 1 -> 9x9, Lvl 2 -> 13x13, Lvl 3 -> 19x19
        const recommendedSize = this.learningLevel === 1 ? 9 : (this.learningLevel === 2 ? 13 : 19);
        this.selectBoardSize.value = String(recommendedSize);
        this.changeBoardSize(recommendedSize);
      });
    });

    this.btnToggleHintBox.addEventListener('click', () => {
      this.showHints = !this.showHints;
      this.hintBoxContainer.style.display = this.showHints ? 'flex' : 'none';
      this.btnToggleHintBox.querySelector('span').textContent = this.showHints ? '👁️' : '🔒';
    });

    this.btnLearnGeminiAsk.addEventListener('click', () => {
      this.updateLearningCoachWithGemini(null, true);
    });

    this.btnLearnUndo.addEventListener('click', () => {
      if (this.isGeminiThinking || this.isAiOpponentResponding) return;
      voiceCoach.stop();
      if (this.engine.turn === WHITE) {
        this.engine.undo();
      } else {
        this.engine.undo();
        this.engine.undo();
      }
      this.renderer.render();
      this.updateUI();
      this.updateLearningCoachWithGemini(null, false);
    });

    this.btnLearnPass.addEventListener('click', () => {
      if (this.currentMode !== 'learn' || this.engine.turn !== BLACK || this.isGeminiThinking || this.isAiOpponentResponding) return;
      voiceCoach.stop();
      this.engine.pass();
      this.renderer.render();
      this.updateUI();
      this.isAiOpponentResponding = true;
      setTimeout(async () => {
        try {
          await this.triggerAiOpponentResponse();
        } finally {
          this.isAiOpponentResponding = false;
        }
      }, 400);
    });

    this.btnLearnReset.addEventListener('click', () => {
      this.confirmModeSwitchOrRestart('learn', () => {
        voiceCoach.stop();
        this.coachingRequestId++;
        this.engine.reset();
        this.renderer.setSpotlight(null);
        this.renderer.setCandidateSuggestions([]);
        this.particles.clear();
        this.renderer.render();
        this.updateUI();
        this.updateLearningCoachWithGemini();
      });
    });

    // AI VS AI CONTROLS: Engine Switcher
    this.btnEnginePro.addEventListener('click', () => {
      this.setAiEngineMode('pro');
    });

    this.btnEngineGemini.addEventListener('click', () => {
      this.setAiEngineMode('gemini');
    });

    this.selectProGame.addEventListener('change', (e) => {
      this.selectedProGameIndex = parseInt(e.target.value, 10);
      this.resetAiVsAiGame();
    });

    this.btnAiPlayPause.addEventListener('click', () => this.toggleAiVsAiPlay());
    this.btnAiStepForward.addEventListener('click', () => this.stepAiVsAi());
    this.btnAiStepBack.addEventListener('click', () => {
      this.pauseAiVsAi();
      if (this.engine.undo()) {
        if (this.aiEngineMode === 'pro' && this.proGameMoveIndex > 0) {
          this.proGameMoveIndex--;
        }
        this.renderer.render();
        this.updateUI();
      }
    });
    this.btnAiReset.addEventListener('click', () => {
      this.confirmModeSwitchOrRestart('aivsai', () => {
        this.resetAiVsAiGame();
      });
    });

    this.aiSpeedSlider.addEventListener('input', (e) => {
      this.aiSpeed = parseInt(e.target.value, 10);
      this.speedLabel.textContent = `${this.aiSpeed}ms`;
      if (this.isAiPlaying) {
        this.pauseAiVsAi();
        this.startAiVsAi();
      }
    });

    this.btnToggleAiExplainer.addEventListener('click', () => {
      this.showAIExplainer = !this.showAIExplainer;
      this.aiCommentaryText.style.display = this.showAIExplainer ? 'block' : 'none';
    });

    // ALPHAGO CONTROLS
    this.selectAlphaYear.addEventListener('change', (e) => {
      this.selectedYear = e.target.value;
      this.setupAlphaGoMatches();
    });

    this.selectAlphaGame.addEventListener('change', (e) => {
      this.selectedGameIndex = parseInt(e.target.value, 10);
      this.loadAlphaGoMatch();
    });

    this.btnJumpMove37.addEventListener('click', () => {
      this.jumpToMove(37, '2016', 1); // Game 2 is index 1 (chronological)
      this.openModal(this.modalMove37);
    });

    this.btnJumpMove78.addEventListener('click', () => {
      this.jumpToMove(78, '2016', 3); // Game 4 is index 3 (chronological)
      this.openModal(this.modalMove78);
    });

    this.btnAlphaStart.addEventListener('click', () => this.seekAlphaMove(0));
    this.btnAlphaPrev.addEventListener('click', () => this.seekAlphaMove(this.alphaMoveIndex - 1));
    this.btnAlphaNext.addEventListener('click', () => this.seekAlphaMove(this.alphaMoveIndex + 1));
    this.btnAlphaEnd.addEventListener('click', () => this.seekAlphaMove(this.alphaGoMatch.moves.length));
    this.btnAlphaPlay.addEventListener('click', () => this.toggleAlphaReplay());

    this.alphaScrubber.addEventListener('input', (e) => {
      this.seekAlphaMove(parseInt(e.target.value, 10));
    });

    // Full Screen Focus Mode: Left 1/4 Coach, Right 3/4 Board
    if (this.btnFullscreenToggle) {
      this.btnFullscreenToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFullscreenMode();
      });
    }

    if (this.btnFsExitPanel) {
      this.btnFsExitPanel.addEventListener('click', (e) => {
        e.stopPropagation();
        this.exitFullscreenMode();
      });
    }

    if (this.btnFsTopExit) {
      this.btnFsTopExit.addEventListener('click', (e) => {
        e.stopPropagation();
        this.exitFullscreenMode();
      });
    }

    // Clicking anywhere on screen outside the board canvas and left coach panel brings back the default menu
    document.addEventListener('click', (e) => {
      if (this.isFullscreenMode) {
        if (e.target === this.boardCanvas) {
          // Click on the board canvas itself is for placing stones
          return;
        }
        if (e.target.closest('#fullscreen-coach-panel') && !e.target.closest('#btn-fs-exit-panel')) {
          // Allow reading / scrolling inside the left coach panel
          return;
        }
        if (e.target.closest('#btn-fullscreen-toggle')) {
          return;
        }
        this.exitFullscreenMode();
      }
    });

    // Escape key also exits fullscreen mode
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isFullscreenMode) {
        this.exitFullscreenMode();
      }
    });
  }

  // ========================================================================
  // FULL SCREEN / FOCUS MODE (LEFT 1/4 COACH, RIGHT 3/4 BOARD)
  // ========================================================================

  enterFullscreenMode() {
    this.isFullscreenMode = true;
    document.body.classList.add('fullscreen-mode');
    if (this.fullscreenCoachPanel) this.fullscreenCoachPanel.style.display = 'flex';
    if (this.fsTopPill) {
      this.fsTopPill.style.display = 'flex';
      this.fsTopPill.classList.remove('fade-out');
      clearTimeout(this.fsPillTimer);
      this.fsPillTimer = setTimeout(() => {
        if (this.fsTopPill) this.fsTopPill.classList.add('fade-out');
      }, 10000); // Message disappears smoothly after 10 seconds
    }
    this.syncFullscreenTips();
    setTimeout(() => this.resizeCanvas(), 50);
  }

  exitFullscreenMode() {
    if (!this.isFullscreenMode) return;
    this.isFullscreenMode = false;
    clearTimeout(this.fsPillTimer);
    document.body.classList.remove('fullscreen-mode');
    if (this.fullscreenCoachPanel) this.fullscreenCoachPanel.style.display = 'none';
    if (this.fsTopPill) {
      this.fsTopPill.style.display = 'none';
      this.fsTopPill.classList.remove('fade-out');
    }
    setTimeout(() => this.resizeCanvas(), 50);
  }

  toggleFullscreenMode() {
    if (this.isFullscreenMode) {
      this.exitFullscreenMode();
    } else {
      this.enterFullscreenMode();
    }
  }

  syncFullscreenTips(advice = null) {
    if (this.currentMode !== 'learn') {
      if (this.fsCandidatesContainer) this.fsCandidatesContainer.style.display = 'none';
      this.renderer.setCandidateSuggestions([]);
      return;
    }

    if (advice) {
      if (this.fsRecCoord) this.fsRecCoord.textContent = advice.recommendedMove || (this.engine.size === 9 ? 'E5' : (this.engine.size === 13 ? 'G7' : 'Q16'));
      if (this.fsWhatToDo) this.fsWhatToDo.textContent = advice.whatToDo;
      if (this.fsWatchOut) this.fsWatchOut.textContent = advice.whatToWatchOutFor;
      if (this.fsWhatNot) this.fsWhatNot.textContent = advice.whatNotToDo;
      if (this.fsPosSummary) this.fsPosSummary.textContent = advice.summary || 'Maintain balance between territorial foundation and central influence.';

      // Render 3 Numbered Move Candidates for Novice (Lvl 1) & Medium (Lvl 2)
      const isNoviceOrMedium = this.learningLevel <= 2;
      const isBlackTurn = this.engine.turn === BLACK;
      const candidates = advice.top3Candidates || [];

      if (isNoviceOrMedium && isBlackTurn && candidates.length > 0) {
        if (this.fsCandidatesContainer) this.fsCandidatesContainer.style.display = 'flex';
        if (this.fsCandidateList) {
          this.fsCandidateList.innerHTML = '';
          candidates.forEach(cand => {
            const item = document.createElement('div');
            item.className = `fs-candidate-item rank-${cand.rank}`;
            item.dataset.coord = cand.coord;
            item.innerHTML = `
              <div class="candidate-badge rank-${cand.rank}">${cand.rank}</div>
              <div class="candidate-info">
                <div class="candidate-coord-row">
                  <span class="candidate-coord">${cand.coord}</span>
                  <span class="candidate-tag">${cand.name || `Choice ${cand.rank}`}</span>
                </div>
                <div class="candidate-reason">${cand.reason || 'Strategic placement.'}</div>
              </div>
            `;
            item.addEventListener('click', (e) => {
              e.stopPropagation();
              const pt = this.engine.fromGoCoord(cand.coord);
              if (pt) this.handleUserPlay(pt.x, pt.y);
            });
            this.fsCandidateList.appendChild(item);
          });
        }
        // Set ghost stones 1, 2, 3 on board
        this.renderer.setCandidateSuggestions(candidates);
      } else {
        if (this.fsCandidatesContainer) this.fsCandidatesContainer.style.display = 'none';
        this.renderer.setCandidateSuggestions([]);
      }
    } else {
      if (this.fsWhatToDo && this.hintWhatToDo) this.fsWhatToDo.textContent = this.hintWhatToDo.textContent;
      if (this.fsWatchOut && this.hintWatchOut) this.fsWatchOut.textContent = this.hintWatchOut.textContent;
      if (this.fsWhatNot && this.hintWhatNot) this.fsWhatNot.textContent = this.hintWhatNot.textContent;
    }

    if (this.fsBlackCaps) this.fsBlackCaps.textContent = `${this.engine.capturedStones[BLACK]} caps`;
    if (this.fsWhiteCaps) this.fsWhiteCaps.textContent = `${this.engine.capturedStones[WHITE]} caps`;
    if (this.fsMoveCount) this.fsMoveCount.textContent = `Move ${this.engine.history.length}`;
    if (this.fsLevelBadge) {
      const levelNames = { 1: 'Lvl 1: Novice (9×9)', 2: 'Lvl 2: Medium (13×13)', 3: 'Lvl 3: Advance (19×19)' };
      this.fsLevelBadge.textContent = levelNames[this.learningLevel] || 'Learning Go';
    }
  }

  updateAiThinkingIndicator() {
    if (!this.aiThinkingIndicator) return;
    // In Learning mode, show "AI thinking" fading in and out whenever it is White's turn or AI is computing
    const isAiThinking = (this.currentMode === 'learn') &&
      (this.engine.turn === WHITE || this.isGeminiThinking || this.isAiOpponentResponding);
    this.aiThinkingIndicator.style.display = isAiThinking ? 'flex' : 'none';
  }

  setAiEngineMode(mode) {
    this.pauseAiVsAi();
    this.aiEngineMode = mode;
    this.btnEnginePro.classList.toggle('active', mode === 'pro');
    this.btnEngineGemini.classList.toggle('active', mode === 'gemini');
    this.proGameSelectContainer.style.display = mode === 'pro' ? 'block' : 'none';
    this.aiCommentaryEngineLabel.textContent = mode === 'pro' ? 'AlphaGo Zero Analysis' : 'Gemini 3.8 Flash Analysis';

    if (mode === 'pro') {
      this.labelBlackPlayer.textContent = 'AlphaGo Zero (Black)';
      this.labelWhitePlayer.textContent = 'AlphaGo Zero (White)';
      this.aiCommentaryText.textContent = 'Ready for high-speed grandmaster self-play without unnatural crawling. Click ▶️ Play.';
    } else {
      this.labelBlackPlayer.textContent = 'Gemini 3.8 Flash (Black)';
      this.labelWhitePlayer.textContent = 'Gemini 3.8 Flash (White)';
      this.aiCommentaryText.textContent = 'Ready for live move-by-move neural play with Gemini 3.8 Flash. Click ▶️ Play.';
    }
    this.resetAiVsAiGame();
  }

  handleGlobalRestart() {
    this.coachingRequestId++;
    voiceCoach.stop();
    this.isGeminiThinking = false;
    this.isAiOpponentResponding = false;
    this.renderer.setSpotlight(null);
    this.renderer.setCandidateSuggestions([]);
    this.renderer.setHover(null, null);
    this.particles.clear();

    if (this.currentMode === 'learn') {
      this.engine.reset();
      this.renderer.render();
      this.updateUI();
      this.updateLearningCoachWithGemini();
    } else if (this.currentMode === 'aivsai') {
      this.resetAiVsAiGame();
    } else if (this.currentMode === 'alphago') {
      this.pauseAlphaReplay();
      this.seekAlphaMove(0);
    }
  }

  resetAiVsAiGame() {
    this.coachingRequestId++;
    this.pauseAiVsAi();
    this.engine.reset();
    this.particles.clear();
    this.renderer.setSpotlight(null);
    this.renderer.setCandidateSuggestions([]);
    this.proGameMoveIndex = 0;
    this.renderer.render();
    this.updateUI();
  }

  resizeCanvas(force = false) {
    if (!this.boardViewport) return;
    const rect = this.boardViewport.getBoundingClientRect();
    const w = this.boardViewport.clientWidth || rect.width || 0;
    const h = this.boardViewport.clientHeight || rect.height || 0;
    const size = Math.floor(Math.min(w, h));
    if (size > 0) {
      const dimensionChanged = (this.boardCanvas.width !== size || this.boardCanvas.height !== size);
      if (dimensionChanged || force) {
        this.boardCanvas.width = size;
        this.boardCanvas.height = size;
        this.particleCanvas.width = size;
        this.particleCanvas.height = size;
        this.renderer.resize(size, size);
        this.particles.resize(size, size);
      } else {
        this.renderer.updateMetrics();
      }
    }
  }

  setupTheme() {
    const saved = localStorage.getItem('move37_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('move37_theme', next);
    this.themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
    this.renderer.render();
  }

  openModal(modal) {
    if (modal) modal.classList.add('show');
  }

  closeModal(modal) {
    if (modal) modal.classList.remove('show');
  }

  getCurrentMoveNumber() {
    if (this.currentMode === 'learn' || this.currentMode === 'aivsai') {
      return this.engine.history.length;
    } else if (this.currentMode === 'alphago') {
      return this.alphaMoveIndex;
    }
    return 0;
  }

  hasOngoingGame() {
    if (this.currentMode === 'learn') {
      return this.engine.history.length > 0;
    } else if (this.currentMode === 'aivsai') {
      return this.engine.history.length > 0 || this.isAiPlaying;
    } else if (this.currentMode === 'alphago') {
      return this.alphaMoveIndex > 0 || this.isAlphaPlaying;
    }
    return false;
  }

  confirmModeSwitchOrRestart(targetMode, onConfirm) {
    if (!this.hasOngoingGame()) {
      onConfirm();
      return;
    }

    const currentMove = this.getCurrentMoveNumber();
    const modeLabels = {
      learn: 'Learning Go',
      aivsai: 'AI vs AI',
      alphago: 'AlphaGo Relive'
    };
    const currentLabel = modeLabels[this.currentMode] || 'Current Mode';
    const targetLabel = modeLabels[targetMode] || 'New Mode';
    const isSameMode = (targetMode === this.currentMode);

    if (this.ongoingGameMoveNum) {
      this.ongoingGameMoveNum.textContent = String(currentMove);
    }

    if (this.ongoingGameDesc) {
      if (isSameMode) {
        this.ongoingGameDesc.innerHTML = `You have an active game in progress at <strong>Move ${currentMove}</strong> in <strong>${currentLabel}</strong>.<br><br>Starting a new game will reset your current board.`;
      } else {
        this.ongoingGameDesc.innerHTML = `You have an active game in progress at <strong>Move ${currentMove}</strong> in <strong>${currentLabel}</strong>.<br><br>Switching to <strong>${targetLabel}</strong> in this tab will reset your current board.`;
      }
    }

    if (this.btnModalNewTab) {
      if (isSameMode) {
        this.btnModalNewTab.style.display = 'none';
      } else {
        this.btnModalNewTab.style.display = 'inline-flex';
        this.btnModalNewTab.onclick = () => {
          const url = new URL(window.location.href);
          url.searchParams.set('mode', targetMode);
          window.open(url.toString(), '_blank');
          this.closeModal(this.modalOngoingGame);
        };
      }
    }

    if (this.btnModalDiscard) {
      this.btnModalDiscard.textContent = isSameMode ? '🔄 Restart Game' : '🔄 Discard & Switch';
      this.btnModalDiscard.onclick = () => {
        this.closeModal(this.modalOngoingGame);
        onConfirm();
      };
    }

    this.openModal(this.modalOngoingGame);
  }

  changeBoardSize(newSize) {
    this.engine.setSize(newSize);
    this.renderer.updateMetrics();
    this.resizeCanvas(true);
    this.renderer.setSpotlight(null);
    this.particles.clear();
    this.renderer.render();
    this.updateUI();
    if (this.currentMode === 'learn') {
      this.updateLearningCoachWithGemini();
    }
  }

  switchMode(mode) {
    this.coachingRequestId++;
    this.currentMode = mode;
    voiceCoach.stop();
    this.pauseAiVsAi();
    this.pauseAlphaReplay();
    this.isGeminiThinking = false;
    this.isAiOpponentResponding = false;

    // Persist active mode in URL query param without reload
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', mode);
      window.history.replaceState(null, '', url.toString());
    } catch (_) {}

    this.modeTabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    this.panelLearn.classList.toggle('active', mode === 'learn');
    this.panelAiVsAi.classList.toggle('active', mode === 'aivsai');
    this.panelAlphaGo.classList.toggle('active', mode === 'alphago');

    // Update Top Right Mode Indicator Badge
    if (this.sidebarModeText) {
      if (mode === 'learn') {
        this.sidebarModeText.textContent = 'Learning Go';
        const iconSpan = this.sidebarModeBadge ? this.sidebarModeBadge.querySelector('span:first-child') : null;
        if (iconSpan) iconSpan.textContent = '🎓';
      } else if (mode === 'aivsai') {
        this.sidebarModeText.textContent = 'AI vs AI';
        const iconSpan = this.sidebarModeBadge ? this.sidebarModeBadge.querySelector('span:first-child') : null;
        if (iconSpan) iconSpan.textContent = '⚔️';
      } else if (mode === 'alphago') {
        this.sidebarModeText.textContent = 'AlphaGo Relive';
        const iconSpan = this.sidebarModeBadge ? this.sidebarModeBadge.querySelector('span:first-child') : null;
        if (iconSpan) iconSpan.textContent = '📜';
      }
    }

    // Always completely clear ghost move suggestions, spotlight, hover, and capture VFX
    this.renderer.setCandidateSuggestions([]);
    this.renderer.setSpotlight(null);
    this.renderer.setHover(null, null);
    this.particles.clear();

    if (mode !== 'learn') {
      if (this.fsCandidatesContainer) this.fsCandidatesContainer.style.display = 'none';
      if (this.fsCandidateList) this.fsCandidateList.innerHTML = '';
    }

    if (mode === 'alphago' || mode === 'aivsai') {
      // Pro self-play and AlphaGo matches are played on standard 19x19
      if (this.engine.size !== 19) {
        this.previousBoardSize = this.engine.size;
        this.changeBoardSize(19);
      } else {
        this.renderer.updateMetrics();
        this.resizeCanvas(true);
      }
      this.selectBoardSize.value = "19";
      this.selectBoardSize.disabled = (mode === 'alphago');
    } else {
      this.selectBoardSize.disabled = false;
      // In Learning mode, default board size to selected level:
      // Lvl 1: Novice -> 9x9, Lvl 2: Medium -> 13x13, Lvl 3: Advance -> 19x19
      const targetSize = this.learningLevel === 1 ? 9 : (this.learningLevel === 2 ? 13 : 19);
      if (this.engine.size !== targetSize) {
        this.changeBoardSize(targetSize);
      } else {
        this.renderer.updateMetrics();
        this.resizeCanvas(true);
      }
      this.selectBoardSize.value = String(targetSize);
    }

    this.engine.reset();

    if (mode === 'learn') {
      this.labelBlackPlayer.textContent = 'Black (You)';
      this.labelWhitePlayer.textContent = 'White (Gemini Coach)';
      this.updateLearningCoachWithGemini();
    } else if (mode === 'aivsai') {
      this.setAiEngineMode('pro');
    } else if (mode === 'alphago') {
      this.loadAlphaGoMatch();
    }

    this.renderer.render();
    this.updateUI();
  }

  // ========================================================================
  // CAPTURE VFX & AUDIO COORDINATION
  // ========================================================================

  triggerCaptureEffect(capturedStones, capturedColor) {
    if (!capturedStones || capturedStones.length === 0) return;
    let style = this.particles.style;
    if (style === 'random') {
      const styles = ['dissolve', 'explode', 'flames'];
      style = styles[Math.floor(Math.random() * styles.length)];
    }
    sound.playCapture(style);
    const pixelStones = capturedStones.map(s => {
      const p = this.renderer.toPixel(s.x, s.y);
      return { px: p.px, py: p.py, color: capturedColor };
    });
    this.particles.spawnCaptureVFX(pixelStones, style);
  }

  // ========================================================================
  // LEARNING GO MODE LOGIC (POWERED BY GEMINI 3.8 FLASH)
  // ========================================================================

  async handleUserPlay(x, y) {
    // STRICT TURN GUARD:
    // 1. User can only play moves in 'learn' mode
    // 2. User plays strictly as BLACK. (White is strictly the AI opponent)
    // 3. User cannot click while AI is thinking, speaking, or placing a move
    if (this.currentMode !== 'learn' || this.engine.turn !== BLACK || this.isGeminiThinking || this.isAiOpponentResponding) {
      return;
    }

    const coordStr = this.engine.toGoCoord(x, y);

    // 1. Immediate local heuristic grading for instantaneous feedback
    const fastEval = this.aiAgent.evaluateCandidateMoveFast(x, y, BLACK);
    this.showMoveEvaluation(fastEval);

    // 2. Play Black's move
    const result = this.engine.play(x, y, BLACK);
    if (!result.success) return;

    // Immediately clear candidate suggestions on stone placement
    this.renderer.setCandidateSuggestions([]);
    if (this.fsCandidatesContainer) this.fsCandidatesContainer.style.display = 'none';

    // Auto-enter Full Screen Mode as soon as user places their first stone in Learning mode
    if (this.currentMode === 'learn' && !this.isFullscreenMode && this.engine.history.length === 1) {
      this.enterFullscreenMode();
    }

    // 3. Audio & Particle effects
    voiceCoach.stop();
    sound.playStonePlacement(true);
    if (result.captured.length > 0) {
      this.triggerCaptureEffect(result.captured, WHITE);
    }

    this.renderer.render();
    this.updateUI();

    // 4. In Learning Mode: High-Speed Unified Single Turn
    this.isAiOpponentResponding = true;
    this.isGeminiThinking = true;
    this.turnBadge.textContent = 'Sensei Thinking...';
    this.updateUI();

    try {
      if (this.currentMode === 'learn' && this.engine.turn === WHITE) {
        const unifiedData = await this.aiAgent.requestUnifiedTurn(coordStr, this.learningLevel);

        if (unifiedData && unifiedData.success && unifiedData.turn) {
          const { candidateEvaluation, whiteMove, nextBlackAdvice, audioBase64 } = unifiedData.turn;

          // 1. Instantly display Black's move evaluation in Left Sensei Panel
          if (candidateEvaluation) {
            const badgeClasses = {
              'EXCELLENT': 'badge-great',
              'SOLID': 'badge-solid',
              'BLUNDER': 'badge-mistake'
            };
            this.showMoveEvaluation({
              grade: candidateEvaluation.grade || 'SOLID',
              title: candidateEvaluation.title || 'Move Assessment',
              explanation: candidateEvaluation.explanation || '',
              badgeClass: badgeClasses[candidateEvaluation.grade] || 'badge-solid'
            });
          }

          // 2. Play Sensei voice asynchronously (non-blocking!)
          if (voiceCoach.enabled && (audioBase64 || candidateEvaluation?.spokenFeedback)) {
            voiceCoach.speakAsync(candidateEvaluation?.spokenFeedback || '', audioBase64);
          }

          // 3. Human-like natural pause for White (350ms)
          await new Promise(r => setTimeout(r, 350));

          // 4. Play White's counter-move
          let whitePlayed = false;
          if (whiteMove && whiteMove.coord) {
            const pt = this.engine.fromGoCoord(whiteMove.coord);
            if (pt && this.engine.inBounds(pt.x, pt.y) && this.engine.board[pt.y][pt.x] === EMPTY) {
              const res = this.engine.play(pt.x, pt.y, WHITE);
              if (res.success) {
                sound.playStonePlacement(false);
                if (res.captured.length > 0) {
                  this.triggerCaptureEffect(res.captured, BLACK);
                }
                whitePlayed = true;
              }
            }
          }

          if (!whitePlayed) {
            // Local tactical grandmaster fallback (never passes prematurely)
            const smartMove = this.aiAgent.getSmartCandidateMove(WHITE);
            if (smartMove) {
              const res = this.engine.play(smartMove.x, smartMove.y, WHITE);
              if (res.success) {
                sound.playStonePlacement(false);
                if (res.captured.length > 0) {
                  this.triggerCaptureEffect(res.captured, BLACK);
                }
              }
            }
          }

          // 5. Instantly apply Black's upcoming advice & render 3 Candidate Ghost Stones
          if (nextBlackAdvice) {
            this.applyAdviceData(nextBlackAdvice);
          }
        } else {
          // Fallback to sequential calls if unified API is unreachable
          await this.triggerAiOpponentResponse();
        }
      }
    } catch(err) {
      console.warn('[Unified Turn Error]:', err);
      await this.triggerAiOpponentResponse();
    } finally {
      this.isAiOpponentResponding = false;
      this.isGeminiThinking = false;
      this.renderer.render();
      this.updateUI();
    }
  }

  applyAdviceData(advice) {
    if (!advice) return;
    if (this.hintStatusBadge) this.hintStatusBadge.textContent = advice.statusBadge || 'Sensei Ready';
    if (this.hintWhatToDo) this.hintWhatToDo.textContent = advice.whatToDo;
    if (this.hintWatchOut) this.hintWatchOut.textContent = advice.whatToWatchOutFor;
    if (this.hintWhatNot) this.hintWhatNot.textContent = advice.whatNotToDo;
    this.syncFullscreenTips(advice);
    this.renderer.render();
  }

  async triggerAiOpponentResponse() {
    this.isGeminiThinking = true;
    this.turnBadge.textContent = 'Gemini Thinking...';

    try {
      // Query Gemini 3.8 Flash for master move
      const geminiMove = await this.aiAgent.requestGeminiNextMove();

      // Ensure mode and turn haven't changed while awaiting API
      if (this.currentMode !== 'learn' || this.engine.turn !== WHITE) return;

      if (geminiMove && geminiMove.move) {
        const { x, y } = geminiMove.move;
        const res = this.engine.play(x, y, WHITE);
        if (res.success) {
          sound.playStonePlacement(false);
          if (res.captured.length > 0) {
            this.triggerCaptureEffect(res.captured, BLACK);
          }
          this.renderer.render();
          this.updateUI();

          // Voice Announcer announces White's move concisely and returns turn to user
          if (this.currentMode === 'learn') {
            const announcerScript = geminiMove.voiceAnnouncerScript ||
              `White plays at ${this.engine.toGoCoord(x, y)}. Your turn.`;
            if (voiceCoach.enabled) {
              this.turnBadge.textContent = 'Sensei Speaking...';
              await voiceCoach.speakAsync(announcerScript, geminiMove.audioBase64);
            }
          }

          // Update text tips strictly for the playing user (Black)'s upcoming move, preserving Black's move evaluation
          await this.updateLearningCoachWithGemini(null, false, true);
          return;
        }
      }

      // 2. High-Level Grandmaster Fallback: Always play an active, legal counter-move
      const smartMove = this.aiAgent.getSmartCandidateMove(WHITE);
      if (smartMove) {
        const res = this.engine.play(smartMove.x, smartMove.y, WHITE);
        if (res.success) {
          sound.playStonePlacement(false);
          if (res.captured.length > 0) {
            this.triggerCaptureEffect(res.captured, BLACK);
          }
          this.renderer.render();
          this.updateUI();

          const coord = this.engine.toGoCoord(smartMove.x, smartMove.y);
          if (this.currentMode === 'learn') {
            if (voiceCoach.enabled) {
              this.turnBadge.textContent = 'Sensei Speaking...';
              await voiceCoach.speakAsync(`White plays at ${coord}. Your turn.`);
            }
          }
          await this.updateLearningCoachWithGemini(null, false, true);
          return;
        }
      }

      // 3. Absolute Last Resort: Only pass if zero legal non-suicide moves remain on the entire board
      this.engine.pass();
      this.renderer.render();
      this.updateUI();
      if (this.currentMode === 'learn') {
        if (voiceCoach.enabled) {
          this.turnBadge.textContent = 'Sensei Speaking...';
          await voiceCoach.speakAsync('White passes, as the board has no further legal moves. Your turn.');
        }
      }
      await this.updateLearningCoachWithGemini(null, false, true);
    } finally {
      this.isGeminiThinking = false;
      this.updateUI();
    }
  }

  showMoveEvaluation(evaluation) {
    this.evalBadge.className = `eval-badge ${evaluation.badgeClass}`;
    this.evalBadge.textContent = evaluation.grade;
    this.evalTitle.textContent = evaluation.title;
    this.evalExplanation.textContent = evaluation.explanation;

    // Sync to Full-Screen Left Coach Panel
    if (this.fsEvalBadge) {
      this.fsEvalBadge.className = `eval-badge ${evaluation.badgeClass}`;
      this.fsEvalBadge.textContent = evaluation.grade;
    }
    if (this.fsEvalTitle) this.fsEvalTitle.textContent = evaluation.title;
    if (this.fsEvalExplanation) this.fsEvalExplanation.textContent = evaluation.explanation;
  }

  async updateLearningCoachWithGemini(candidateCoord = null, shouldSpeak = true, preserveEvaluation = false) {
    const reqId = ++this.coachingRequestId;
    this.hintStatusBadge.textContent = 'Gemini Thinking...';
    // All coaching analysis is strictly tailored for the playing user (Black)
    const advice = await this.aiAgent.requestGeminiCoaching(this.learningLevel, candidateCoord);

    // Guard: ignore stale responses if mode switched or another request supersedes
    if (reqId !== this.coachingRequestId || this.currentMode !== 'learn') {
      return;
    }

    const levelNames = {
      1: 'Lvl 1: Novice (9×9 Fundamentals)',
      2: 'Lvl 2: Medium (13×13 Midgame Strategy)',
      3: 'Lvl 3: Advance (19×19 Full Board Moyo)'
    };
    this.hintLevelTitle.textContent = levelNames[this.learningLevel] || 'Go Coaching';
    this.hintStatusBadge.textContent = advice.statusBadge;
    this.hintWhatToDo.textContent = advice.whatToDo;
    this.hintWatchOut.textContent = advice.whatToWatchOutFor;
    this.hintWhatNot.textContent = advice.whatNotToDo;

    this.syncFullscreenTips(advice);
    this.updateAiThinkingIndicator();

    if (advice.candidateEvaluation) {
      // Evaluation for the playing user (Black)
      const ce = advice.candidateEvaluation;
      const badgeClass = ce.grade === 'EXCELLENT' ? 'badge-excellent' : (ce.grade === 'BLUNDER' ? 'badge-blunder' : 'badge-solid');
      this.showMoveEvaluation({
        grade: ce.grade,
        badgeClass,
        title: ce.title,
        explanation: ce.explanation
      });

      if (shouldSpeak && this.currentMode === 'learn' && voiceCoach.enabled) {
        const spoken = ce.spokenFeedback || `${ce.grade}! ${ce.title}. ${ce.explanation}`;
        this.turnBadge.textContent = 'Sensei Speaking...';
        await voiceCoach.speakAsync(spoken, advice.audioBase64);
      }
    } else if (!preserveEvaluation && !candidateCoord) {
      // Only reset evaluation if explicitly starting fresh / clearing board
    } else if (shouldSpeak && this.currentMode === 'learn' && voiceCoach.enabled) {
      const script = advice.spokenScript || (advice.whatToDo ? `Consider playing at ${advice.recommendedMove}. ${advice.whatToDo}` : '');
      if (script) {
        this.turnBadge.textContent = 'Sensei Speaking...';
        await voiceCoach.speakAsync(script, advice.audioBase64);
      }
    }
  }

  // ========================================================================
  // AI VS AI SELF-PLAY LOGIC (HYBRID: PRO GAMES & GEMINI 3.8 FLASH)
  // ========================================================================

  toggleAiVsAiPlay() {
    if (this.isAiPlaying) {
      this.pauseAiVsAi();
    } else {
      this.startAiVsAi();
    }
  }

  startAiVsAi() {
    this.isAiPlaying = true;
    this.btnAiPlayPause.textContent = '⏸️';
    this.aivsaiStatus.textContent = 'Playing';
    this.aivsaiStatus.style.background = 'rgba(16, 185, 129, 0.2)';
    this.aivsaiStatus.style.color = '#10b981';

    this.aiPlayInterval = setInterval(() => {
      this.stepAiVsAi();
    }, this.aiSpeed);
  }

  pauseAiVsAi() {
    this.isAiPlaying = false;
    if (this.aiPlayInterval) {
      clearInterval(this.aiPlayInterval);
      this.aiPlayInterval = null;
    }
    this.btnAiPlayPause.textContent = '▶️';
    this.aivsaiStatus.textContent = 'Paused';
    this.aivsaiStatus.style.background = 'rgba(245, 158, 11, 0.2)';
    this.aivsaiStatus.style.color = '#f59e0b';
  }

  async stepAiVsAi() {
    if (this.aiEngineMode === 'pro') {
      this.stepProGamePlayback();
    } else {
      await this.stepGeminiLivePlayback();
    }
  }

  stepProGamePlayback() {
    // Pro games are recorded on 19x19. Enforce 19x19 engine if not already set.
    if (this.engine.size !== 19) {
      this.engine.setSize(19);
      this.selectBoardSize.value = "19";
      this.renderer.updateMetrics();
      this.resizeCanvas(true);
    }

    const game = PRO_GAMES_COLLECTION[this.selectedProGameIndex] || PRO_GAMES_COLLECTION[0];
    if (this.proGameMoveIndex >= game.moves.length) {
      this.pauseAiVsAi();
      this.aiCommentaryText.textContent = `Game concluded. ${game.result}. Beautiful masterclass!`;
      return;
    }

    const currentMove = game.moves[this.proGameMoveIndex];
    const currentColor = this.engine.turn;
    const isBlack = currentColor === BLACK;
    const pt = this.engine.fromGoCoord(currentMove.coord);

    if (pt) {
      const res = this.engine.play(pt.x, pt.y, currentColor);
      if (res.success) {
        sound.playStonePlacement(isBlack);
        if (res.captured && res.captured.length > 0) {
          this.triggerCaptureEffect(res.captured, isBlack ? WHITE : BLACK);
        }
        this.proGameMoveIndex++;
        this.aiCommentaryText.textContent = `[Move ${this.engine.history.length} - ${currentMove.coord}] ${currentMove.comment}`;
        this.renderer.render();
        this.updateUI();
      } else {
        // Advance move index so playback never stalls if a coordinate collides
        this.proGameMoveIndex++;
      }
    } else {
      this.proGameMoveIndex++;
    }
  }

  async stepGeminiLivePlayback() {
    if (this.isGeminiThinking) return;
    this.isGeminiThinking = true;
    const isBlack = this.engine.turn === BLACK;

    this.aiCommentaryText.textContent = `[Move ${this.engine.history.length + 1}] Gemini 3.8 Flash is calculating next move...`;
    const data = await this.aiAgent.requestGeminiNextMove();
    this.isGeminiThinking = false;

    if (data && data.pass) {
      this.engine.pass();
      this.aiCommentaryText.textContent = `${isBlack ? 'Black' : 'White'} passes.`;
      if (this.engine.consecutivePasses >= 2) {
        this.pauseAiVsAi();
        this.aiCommentaryText.textContent = 'Game concluded with 2 consecutive passes.';
      }
      this.renderer.render();
      this.updateUI();
      return;
    }

    if (data && data.move) {
      const { x, y } = data.move;
      const res = this.engine.play(x, y, this.engine.turn);
      if (res.success) {
        sound.playStonePlacement(isBlack);
        if (res.captured && res.captured.length > 0) {
          this.triggerCaptureEffect(res.captured, isBlack ? WHITE : BLACK);
        }
        this.aiCommentaryText.textContent = `[Move ${this.engine.history.length}] ${data.commentary}`;
        this.renderer.render();
        this.updateUI();
      }
    }
  }

  // ========================================================================
  // ALPHAGO RELIVE MATCH REPLAY LOGIC
  // ========================================================================

  setupAlphaGoMatches() {
    const matches = ALPHAGO_MATCHES[this.selectedYear] || [];
    this.selectAlphaGame.innerHTML = '';
    matches.forEach((m, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = m.title;
      this.selectAlphaGame.appendChild(opt);
    });

    this.selectedGameIndex = 0;
    this.loadAlphaGoMatch();
  }

  loadAlphaGoMatch() {
    this.coachingRequestId++;
    this.renderer.setCandidateSuggestions([]);
    if (this.engine.size !== 19) {
      this.engine.setSize(19);
      this.selectBoardSize.value = "19";
      this.renderer.updateMetrics();
      this.resizeCanvas(true);
    }
    const matches = ALPHAGO_MATCHES[this.selectedYear] || [];
    this.alphaGoMatch = matches[this.selectedGameIndex] || matches[0];
    if (!this.alphaGoMatch) return;

    this.alphaMatchTitle.textContent = this.alphaGoMatch.title;
    this.alphaMatchMeta.textContent = `${this.alphaGoMatch.date} | ${this.alphaGoMatch.black} (Black) vs ${this.alphaGoMatch.white} (White) | ${this.alphaGoMatch.result}`;

    this.labelBlackPlayer.textContent = this.alphaGoMatch.black;
    this.labelWhitePlayer.textContent = this.alphaGoMatch.white;

    this.alphaScrubber.max = this.alphaGoMatch.moves.length;
    this.alphaTotalMoves.textContent = this.alphaGoMatch.moves.length;

    this.seekAlphaMove(0);
  }

  seekAlphaMove(targetIndex) {
    if (!this.alphaGoMatch) return;
    this.renderer.setCandidateSuggestions([]);
    targetIndex = Math.max(0, Math.min(this.alphaGoMatch.moves.length, targetIndex));
    this.alphaMoveIndex = targetIndex;
    this.alphaScrubber.value = targetIndex;
    this.alphaMoveNum.textContent = targetIndex;

    this.engine.reset();
    let lastComment = 'Initial Board State.';
    let spotlight = null;

    for (let i = 0; i < targetIndex; i++) {
      const m = this.alphaGoMatch.moves[i];
      const color = m.color === 'B' ? BLACK : WHITE;
      const pt = this.engine.fromGoCoord(m.coord);

      if (pt) {
        const res = this.engine.play(pt.x, pt.y, color);
        if (i === targetIndex - 1 && res.captured && res.captured.length > 0) {
          this.triggerCaptureEffect(res.captured, color === BLACK ? WHITE : BLACK);
        }
      }

      if (m.isSpotlight) {
        spotlight = pt;
      }

      if (i === targetIndex - 1) {
        lastComment = `[Move ${m.num} - ${m.coord}]: ${m.comment}`;
      }
    }

    this.renderer.setSpotlight(spotlight);
    this.alphaCommentaryText.textContent = lastComment;
    this.renderer.render();
    this.updateUI();
  }

  jumpToMove(moveNum, year = '2016', gameIndex = 0) {
    this.switchMode('alphago');
    this.selectedYear = year;
    this.selectAlphaYear.value = year;
    this.setupAlphaGoMatches();

    this.selectedGameIndex = gameIndex;
    this.selectAlphaGame.value = gameIndex;
    this.loadAlphaGoMatch();

    const idx = this.alphaGoMatch.moves.findIndex(m => m.num === moveNum);
    if (idx !== -1) {
      this.seekAlphaMove(idx + 1);
    }
  }

  toggleAlphaReplay() {
    if (this.isAlphaPlaying) {
      this.pauseAlphaReplay();
    } else {
      this.startAlphaReplay();
    }
  }

  startAlphaReplay() {
    this.isAlphaPlaying = true;
    this.btnAlphaPlay.textContent = '⏸️';

    this.alphaPlayInterval = setInterval(() => {
      if (this.alphaMoveIndex < this.alphaGoMatch.moves.length) {
        this.seekAlphaMove(this.alphaMoveIndex + 1);
        sound.playStonePlacement(this.engine.turn === WHITE);
      } else {
        this.pauseAlphaReplay();
      }
    }, 1200);
  }

  pauseAlphaReplay() {
    this.isAlphaPlaying = false;
    if (this.alphaPlayInterval) {
      clearInterval(this.alphaPlayInterval);
      this.alphaPlayInterval = null;
    }
    this.btnAlphaPlay.textContent = '▶️';
  }

  // ========================================================================
  // UI & STATS UPDATE
  // ========================================================================

  updateUI() {
    const isBlack = this.engine.turn === BLACK;
    this.turnBadge.textContent = `${isBlack ? 'Black' : 'White'}'s Turn`;
    this.turnBadge.style.color = isBlack ? 'var(--accent-cyan)' : '#f59e0b';
    this.turnBadge.style.borderColor = isBlack ? 'var(--accent-cyan)' : '#f59e0b';
    this.moveCountBadge.textContent = `Move ${this.engine.history.length}`;

    this.labelBlackCaps.textContent = `Captures: ${this.engine.capturedStones[BLACK]}`;
    this.labelWhiteCaps.textContent = `Captures: ${this.engine.capturedStones[WHITE]}`;

    this.updateAiThinkingIndicator();
    this.syncFullscreenTips();
  }

}

// Instantiate App on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.move37App = new Move37App();
});
