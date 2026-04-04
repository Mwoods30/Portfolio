import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/useTheme';

const CANVAS_SIZE = 400;
const SCALE = 20;
const GRID_COUNT = CANVAS_SIZE / SCALE;
const INIT_SNAKE = [{ x: 10, y: 10 }];
const INIT_DIR = { x: 0, y: 0 };

interface Point { x: number; y: number }

function getRandomFood(snakeBody: Point[] = []): Point {
  while (true) {
    const candidate: Point = {
      x: Math.floor(Math.random() * GRID_COUNT),
      y: Math.floor(Math.random() * GRID_COUNT),
    };
    if (!snakeBody.some(s => s.x === candidate.x && s.y === candidate.y)) {
      return candidate;
    }
  }
}

const snakeStyles = `
  :root {
    --primary: #fdfdfdff;
    --bg-dark: #0f0f23;
    --bg-card: #1a1a2e;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
    --glass: rgba(255, 243, 243, 0.1);
  }

  [data-theme="light"] {
    --bg-dark: #f4f4ff;
    --bg-card: #ebebff;
    --text-primary: #111;
    --text-secondary: #555;
    --glass: rgba(0,0,0,0.06);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .snake-page {
    min-height: 100vh;
    padding: clamp(4rem, 8vw, 6rem) 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-dark);
    transition: background 0.3s ease;
  }

  .snake-card {
    width: min(460px, 92vw);
    background: var(--bg-card);
    border-radius: 24px;
    border: 1px solid var(--glass);
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.35);
    padding: clamp(2rem, 5vw, 2.75rem);
    display: grid;
    gap: 1.75rem;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  [data-theme="light"] .snake-card {
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.12);
  }

  .snake-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 1.75rem;
  }

  .snake-header {
    display: grid;
    gap: 0.4rem;
    text-align: center;
  }

  .snake-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .snake-title {
    font-size: clamp(2rem, 5vw, 2.8rem);
    margin: 0;
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .snake-scoreboard {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .snake-chip {
    padding: 0.55rem 1.2rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: inline-flex;
    gap: 0.35rem;
    align-items: center;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  [data-theme="light"] .snake-chip {
    border-color: rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.04);
  }

  .snake-chip strong { color: var(--text-primary); font-weight: 700; }

  .snake-chip.danger {
    color: #e03030;
    border-color: rgba(224, 48, 48, 0.4);
    background: rgba(224, 48, 48, 0.08);
  }

  [data-theme="light"] .snake-chip.danger {
    color: #b91c1c;
    border-color: rgba(185, 28, 28, 0.3);
    background: rgba(185, 28, 28, 0.07);
  }

  .snake-canvas-shell {
    background: rgba(15, 15, 35, 0.8);
    padding: 0.9rem;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  [data-theme="light"] .snake-canvas-shell {
    background: rgba(100, 100, 180, 0.12);
    border-color: rgba(0, 0, 0, 0.08);
  }

  .snake-canvas {
    display: block;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    image-rendering: pixelated;
    touch-action: none;
    transition: border-color 0.3s ease;
  }

  [data-theme="light"] .snake-canvas {
    border-color: rgba(0, 0, 0, 0.06);
  }

  .snake-status {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .snake-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .snake-button {
    padding: 0.85rem 2.5rem;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .snake-button:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 3px;
  }

  .snake-button.primary {
    background: var(--gradient);
    color: white;
    box-shadow: 0 12px 30px rgba(34, 72, 239, 0.3);
  }

  .snake-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(34, 72, 239, 0.4);
  }

  .snake-button.back {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  [data-theme="light"] .snake-button.back {
    border-color: rgba(0, 0, 0, 0.18);
  }

  .snake-button.back:hover {
    border-color: #667eea;
    color: var(--text-primary);
  }

  .snake-hint {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    .snake-actions { flex-direction: column; }
    .snake-button { width: 100%; }
  }
`;

