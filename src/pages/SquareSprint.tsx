import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

type UnityInstance = {
  SetFullscreen: (fullscreen: 0 | 1) => void;
  Quit?: () => Promise<void>;
};

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: Record<string, unknown>,
      onProgress: (progress: number) => void,
    ) => Promise<UnityInstance>;
  }
}

const squareSprintStyles = `
:root {
  --ss-bg: #060914;
  --ss-bg-1: #0a0f1e;
  --ss-bg-2: #0d1428;
  --ss-border: rgba(255,255,255,0.06);
  --ss-border-hover: rgba(99,102,241,0.5);
  --ss-text-1: #f1f5f9;
  --ss-text-2: #94a3b8;
  --ss-text-3: #475569;
  --ss-accent: #6366f1;
  --ss-accent-light: #818cf8;
  --ss-cyan: #22d3ee;
  --ss-green: #4ade80;
  --ss-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
}

[data-theme="light"] {
  --ss-bg: #f8fafc;
  --ss-bg-1: #f1f5f9;
  --ss-bg-2: #e2e8f0;
  --ss-border: rgba(0,0,0,0.06);
  --ss-border-hover: rgba(99,102,241,0.5);
  --ss-text-1: #0f172a;
  --ss-text-2: #475569;
  --ss-text-3: #94a3b8;
}

.square-sprint-page {
  min-height: 100vh;
  background: var(--ss-bg);
  color: var(--ss-text-1);
  padding: 7.5rem 2rem 5rem;
}

.square-sprint-shell {
  width: min(1200px, 100%);
  margin: 0 auto;
}

.square-sprint-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: end;
  margin-bottom: 2rem;
}

.square-sprint-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ss-cyan);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1rem;
}

.square-sprint-kicker::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--ss-cyan);
}

.square-sprint-title {
  font-size: clamp(2.5rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, var(--ss-text-1) 0%, var(--ss-text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.square-sprint-copy {
  color: var(--ss-text-2);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 680px;
  margin: 1rem 0 0;
}

.square-sprint-actions,
.square-sprint-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-end;
}

.square-sprint-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border-radius: 10px;
  border: 1px solid var(--ss-border);
  padding: 0.75rem 1.2rem;
  min-height: 42px;
  color: var(--ss-text-1);
  background: transparent;
  cursor: pointer;
  font: 600 0.9rem 'Inter', sans-serif;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.square-sprint-btn.primary {
  background: var(--ss-gradient);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 8px 24px rgba(99,102,241,0.3);
}

.square-sprint-btn:hover {
  transform: translateY(-2px);
  border-color: var(--ss-border-hover);
  background: rgba(99,102,241,0.08);
}

.square-sprint-btn.primary:hover {
  box-shadow: 0 12px 32px rgba(99,102,241,0.45);
}

.square-sprint-game-card {
  background: var(--ss-bg-2);
  border: 1px solid var(--ss-border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(0,0,0,0.35);
}

[data-theme="light"] .square-sprint-game-card {
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}

.square-sprint-game-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--ss-border);
  background: rgba(6, 9, 20, 0.55);
}

[data-theme="light"] .square-sprint-game-topbar {
  background: rgba(248, 250, 252, 0.65);
}

.square-sprint-window-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.square-sprint-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.square-sprint-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.square-sprint-dots span:nth-child(1) { background: #ff5f57; }
.square-sprint-dots span:nth-child(2) { background: #febc2e; }
.square-sprint-dots span:nth-child(3) { background: #28c840; }

.square-sprint-window-title strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: 600 0.85rem 'JetBrains Mono', monospace;
  color: var(--ss-text-2);
}

.square-sprint-canvas-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #1f1f20;
}

.square-sprint-canvas {
  display: block;
  width: 100%;
  height: 100%;
  background: #1f1f20;
  outline: none;
}

.square-sprint-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(99,102,241,0.18), rgba(6,9,20,0.86) 62%);
}

.square-sprint-loading-panel {
  width: min(320px, 78%);
  text-align: center;
}

.square-sprint-loading-panel span {
  display: block;
  color: var(--ss-text-1);
  font: 700 0.82rem 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.square-sprint-progress {
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
}

.square-sprint-progress-bar {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: var(--ss-gradient);
  transition: width 0.2s ease;
}

.square-sprint-warning {
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  width: min(720px, calc(100% - 2rem));
  display: none;
  z-index: 2;
}

.square-sprint-warning div {
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: #0f172a;
  font: 600 0.86rem 'Inter', sans-serif;
}

.square-sprint-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.square-sprint-meta-item {
  background: var(--ss-bg-2);
  border: 1px solid var(--ss-border);
  border-radius: 14px;
  padding: 1.1rem;
}

.square-sprint-meta-label {
  display: block;
  color: var(--ss-text-3);
  font: 700 0.72rem 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.square-sprint-meta-value {
  color: var(--ss-text-1);
  font-size: 0.95rem;
  font-weight: 700;
}

.square-sprint-note {
  margin: 1.25rem 0 0;
  color: var(--ss-text-2);
  font-size: 0.9rem;
  line-height: 1.7;
}

@media (max-width: 860px) {
  .square-sprint-page {
    padding: 6.5rem 1.25rem 4rem;
  }

  .square-sprint-header {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .square-sprint-actions,
  .square-sprint-controls {
    justify-content: flex-start;
  }

  .square-sprint-game-topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .square-sprint-meta {
    grid-template-columns: 1fr;
  }
}
`;

