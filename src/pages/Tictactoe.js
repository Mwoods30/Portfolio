
import React, { useEffect, useState } from 'react';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function getWinner(board) {
    for (let cond of winningConditions) {
        const [a, b, c] = cond;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return null;
}

function getAvailableMoves(board) {
    return board.map((v, i) => v === '' ? i : null).filter(i => i !== null);
}

function computerMove(board) {
    // Try to win
    for (let cond of winningConditions) {
        const [a, b, c] = cond;
        const line = [board[a], board[b], board[c]];
        if (line.filter(x => x === 'O').length === 2 && line.includes('')) {
            const idx = cond[line.indexOf('')];
            return idx;
        }
    }
    // Try to block
    for (let cond of winningConditions) {
        const [a, b, c] = cond;
        const line = [board[a], board[b], board[c]];
        if (line.filter(x => x === 'X').length === 2 && line.includes('')) {
            const idx = cond[line.indexOf('')];
            return idx;
        }
    }
    // Random
    const moves = getAvailableMoves(board);
    if (moves.length === 0) return null;
    return moves[Math.floor(Math.random() * moves.length)];
}

const tictactoeStyles = `
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

    @keyframes tttFloat {
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

    .ttt-page {
        min-height: 100vh;
        padding: clamp(4rem, 8vw, 6rem) 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-dark);
    }

    .ttt-card {
        width: min(500px, 94vw);
        background: var(--bg-card);
        border-radius: 26px;
        border: 1px solid var(--glass);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        padding: clamp(2.2rem, 5vw, 3rem);
        display: grid;
        gap: 1.75rem;
        position: relative;
        overflow: hidden;
    }

    .ttt-card::after {
        content: '';
        position: absolute;
        inset: -55% -20% auto;
        height: 65%;
        background: radial-gradient(circle at center, rgba(89, 25, 154, 0.3), transparent 70%);
        opacity: 0.75;
        pointer-events: none;
        animation: tttFloat 18s ease-in-out infinite;
    }

    .ttt-content {
        position: relative;
        z-index: 1;
        display: grid;
        gap: 1.75rem;
    }

    .ttt-header {
        text-align: center;
        display: grid;
        gap: 0.4rem;
    }

    .ttt-subtitle {
        text-transform: uppercase;
        letter-spacing: 0.24em;
        font-size: 0.78rem;
        color: var(--text-secondary);
    }

    .ttt-title {
        margin: 0;
        font-size: clamp(2.1rem, 5vw, 3rem);
        font-weight: 700;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .ttt-controls {
        display: grid;
        gap: 0.75rem;
        justify-items: center;
    }

    .ttt-label {
        color: var(--text-secondary);
        font-weight: 600;
        letter-spacing: 0.05em;
    }

    .ttt-mode-select {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.65rem 1rem;
        border-radius: 16px;
        background: rgba(20, 20, 45, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .ttt-select {
        border: none;
        background: transparent;
        color: var(--text-primary);
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        appearance: none;
        padding-right: 1.5rem;
    }

    .ttt-select:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 4px;
    }

    .ttt-board {
        display: grid;
        grid-template-columns: repeat(3, minmax(96px, 1fr));
        gap: 0.85rem;
        justify-items: center;
    }

    .ttt-cell {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(15, 15, 35, 0.85);
        color: #6ee7b7;
        font-size: clamp(2.4rem, 8vw, 3.2rem);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.18s ease, border 0.18s ease, box-shadow 0.2s ease;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    }

    .ttt-cell:hover {
        transform: translateY(-4px);
        border-color: rgba(89, 25, 154, 0.55);
        box-shadow: 0 18px 28px rgba(34, 72, 239, 0.35);
    }

    .ttt-cell:disabled,
    .ttt-cell.disabled {
        cursor: not-allowed;
        opacity: 0.65;
        transform: none;
        box-shadow: none;
    }

    .ttt-cell.filled {
        cursor: default;
    }

    .ttt-cell.is-o {
        color: #fca5a5;
    }

    .ttt-status {
        text-align: center;
        padding: 0.9rem 1.2rem;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(20, 20, 45, 0.85);
        font-size: 1.05rem;
        color: var(--text-secondary);
    }

    .ttt-status.won {
        color: #6ee7b7;
    }

    .ttt-status.draw {
        color: #facc15;
    }

    .ttt-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .ttt-button {
        padding: 0.85rem 2.4rem;
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

    .ttt-button.primary {
        background: var(--gradient);
        color: var(--text-primary);
        box-shadow: 0 14px 30px rgba(34, 72, 239, 0.32);
    }

    .ttt-button.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(34, 72, 239, 0.42);
    }

    .ttt-helper {
        text-align: center;
        color: var(--text-secondary);
        font-size: 0.88rem;
    }

    @media (max-width: 520px) {
        .ttt-card {
            padding: 2rem 1.5rem;
        }

        .ttt-board {
            grid-template-columns: repeat(3, minmax(78px, 1fr));
            gap: 0.7rem;
        }

        .ttt-actions {
            flex-direction: column;
        }

        .ttt-button {
            width: 100%;
        }
    }
`;

function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameActive, setGameActive] = useState(true);
    const [status, setStatus] = useState("It's X's turn");
    const [mode, setMode] = useState('friend');

    const winner = getWinner(board);
    const isDraw = !winner && board.every(cell => cell);

    useEffect(() => {
        if (winner) {
            setStatus(`Player ${winner} wins!`);
            if (gameActive) {
                setGameActive(false);
            }
            return;
        }

        if (isDraw) {
            setStatus("It's a draw!");
            if (gameActive) {
                setGameActive(false);
            }
            return;
        }

        if (gameActive) {
            setStatus(`It's ${isXTurn ? 'X' : 'O'}'s turn`);
        }
    }, [winner, isDraw, gameActive, isXTurn]);

    useEffect(() => {
        if (!gameActive || isXTurn || mode !== 'computer' || winner || isDraw) {
            return undefined;
        }

        const timer = setTimeout(() => {
            setBoard(prevBoard => {
                const move = computerMove(prevBoard);
                if (move === null || prevBoard[move]) {
                    return prevBoard;
                }

                const nextBoard = prevBoard.slice();
                nextBoard[move] = 'O';
                return nextBoard;
            });
            setIsXTurn(true);
        }, 450);

        return () => clearTimeout(timer);
    }, [gameActive, isXTurn, mode, winner, isDraw]);

    const handleCell = index => {
        if (!gameActive || board[index]) {
            return;
        }

        setBoard(prevBoard => {
            if (prevBoard[index]) {
                return prevBoard;
            }

            const nextBoard = prevBoard.slice();
            nextBoard[index] = isXTurn ? 'X' : 'O';
            return nextBoard;
        });

        setIsXTurn(prev => !prev);
    };

    const restart = () => {
        setBoard(Array(9).fill(''));
        setIsXTurn(true);
        setGameActive(true);
        setStatus("It's X's turn");
    };

    const handleModeChange = event => {
        setMode(event.target.value);
        setBoard(Array(9).fill(''));
        setIsXTurn(true);
        setGameActive(true);
        setStatus("It's X's turn");
    };

    const statusTone = winner ? 'won' : isDraw ? 'draw' : 'active';

    return (
        <div className="ttt-page">
            <style>{tictactoeStyles}</style>
            <div className="ttt-card fade-in">
                <div className="ttt-content">
                    <header className="ttt-header">
                        <span className="ttt-subtitle">Strategy Duel</span>
                        <h1 className="ttt-title">Tic Tac Toe</h1>
                    </header>

                    <div className="ttt-controls">
                        <span className="ttt-label">Choose your opponent</span>
                        <div className="ttt-mode-select">
                            <select
                                id="ttt-mode"
                                className="ttt-select"
                                value={mode}
                                onChange={handleModeChange}
                                aria-label="Select tic tac toe game mode"
                            >
                                <option value="friend">Play with a friend</option>
                                <option value="computer">Play against AI</option>
                            </select>
                        </div>
                    </div>

                    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
                        {board.map((cell, idx) => {
                            const filledClass = cell ? ` filled ${cell === 'X' ? 'is-x' : 'is-o'}` : '';
                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    role="gridcell"
                                    className={`ttt-cell${filledClass}${!gameActive || cell ? ' disabled' : ''}`}
                                    onClick={() => handleCell(idx)}
                                    disabled={!gameActive || Boolean(cell)}
                                    aria-label={cell ? `Cell ${idx + 1} is ${cell}` : `Choose cell ${idx + 1}`}
                                >
                                    {cell}
                                </button>
                            );
                        })}
                    </div>

                    <div className={`ttt-status ${statusTone}`}>{status}</div>

                    <div className="ttt-actions">
                        <button type="button" className="ttt-button primary" onClick={restart}>
                            ↻ Restart Game
                        </button>
                    </div>

                    <p className="ttt-helper">Tip: corners first for X, center first for O. Adapt and outsmart your rival.</p>
                </div>
            </div>
        </div>
    );
}

export default Tictactoe;
