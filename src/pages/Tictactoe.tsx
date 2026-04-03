import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Player = 'X' | 'O' | '';
type Mode = 'friend' | 'computer';

const winningConditions: [number, number, number][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board: Player[]): Player | null {
  for (const [a, b, c] of winningConditions) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

function getAvailableMoves(board: Player[]): number[] {
  return board.map((v, i) => (v === '' ? i : null)).filter((i): i is number => i !== null);
}

function computerMove(board: Player[]): number | null {
  for (const [a, b, c] of winningConditions) {
    const line = [board[a], board[b], board[c]];
    if (line.filter(x => x === 'O').length === 2 && line.includes('')) return [a, b, c][line.indexOf('')];
  }
  for (const [a, b, c] of winningConditions) {
    const line = [board[a], board[b], board[c]];
    if (line.filter(x => x === 'X').length === 2 && line.includes('')) return [a, b, c][line.indexOf('')];
  }
  const moves = getAvailableMoves(board);
  return moves.length === 0 ? null : moves[Math.floor(Math.random() * moves.length)];
}

const tictactoeStyles = `
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

  .ttt-page {
    min-height: 100vh;
    padding: clamp(4rem, 8vw, 6rem) 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-dark);
    transition: background 0.3s ease;
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
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  [data-theme="light"] .ttt-card {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  }

  .ttt-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 1.75rem;
  }

  .ttt-header { text-align: center; display: grid; gap: 0.4rem; }

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

  .ttt-controls { display: grid; gap: 0.75rem; justify-items: center; }

  .ttt-label { color: var(--text-secondary); font-weight: 600; letter-spacing: 0.05em; }

  .ttt-mode-select {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1rem;
    border-radius: 16px;
    background: rgba(20, 20, 45, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  [data-theme="light"] .ttt-mode-select {
    background: rgba(210, 210, 255, 0.8);
    border: 1px solid rgba(0,0,0,0.1);
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
    font-family: inherit;
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
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.2s ease, background-color 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    font-family: inherit;
  }

  [data-theme="light"] .ttt-cell {
    background: rgba(210, 210, 255, 0.7);
    border-color: rgba(0,0,0,0.08);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    color: #15803d;
  }

  [data-theme="light"] .ttt-cell.is-o { color: #b91c1c; }

  .ttt-cell:hover { transform: translateY(-4px); border-color: rgba(89, 25, 154, 0.55); box-shadow: 0 18px 28px rgba(34, 72, 239, 0.35); }
  [data-theme="light"] .ttt-cell:hover { box-shadow: 0 18px 28px rgba(34, 72, 239, 0.18); }
  .ttt-cell:disabled { cursor: not-allowed; opacity: 0.65; transform: none; box-shadow: none; }
  .ttt-cell:focus-visible { outline: 2px solid #6366f1; outline-offset: 3px; }
  .ttt-cell.is-o { color: #fca5a5; }

  .ttt-status {
    text-align: center;
    padding: 0.9rem 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(20, 20, 45, 0.85);
    font-size: 1.05rem;
    color: var(--text-secondary);
  }

  [data-theme="light"] .ttt-status { background: rgba(210,210,255,0.7); border-color: rgba(0,0,0,0.08); }

  .ttt-status.won { color: #6ee7b7; }
  .ttt-status.draw { color: #facc15; }

  .ttt-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

  .ttt-button {
    padding: 0.85rem 2.4rem;
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

  .ttt-button:focus-visible { outline: 2px solid #6366f1; outline-offset: 3px; }

  .ttt-button.primary {
    background: var(--gradient);
    color: white;
    box-shadow: 0 14px 30px rgba(34, 72, 239, 0.32);
  }

  .ttt-button.primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(34, 72, 239, 0.42); }

  .ttt-button.back {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  [data-theme="light"] .ttt-button.back {
    border-color: rgba(0, 0, 0, 0.18);
  }

  .ttt-button.back:hover { border-color: #667eea; color: var(--text-primary); }

  .ttt-helper { text-align: center; color: var(--text-secondary); font-size: 0.88rem; }

  @media (max-width: 520px) {
    .ttt-card { padding: 2rem 1.5rem; }
    .ttt-board { grid-template-columns: repeat(3, minmax(78px, 1fr)); gap: 0.7rem; }
    .ttt-actions { flex-direction: column; }
    .ttt-button { width: 100%; }
  }
`;

function Tictactoe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameActive, setGameActive] = useState(true);
  const [status, setStatus] = useState("It's X's turn");
  const [mode, setMode] = useState<Mode>('friend');
  const navigate = useNavigate();

  const winner = getWinner(board);
  const isDraw = !winner && board.every(cell => cell);

  useEffect(() => {
    if (winner) { setStatus(`Player ${winner} wins!`); if (gameActive) setGameActive(false); return; }
    if (isDraw) { setStatus("It's a draw!"); if (gameActive) setGameActive(false); return; }
    if (gameActive) setStatus(`It's ${isXTurn ? 'X' : 'O'}'s turn`);
  }, [winner, isDraw, gameActive, isXTurn]);

  useEffect(() => {
    if (!gameActive || isXTurn || mode !== 'computer' || winner || isDraw) return;
    const timer = setTimeout(() => {
      setBoard(prev => {
        const move = computerMove(prev);
        if (move === null || prev[move]) return prev;
        const next = prev.slice() as Player[];
        next[move] = 'O';
        return next;
      });
      setIsXTurn(true);
    }, 450);
    return () => clearTimeout(timer);
  }, [gameActive, isXTurn, mode, winner, isDraw]);

  const handleCell = (index: number) => {
    if (!gameActive || board[index]) return;
    setBoard(prev => {
      if (prev[index]) return prev;
      const next = prev.slice() as Player[];
      next[index] = isXTurn ? 'X' : 'O';
      return next;
    });
    setIsXTurn(p => !p);
  };

  const restart = () => {
    setBoard(Array(9).fill(''));
    setIsXTurn(true);
    setGameActive(true);
    setStatus("It's X's turn");
  };

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as Mode);
    setBoard(Array(9).fill(''));
    setIsXTurn(true);
    setGameActive(true);
    setStatus("It's X's turn");
  };

  const statusTone = winner ? 'won' : isDraw ? 'draw' : 'active';

  return (
    <div className="ttt-page">
      <style>{tictactoeStyles}</style>
      <div className="ttt-card">
        <div className="ttt-content">
          <header className="ttt-header">
            <span className="ttt-subtitle">Strategy Duel</span>
            <h1 className="ttt-title">Tic Tac Toe</h1>
          </header>
          <div className="ttt-controls">
            <span className="ttt-label">Choose your opponent</span>
            <div className="ttt-mode-select">
              <select
                className="ttt-select"
                value={mode}
                onChange={handleModeChange}
                aria-label="Select game mode"
              >
                <option value="friend">Play with a friend</option>
                <option value="computer">Play against AI</option>
              </select>
            </div>
          </div>
          <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
            {board.map((cell, idx) => (
              <button
                key={idx}
                type="button"
                role="gridcell"
                className={`ttt-cell${cell ? ` filled ${cell === 'X' ? 'is-x' : 'is-o'}` : ''}${!gameActive || cell ? ' disabled' : ''}`}
                onClick={() => handleCell(idx)}
                disabled={!gameActive || Boolean(cell)}
                aria-label={cell ? `Cell ${idx + 1} is ${cell}` : `Choose cell ${idx + 1}`}
              >
                {cell}
              </button>
            ))}
          </div>
          <div className={`ttt-status ${statusTone}`}>{status}</div>
          <div className="ttt-actions">
            <button type="button" className="ttt-button primary" onClick={restart}>↻ Restart Game</button>
            <button type="button" className="ttt-button back" onClick={() => navigate('/')}>← Portfolio</button>
          </div>
          <p className="ttt-helper">Tip: corners first for X, center first for O. Adapt and outsmart your rival.</p>
        </div>
      </div>
    </div>
  );
}

export default Tictactoe;
