import React, { useEffect, useState, useCallback } from 'react';

const WORDS = [
  'apple','grape','lemon','peach','mango','berry','melon','plums','olive','spice',
  'chair','table','plant','crane','flame','sugar','tiger','zebra','eagle','piano'
];

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function Wordle() {
  const [secret, setSecret] = useState(() => pickWord());
  const [board, setBoard] = useState(() => Array.from({length:6}, () => Array(5).fill('')));
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);



  

  const handleAdd = useCallback((letter) => {
    if (col >= 5 || row >= 6) return;
    setBoard(prev => {
      const copy = prev.map(r => r.slice());
      copy[row][col] = letter.toUpperCase();
      return copy;
    });
    setCol(c => c + 1);
  }, [row, col]);

  const handleBack = useCallback(() => {
    if (col === 0) return;
    setBoard(prev => {
      const copy = prev.map(r => r.slice());
      copy[row][col-1] = '';
      return copy;
    });
    setCol(c => Math.max(0, c-1));
  }, [row, col]);

  const handleSubmit = useCallback(() => {
    if (col < 5) { setMessage('Not enough letters'); return; }
    const guess = board[row].join('').toLowerCase();
    // no wordlist check — keep it playable
    // evaluate
    const secretArr = secret.split('');
    const colors = Array(5).fill('gray');
    const used = Array(5).fill(false);
    for (let i=0;i<5;i++) {
      if (guess[i] === secretArr[i]) { colors[i] = 'green'; used[i]=true; }
    }
    for (let i=0;i<5;i++) {
      if (colors[i] === 'green') continue;
      const idx = secretArr.findIndex((ch, j) => ch===guess[i] && !used[j]);
      if (idx !== -1) { colors[i] = 'gold'; used[idx]=true; }
    }

  // no board modification needed here — UI colors derive from computeColors

    if (guess === secret) {
      setMessage('Congratulations! You guessed it!');
      setDone(true);
      return;
    }
    if (row === 5) {
      setMessage(`Game Over — word was ${secret.toUpperCase()}`);
      setDone(true);
      return;
    }
    setRow(r => r+1);
    setCol(0);
    setMessage('');
  }, [board, row, col, secret]);

  useEffect(() => {
    function onKey(e) {
      if (done) return;
      const k = e.key;
      if (k === 'Enter') handleSubmit();
      else if (k === 'Backspace') handleBack();
      else if (/^[a-zA-Z]$/.test(k)) handleAdd(k);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // handlers are stable because they are defined with useCallback in this file
  }, [done, handleAdd, handleBack, handleSubmit]);

  function restart() {
    setSecret(pickWord());
    setBoard(Array.from({length:6}, () => Array(5).fill('')));
    setRow(0); setCol(0); setMessage(''); setDone(false);
  }

  // Helper to compute colors for display
  const computeColors = (rIdx) => {
    if (rIdx > row) return Array(5).fill('empty');
    if (rIdx < row) {
      const guess = board[rIdx].join('').toLowerCase();
      const sArr = secret.split('');
      const colors = Array(5).fill('gray');
      const used = Array(5).fill(false);
      for (let i=0;i<5;i++) if (guess[i] && guess[i] === sArr[i]) { colors[i] = 'green'; used[i]=true; }
      for (let i=0;i<5;i++) if (guess[i] && colors[i] !== 'green') {
        const idx = sArr.findIndex((ch,j) => ch===guess[i] && !used[j]);
        if (idx !== -1) { colors[i] = 'gold'; used[idx]=true; }
      }
      return colors;
    }
    // current row
    return Array.from({length:5}, (_,i) => board[rIdx][i] ? 'typing' : 'empty');
  };

  return (
    <div className="wordle-page" style={{padding:20}}>
      <h1>Wordle</h1>
      <div style={{display:'grid', gap:8, justifyContent:'center'}}>
        {board.map((r, rIdx) => {
          const colors = computeColors(rIdx);
          return (
            <div key={rIdx} className="letter-row" style={{display:'flex', gap:8}}>
              {r.map((cell, i) => (
                <div key={i} className={`wordle-square ${colors[i]}`} style={{width:56, height:56, display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #A1BE95', fontSize:24, fontWeight:700, background: colors[i]==='green'? '#6aaa64' : colors[i]==='gold'? '#c9b458' : '#fff8f3', color: colors[i]==='empty' ? '#49734D' : '#fff'}}>
                  {cell}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:24}}>
        <p style={{margin:'0 0 12px 0', color: message ? '#49734D' : '#666', textAlign:'center', minHeight:24}}>{message}</p>
        <button onClick={restart} className="main__btn" style={{background:'#279d45', color:'#fff', padding:'10px 28px', borderRadius:6, fontWeight:600, fontSize:'1.1rem', textDecoration:'none', border:'none', marginBottom:8}}>Restart</button>
        <p style={{marginTop:4, color:'#666', textAlign:'center'}}>Tip: type letters and press Enter. Backspace removes.</p>
      </div>
    </div>
  );
}

export default Wordle;
