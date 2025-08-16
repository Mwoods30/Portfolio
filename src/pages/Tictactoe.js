
import React, { useState } from 'react';

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

function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameActive, setGameActive] = useState(true);
    const [status, setStatus] = useState("It's X's turn");
    const [mode, setMode] = useState('friend');

    const winner = getWinner(board);
    const isDraw = !winner && board.every(cell => cell);

    React.useEffect(() => {
        if (!gameActive) return;
        if (winner) {
            setStatus(`Player ${winner} wins!`);
            setGameActive(false);
        } else if (isDraw) {
            setStatus("It's a draw!");
            setGameActive(false);
        } else {
            setStatus(`It's ${isXTurn ? 'X' : 'O'}'s turn`);
            // Computer move
            if (!isXTurn && mode === 'computer') {
                setTimeout(() => {
                    const idx = computerMove(board);
                    if (idx !== null) handleCell(idx);
                }, 500);
            }
        }
        // eslint-disable-next-line
    }, [board, isXTurn, gameActive, mode]);

    function handleCell(idx) {
        if (!gameActive || board[idx]) return;
        const newBoard = board.slice();
        newBoard[idx] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);
        setIsXTurn(x => !x);
    }

    function restart() {
        setBoard(Array(9).fill(''));
        setIsXTurn(true);
        setGameActive(true);
        setStatus("It's X's turn");
    }

    function handleModeChange(e) {
        setMode(e.target.value);
        restart();
    }

    return (
        <div style={{background:'#fff', minHeight:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 0'}}>
            <div style={{maxWidth:500, width:'100%', display:'flex', flexDirection:'column', alignItems:'center', gap:24}}>
                <h1 style={{fontSize:'2.2rem', fontWeight:700, color:'#49734D'}}>Tic Tac Toe</h1>
                <div style={{marginBottom:16}}>
                    <label style={{fontWeight:600, color:'#49734D', marginRight:8}}>Mode:</label>
                    <select value={mode} onChange={handleModeChange} style={{padding:'6px 12px', borderRadius:6, border:'1px solid #A1BE95', fontWeight:600}}>
                        <option value="friend">Vs Friend</option>
                        <option value="computer">Vs Computer</option>
                    </select>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(3, 80px)', gap:8, marginBottom:16}}>
                    {board.map((cell, idx) => (
                        <button key={idx} onClick={() => handleCell(idx)} style={{width:80, height:80, fontSize:32, fontWeight:700, color:'#279d45', background:'#f8f8f8', border:'2px solid #A1BE95', borderRadius:12, cursor: cell || !gameActive ? 'not-allowed' : 'pointer'}}>
                            {cell}
                        </button>
                    ))}
                </div>
                <div style={{fontSize:'1.2rem', color:'#49734D', marginBottom:16}}>{status}</div>
                <button onClick={restart} className="main__btn" style={{background:'#279d45', color:'#fff', padding:'10px 28px', borderRadius:6, fontWeight:600, fontSize:'1.1rem', textDecoration:'none', border:'none'}}>Restart</button>
            </div>
        </div>
    );
}

export default Tictactoe;
