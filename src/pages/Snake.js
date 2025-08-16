
import React, { useRef, useEffect, useState } from 'react';

const CANVAS_SIZE = 400;
const SCALE = 20;
const INIT_SNAKE = [{ x: 10, y: 10 }];
const INIT_DIR = { x: 0, y: 0 };

function getRandomFood() {
    return {
        x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
        y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
    };
}

function Snake() {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState(INIT_SNAKE);
    const [direction, setDirection] = useState(INIT_DIR);
    const [food, setFood] = useState(getRandomFood());
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(true);

    // Draw everything
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        // Draw grid
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        for (let x = 0; x < CANVAS_SIZE; x += SCALE) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CANVAS_SIZE); ctx.stroke();
        }
        for (let y = 0; y < CANVAS_SIZE; y += SCALE) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CANVAS_SIZE, y); ctx.stroke();
        }
        // Draw snake
        ctx.fillStyle = 'lime';
        snake.forEach(seg => ctx.fillRect(seg.x * SCALE, seg.y * SCALE, SCALE-2, SCALE-2));
        // Draw food
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x * SCALE, food.y * SCALE, SCALE-2, SCALE-2);
    }, [snake, food]);

    // Game loop
    useEffect(() => {
        if (!gameActive) return;
        const interval = setInterval(() => {
            setSnake(prev => {
                const head = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };
                const newSnake = [head, ...prev];
                // Eat food
                if (head.x === food.x && head.y === food.y) {
                    setFood(getRandomFood());
                    setScore(s => s + 1);
                } else {
                    newSnake.pop();
                }
                // Check collision
                if (
                    head.x < 0 || head.x >= CANVAS_SIZE / SCALE ||
                    head.y < 0 || head.y >= CANVAS_SIZE / SCALE ||
                    newSnake.slice(1).some(seg => seg.x === head.x && seg.y === head.y)
                ) {
                    setGameActive(false);
                }
                return newSnake;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [direction, food, gameActive]);

    // Keyboard controls
    useEffect(() => {
        function handleKey(e) {
            if (!gameActive) return;
            switch (e.key) {
                case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
                case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
                case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
                case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
                default: break;
            }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [direction, gameActive]);

    // Touch controls for mobile
    useEffect(() => {
        let startX, startY;
        function handleTouchStart(e) {
            const touch = e.touches[0];
            startX = touch.clientX; startY = touch.clientY;
        }
        function handleTouchMove(e) {
            if (!gameActive) return;
            const touch = e.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0 && direction.x !== -1) setDirection({ x: 1, y: 0 });
                else if (deltaX < 0 && direction.x !== 1) setDirection({ x: -1, y: 0 });
            } else {
                if (deltaY > 0 && direction.y !== -1) setDirection({ x: 0, y: 1 });
                else if (deltaY < 0 && direction.y !== 1) setDirection({ x: 0, y: -1 });
            }
            e.preventDefault();
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('touchstart', handleTouchStart, false);
        canvas.addEventListener('touchmove', handleTouchMove, false);
        return () => {
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
        };
    }, [direction, gameActive]);

    function restart() {
        setSnake(INIT_SNAKE);
        setDirection(INIT_DIR);
        setFood(getRandomFood());
        setScore(0);
        setGameActive(true);
    }

    return (
        <div style={{background:'#fff', minHeight:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 0'}}>
            <div style={{maxWidth:500, width:'100%', display:'flex', flexDirection:'column', alignItems:'center', gap:24}}>
                <h1 style={{fontSize:'2.2rem', fontWeight:700, color:'#49734D'}}>Snake</h1>
                <canvas
                    ref={canvasRef}
                    width={CANVAS_SIZE}
                    height={CANVAS_SIZE}
                    style={{border:'2px solid #A1BE95', borderRadius:18, background:'#f8f8f8', marginBottom:16, touchAction:'none'}}
                />
                <div style={{fontSize:'1.2rem', color:'#49734D', marginBottom:8}}>Score: {score}</div>
                {!gameActive && (
                    <div style={{color:'#c0392b', fontWeight:600, marginBottom:8}}>Game Over!</div>
                )}
                <button onClick={restart} className="main__btn" style={{background:'#279d45', color:'#fff', padding:'10px 28px', borderRadius:6, fontWeight:600, fontSize:'1.1rem', textDecoration:'none', border:'none'}}>Restart</button>
                <div style={{fontSize:'1rem', color:'#49734D', marginTop:8}}>Use arrow keys or swipe to play.</div>
            </div>
        </div>
    );
}

export default Snake;