function SquareSprint() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const unityRef = useRef<UnityInstance | null>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    const script = document.createElement('script');
    const buildUrl = '/SqaureSprint/Build';

    const showBanner = (message: string, type: string) => {
      const warning = document.querySelector<HTMLDivElement>('#square-sprint-warning');
      if (!warning) return;

      const item = document.createElement('div');
      item.textContent = message;
      item.style.background = type === 'error' ? '#fecaca' : '#fef3c7';
      warning.appendChild(item);
      warning.style.display = 'block';

      if (type !== 'error') {
        window.setTimeout(() => {
          item.remove();
          warning.style.display = warning.children.length ? 'block' : 'none';
        }, 5000);
      }
    };

    script.src = `${buildUrl}/SqaureSprint.loader.js`;
    script.async = true;
    script.onload = async () => {
      if (disposed || !window.createUnityInstance) return;

      try {
        const instance = await window.createUnityInstance(
          canvas,
          {
            dataUrl: `${buildUrl}/SqaureSprint.data.br`,
            frameworkUrl: `${buildUrl}/SqaureSprint.framework.js.br`,
            codeUrl: `${buildUrl}/SqaureSprint.wasm.br`,
            streamingAssetsUrl: '/SqaureSprint/StreamingAssets',
            companyName: 'Matthew Woods',
            productName: 'Square Sprint',
            productVersion: '1.0',
            showBanner,
          },
          (value) => setProgress(Math.round(value * 100)),
        );

        if (disposed) {
          void instance.Quit?.();
          return;
        }

        unityRef.current = instance;
        setIsLoaded(true);
        canvas.focus();
      } catch (caught) {
        const message = caught instanceof Error ? caught.message : String(caught);
        setError(message);
      }
    };
    script.onerror = () => setError('Unable to load the Unity WebGL loader.');

    document.body.appendChild(script);

    return () => {
      disposed = true;
      script.remove();
      void unityRef.current?.Quit?.();
      unityRef.current = null;
    };
  }, []);

  return (
    <main className="square-sprint-page">
      <Helmet>
        <title>Square Sprint | Matthew Woods</title>
        <meta
          name="description"
          content="Play Square Sprint, a Unity WebGL platformer by Matthew Woods."
        />
      </Helmet>
      <style>{squareSprintStyles}</style>

      <div className="square-sprint-shell">
        <header className="square-sprint-header">
          <div>
            <span className="square-sprint-kicker">Unity WebGL Game</span>
            <h1 className="square-sprint-title">Square Sprint</h1>
            <p className="square-sprint-copy">
              A fast browser-playable Unity platformer focused on tight movement,
              clean level feedback, and a lightweight WebGL delivery pipeline.
            </p>
          </div>
          <div className="square-sprint-actions">
            <button className="square-sprint-btn" type="button" onClick={() => navigate('/')}>
              Portfolio
            </button>
            <button
              className="square-sprint-btn primary"
              type="button"
              onClick={() => canvasRef.current?.focus()}
            >
              Focus Game
            </button>
          </div>
        </header>

        <section className="square-sprint-game-card" aria-label="Square Sprint game">
          <div className="square-sprint-game-topbar">
            <div className="square-sprint-window-title">
              <div className="square-sprint-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <strong>SquareSprint.app</strong>
            </div>
            <div className="square-sprint-controls">
              <button
                className="square-sprint-btn"
                type="button"
                onClick={() => unityRef.current?.SetFullscreen(1)}
                disabled={!isLoaded}
              >
                Fullscreen
              </button>
            </div>
          </div>

          <div className="square-sprint-canvas-wrap">
            <canvas
              ref={canvasRef}
              id="square-sprint-canvas"
              className="square-sprint-canvas"
              width={960}
              height={600}
              tabIndex={0}
              aria-label="Square Sprint Unity WebGL game canvas"
            />
            <div id="square-sprint-warning" className="square-sprint-warning" />
            {!isLoaded && (
              <div className="square-sprint-loading">
                <div className="square-sprint-loading-panel">
                  <span>{error ? 'Load failed' : `Loading ${progress}%`}</span>
                  <div className="square-sprint-progress" aria-hidden="true">
                    <div
                      className="square-sprint-progress-bar"
                      style={{ width: `${error ? 100 : progress}%` }}
                    />
                  </div>
                  {error && <p className="square-sprint-note">{error}</p>}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="square-sprint-meta">
          <div className="square-sprint-meta-item">
            <span className="square-sprint-meta-label">Engine</span>
            <span className="square-sprint-meta-value">Unity WebGL</span>
          </div>
          <div className="square-sprint-meta-item">
            <span className="square-sprint-meta-label">Build</span>
            <span className="square-sprint-meta-value">Browser playable</span>
          </div>
          <div className="square-sprint-meta-item">
            <span className="square-sprint-meta-label">Focus</span>
            <span className="square-sprint-meta-value">Platformer controls</span>
          </div>
        </div>
        <p className="square-sprint-note">
          Click the game area before playing so the browser sends keyboard input to the Unity canvas.
        </p>
      </div>
    </main>
  );
}

export default SquareSprint;