function Snake() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Point[]>(INIT_SNAKE);
  const [direction, setDirection] = useState<Point>(INIT_DIR);
  const [food, setFood] = useState<Point>(() => getRandomFood(INIT_SNAKE));
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const isLight = theme === 'light';

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = isLight ? '#eeeeff' : 'rgba(8, 12, 30, 0.92)';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.07)' : 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i <= GRID_COUNT; i++) {
      ctx.beginPath(); ctx.moveTo(i * SCALE, 0); ctx.lineTo(i * SCALE, CANVAS_SIZE); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * SCALE); ctx.lineTo(CANVAS_SIZE, i * SCALE); ctx.stroke();
    }
    ctx.fillStyle = isLight ? '#16a34a' : '#6ee7b7';
    snake.forEach(seg => ctx.fillRect(seg.x * SCALE + 2, seg.y * SCALE + 2, SCALE - 4, SCALE - 4));
    ctx.fillStyle = isLight ? '#dc2626' : '#f97316';
    ctx.fillRect(food.x * SCALE + 3, food.y * SCALE + 3, SCALE - 6, SCALE - 6);
  }, [snake, food, theme]);

  useEffect(() => {
    if (!gameActive) return;
    const interval = setInterval(() => {
      setSnake(prev => {
        const head = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };
        const next = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomFood(next));
          setScore(s => s + 1);
        } else {
          next.pop();
        }
        const hitWall = head.x < 0 || head.x >= GRID_COUNT || head.y < 0 || head.y >= GRID_COUNT;
        const hitSelf = next.slice(1).some(s => s.x === head.x && s.y === head.y);
        if (hitWall || hitSelf) { setGameActive(false); return prev; }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction, food, gameActive]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
      if (!gameActive) return;
      const { x, y } = direction;
      if (e.key === 'ArrowUp' && y !== 1) setDirection({ x: 0, y: -1 });
      else if (e.key === 'ArrowDown' && y !== -1) setDirection({ x: 0, y: 1 });
      else if (e.key === 'ArrowLeft' && x !== 1) setDirection({ x: -1, y: 0 });
      else if (e.key === 'ArrowRight' && x !== -1) setDirection({ x: 1, y: 0 });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [direction, gameActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let startX = 0; let startY = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; };
    const onMove = (e: TouchEvent) => {
      if (!gameActive) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0 && direction.x !== -1) setDirection({ x: 1, y: 0 });
        else if (dx < 0 && direction.x !== 1) setDirection({ x: -1, y: 0 });
      } else {
        if (dy > 0 && direction.y !== -1) setDirection({ x: 0, y: 1 });
        else if (dy < 0 && direction.y !== 1) setDirection({ x: 0, y: -1 });
      }
      e.preventDefault();
    };
    canvas.addEventListener('touchstart', onStart, { passive: true });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    return () => { canvas.removeEventListener('touchstart', onStart); canvas.removeEventListener('touchmove', onMove); };
  }, [direction, gameActive]);

  const restart = () => {
    setSnake(INIT_SNAKE);
    setDirection(INIT_DIR);
    setFood(getRandomFood(INIT_SNAKE));
    setScore(0);
    setGameActive(true);
  };

  return (
    <div className="snake-page">
      <style>{snakeStyles}</style>
      <div className="snake-card">
        <div className="snake-content">
          <header className="snake-header">
            <span className="snake-subtitle">Retro Challenge</span>
            <h1 className="snake-title">Snake</h1>
          </header>
          <div className="snake-scoreboard">
            <span className="snake-chip">Score <strong>{score}</strong></span>
            <span className={`snake-chip${gameActive ? '' : ' danger'}`}>
              {gameActive ? 'Use arrow keys or swipe' : 'Game over — try again!'}
            </span>
          </div>
          <div className="snake-canvas-shell">
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="snake-canvas"
              aria-label="Snake game board"
            />
          </div>
          <div className="snake-status">
            {gameActive ? 'Collect the glowing squares and grow your streak.' : 'Tap restart to jump back into the grid.'}
          </div>
          <div className="snake-actions">
            <button type="button" className="snake-button primary" onClick={restart}>↻ Restart</button>
            <button type="button" className="snake-button back" onClick={() => navigate('/')}>← Portfolio</button>
          </div>
          <p className="snake-hint">Pro tip: avoid clipping the corners when you speed up!</p>
        </div>
      </div>
    </div>
  );
}

export default Snake;
