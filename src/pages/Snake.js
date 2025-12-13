
import React, { useEffect, useRef, useState } from 'react';

const CANVAS_SIZE = 400;
const SCALE = 20;
const GRID_COUNT = CANVAS_SIZE / SCALE;
const INIT_SNAKE = [{ x: 10, y: 10 }];
const INIT_DIR = { x: 0, y: 0 };

function getRandomFood(snakeBody = []) {
    while (true) {
        const candidate = {
            x: Math.floor(Math.random() * GRID_COUNT),
            y: Math.floor(Math.random() * GRID_COUNT)
        };

        const collides = snakeBody.some(segment => segment.x === candidate.x && segment.y === candidate.y);
        if (!collides) {
            return candidate;
        }
    }
}

const snakeStyles = `
    :root {
        --primary: #fdfdfdff;
        --secondary: #3a158eff;
        --accent: #e3f1f4ff;
        --bg-dark: #0f0f23;
        --bg-card: #1a1a2e;
        --text-primary: #ffffff;
        --text-secondary: #a1a1aa;
        --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
        --glass: rgba(255, 243, 243, 0.1);
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--bg-dark);
        color: var(--text-primary);
        line-height: 1.6;
        overflow-x: hidden;
        margin: 0;
    }

    @keyframes snakeFloat {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        33% {
            transform: translate(30px, -30px) rotate(120deg);
        }
        66% {
            transform: translate(-20px, 20px) rotate(240deg);
        }
    }

    .snake-page {
        min-height: 100vh;
        padding: clamp(4rem, 8vw, 6rem) 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-dark);
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
    }

    .snake-card::after {
        content: '';
        position: absolute;
        inset: -60% -30% auto;
        height: 70%;
        background: radial-gradient(circle at center, rgba(34, 72, 239, 0.25), transparent 70%);
        opacity: 0.8;
        pointer-events: none;
        animation: snakeFloat 20s ease-in-out infinite;
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
    }

    .snake-chip strong {
        color: var(--text-primary);
        font-weight: 700;
    }

    .snake-chip.danger {
        color: #ff8a8a;
        border-color: rgba(255, 138, 138, 0.4);
        background: rgba(255, 68, 68, 0.08);
    }

    .snake-canvas-shell {
        background: rgba(15, 15, 35, 0.8);
        padding: 0.9rem;
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
    }

    .snake-canvas {
        display: block;
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1 / 1;
        background: rgba(8, 12, 30, 0.92);
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        image-rendering: pixelated;
        touch-action: none;
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
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }

    .snake-button.primary {
        background: var(--gradient);
        color: var(--text-primary);
        box-shadow: 0 12px 30px rgba(34, 72, 239, 0.3);
    }

    .snake-button.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 38px rgba(34, 72, 239, 0.4);
    }

    .snake-hint {
        text-align: center;
        color: var(--text-secondary);
        font-size: 0.85rem;
    }

    @media (max-width: 520px) {
        .snake-card {
            padding: 2rem 1.5rem;
        }

        .snake-scoreboard {
            gap: 0.5rem;
        }

        .snake-canvas-shell {
            padding: 0.6rem;
        }
    }
`;

function Snake() {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState(INIT_SNAKE);
    const [direction, setDirection] = useState(INIT_DIR);
    const [food, setFood] = useState(() => getRandomFood(INIT_SNAKE));
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        for (let i = 0; i <= GRID_COUNT; i += 1) {
            ctx.beginPath();
            ctx.moveTo(i * SCALE, 0);
            ctx.lineTo(i * SCALE, CANVAS_SIZE);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, i * SCALE);
            ctx.lineTo(CANVAS_SIZE, i * SCALE);
            ctx.stroke();
        }

        ctx.fillStyle = '#6ee7b7';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * SCALE + 2, segment.y * SCALE + 2, SCALE - 4, SCALE - 4);
        });

        ctx.fillStyle = '#f97316';
        ctx.fillRect(food.x * SCALE + 3, food.y * SCALE + 3, SCALE - 6, SCALE - 6);
    }, [snake, food]);

    useEffect(() => {
        if (!gameActive) {
            return undefined;
        }

        const interval = setInterval(() => {
            setSnake(prevSnake => {
                const head = {
                    x: prevSnake[0].x + direction.x,
                    y: prevSnake[0].y + direction.y
                };

                const nextSnake = [head, ...prevSnake];

                if (head.x === food.x && head.y === food.y) {
                    const newFood = getRandomFood(nextSnake);
                    setFood(newFood);
                    setScore(previous => previous + 1);
                } else {
                    nextSnake.pop();
                }

                const hitWall =
                    head.x < 0 ||
                    head.x >= GRID_COUNT ||
                    head.y < 0 ||
                    head.y >= GRID_COUNT;

                const hitSelf = nextSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);

                if (hitWall || hitSelf) {
                    setGameActive(false);
                    return prevSnake;
                }

                return nextSnake;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [direction, food, gameActive]);

    useEffect(() => {
        const handleKey = event => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                event.preventDefault();
            }

            if (!gameActive) {
                return;
            }

            const { x, y } = direction;

            switch (event.key) {
                case 'ArrowUp':
                    if (y !== 1) {
                        setDirection({ x: 0, y: -1 });
                    }
                    break;
                case 'ArrowDown':
                    if (y !== -1) {
                        setDirection({ x: 0, y: 1 });
                    }
                    break;
                case 'ArrowLeft':
                    if (x !== 1) {
                        setDirection({ x: -1, y: 0 });
                    }
                    break;
                case 'ArrowRight':
                    if (x !== -1) {
                        setDirection({ x: 1, y: 0 });
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [direction, gameActive]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return undefined;
        }

        let startX = 0;
        let startY = 0;

        const handleTouchStart = event => {
            const touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        };

        const handleTouchMove = event => {
            if (!gameActive) {
                return;
            }

            const touch = event.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0 && direction.x !== -1) {
                    setDirection({ x: 1, y: 0 });
                } else if (deltaX < 0 && direction.x !== 1) {
                    setDirection({ x: -1, y: 0 });
                }
            } else {
                if (deltaY > 0 && direction.y !== -1) {
                    setDirection({ x: 0, y: 1 });
                } else if (deltaY < 0 && direction.y !== 1) {
                    setDirection({ x: 0, y: -1 });
                }
            }

            event.preventDefault();
        };

        canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
        };
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
            <div className="snake-card fade-in">
                <div className="snake-content">
                    <header className="snake-header">
                        <span className="snake-subtitle">Retro Challenge</span>
                        <h1 className="snake-title">Snake</h1>
                    </header>

                    <div className="snake-scoreboard">
                        <span className="snake-chip">Score <strong>{score}</strong></span>
                        <span className={`snake-chip ${gameActive ? '' : 'danger'}`}>
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
                        <button type="button" className="snake-button primary" onClick={restart}>
                            ↻ Restart
                        </button>
                    </div>

                    <p className="snake-hint">Pro tip: avoid clipping the corners when you speed up!</p>
                </div>
            </div>
        </div>
    );
}

export default Snake;
