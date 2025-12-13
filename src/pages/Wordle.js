import React, { useEffect, useState, useCallback, useRef } from 'react';

const WORDS = [
  'apple', 'grape', 'lemon', 'peach', 'mango', 'berry', 'melon', 'plums', 'olive', 'spice',
  'chair', 'table', 'plant', 'crane', 'flame', 'sugar', 'tiger', 'zebra', 'eagle', 'piano'
];

const WORDLE_API_BASE = 'https://words.dev-apis.com';
const API_TIMEOUT_MS = 4500;
const VALIDATION_TIMEOUT_MS = 3000;

async function fetchSecretFromApi({ random = false, signal } = {}) {
  const endpoint = `${WORDLE_API_BASE}/word-of-the-day${random ? '?random=1' : ''}`;
  const response = await fetch(endpoint, { signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch word: ${response.status}`);
  }

  const data = await response.json();
  if (data?.word && data.word.length === 5) {
    return {
      word: data.word.toLowerCase(),
      puzzleNumber: typeof data.puzzleNumber === 'number' ? data.puzzleNumber : null
    };
  }

  throw new Error('API returned unexpected payload');
}

async function validateWordWithApi(word, { signal } = {}) {
  const response = await fetch(`${WORDLE_API_BASE}/validate-word`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word }),
    signal
  });

  if (!response.ok) {
    throw new Error(`Validation failed: ${response.status}`);
  }

  const data = await response.json();
  return Boolean(data?.validWord);
}

const wordleStyles = `
  :root {
    --primary: #fdfdfdff;
    --secondary: #3a158eff;
    --bg-dark: #050613;
    --bg-card: #11132b;
    --text-primary: #f7f9ff;
    --text-secondary: #a9adbd;
    --accent: #2248ef;
    --gradient: linear-gradient(135deg, #2248ef 0%, #59199a 100%);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    margin: 0;
  }

  @keyframes floatOrb {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-12px, 18px, 0) scale(1.08);
    }
  }

  .wordle-page {
    min-height: 100vh;
    padding: clamp(4rem, 6vw, 5rem) 1.5rem clamp(5rem, 7vw, 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at 20% 20%, rgba(89, 25, 154, 0.25), transparent 55%),
                radial-gradient(circle at 80% 0%, rgba(34, 72, 239, 0.2), transparent 60%),
                var(--bg-dark);
  }

  .wordle-card {
    width: min(680px, 94vw);
    background: rgba(17, 19, 43, 0.92);
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 32px 70px rgba(4, 6, 18, 0.55);
    padding: clamp(2.5rem, 6vw, 3rem);
    display: grid;
    gap: clamp(1.75rem, 4vw, 2.4rem);
    position: relative;
    overflow: hidden;
  }

  .wordle-card::before,
  .wordle-card::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(90px);
    opacity: 0.7;
    pointer-events: none;
  }

  .wordle-card::before {
    width: 360px;
    height: 360px;
    background: rgba(34, 72, 239, 0.32);
    top: -120px;
    right: -140px;
    animation: floatOrb 18s ease-in-out infinite;
  }

  .wordle-card::after {
    width: 320px;
    height: 320px;
    background: rgba(89, 25, 154, 0.26);
    bottom: -140px;
    left: -120px;
    animation: floatOrb 22s ease-in-out infinite reverse;
  }

  .wordle-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: clamp(1.5rem, 4vw, 2.2rem);
  }

  .wordle-header {
    display: grid;
    gap: 0.6rem;
    text-align: center;
  }

  .wordle-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .wordle-title {
    margin: 0;
    font-size: clamp(2.3rem, 6vw, 3rem);
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
  }

  .wordle-description {
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(0.95rem, 2vw, 1.05rem);
  }

  .wordle-metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  }

  .wordle-chip {
    padding: 0.65rem 1.1rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
  }

  .wordle-chip strong {
    color: var(--text-primary);
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .wordle-chip.alert {
    background: rgba(249, 115, 22, 0.12);
    border-color: rgba(249, 115, 22, 0.35);
    color: #ffb469;
  }

  .wordle-grid {
    display: grid;
    gap: 0.8rem;
    justify-content: center;
  }

  .wordle-row {
    display: flex;
    gap: 0.8rem;
  }

  .wordle-square {
    width: clamp(52px, 9vw, 64px);
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--text-primary);
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border 0.22s ease;
  }

  .wordle-square.filled {
    transform: translateY(-2px);
  }

  .wordle-square.correct {
    background: linear-gradient(135deg, rgba(45, 212, 191, 0.95), rgba(34, 211, 238, 0.95));
    border-color: rgba(34, 211, 238, 0.55);
    color: #07131f;
    box-shadow: 0 18px 38px rgba(34, 211, 238, 0.35);
  }

  .wordle-square.present {
    background: linear-gradient(135deg, rgba(250, 204, 21, 0.92), rgba(249, 115, 22, 0.95));
    border-color: rgba(249, 115, 22, 0.4);
    color: #211508;
    box-shadow: 0 16px 30px rgba(249, 115, 22, 0.32);
  }

  .wordle-square.absent {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.45);
  }

  .wordle-square.typing {
    background: rgba(34, 72, 239, 0.16);
    border-color: rgba(34, 72, 239, 0.45);
    color: var(--text-primary);
    box-shadow: 0 14px 28px rgba(34, 72, 239, 0.18);
  }

  .wordle-square.empty {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.25);
  }

  .wordle-message {
    padding: 0.9rem 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    text-align: center;
    font-size: 0.98rem;
    color: var(--text-secondary);
    min-height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wordle-message.success {
    background: rgba(45, 212, 191, 0.14);
    border-color: rgba(34, 211, 238, 0.45);
    color: #7ff7e7;
  }

  .wordle-message.warning {
    background: rgba(249, 115, 22, 0.12);
    border-color: rgba(249, 115, 22, 0.4);
    color: #ffbb7d;
  }

  .wordle-message.danger {
    background: rgba(239, 68, 68, 0.16);
    border-color: rgba(248, 113, 113, 0.4);
    color: #ff9a9a;
  }

  .wordle-message.neutral {
    background: rgba(89, 25, 154, 0.14);
    border-color: rgba(89, 25, 154, 0.45);
    color: #c8a7ff;
  }

  .wordle-message.muted {
    opacity: 0.82;
  }

  .wordle-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .wordle-button {
    padding: 0.85rem 2.4rem;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .wordle-button.primary {
    background: var(--gradient);
    color: var(--text-primary);
    box-shadow: 0 18px 40px rgba(34, 72, 239, 0.32);
  }

  .wordle-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 48px rgba(34, 72, 239, 0.38);
  }

  .wordle-button.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .wordle-button.secondary:hover {
    transform: translateY(-2px);
    border-color: rgba(34, 72, 239, 0.45);
    box-shadow: 0 18px 42px rgba(34, 72, 239, 0.28);
  }

  .wordle-button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  .wordle-guide {
    display: grid;
    gap: 0.75rem;
    text-align: center;
  }

  .wordle-guide-title {
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }

  .wordle-instructions {
    display: grid;
    gap: 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .wordle-instructions li {
    display: inline-flex;
    justify-content: center;
    gap: 0.45rem;
  }

  .wordle-instructions li strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  @media (max-width: 540px) {
    .wordle-page {
      padding-top: 3.5rem;
      padding-bottom: 4rem;
    }

    .wordle-row {
      gap: 0.6rem;
    }

    .wordle-square {
      border-radius: 14px;
    }

    .wordle-actions {
      gap: 0.6rem;
    }
  }
`;

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function Wordle() {
  const [secret, setSecret] = useState(() => pickWord());
  const [board, setBoard] = useState(() => Array.from({ length: 6 }, () => Array(5).fill('')));
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);
  const [loadingSecret, setLoadingSecret] = useState(true);
  const [checkingGuess, setCheckingGuess] = useState(false);
  const [apiSource, setApiSource] = useState('loading-daily');
  const [puzzleNumber, setPuzzleNumber] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadSecret = useCallback(async (random = false) => {
    setLoadingSecret(true);
    setApiSource(random ? 'loading-random' : 'loading-daily');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
      const result = await fetchSecretFromApi({ random, signal: controller.signal });

      if (!mountedRef.current) {
        window.clearTimeout(timeoutId);
        return;
      }

      setSecret(result.word);
      setPuzzleNumber(result.puzzleNumber);
      setApiSource(random ? 'api-random' : 'api-daily');
      setMessage(random ? 'New puzzle loaded - go again!' : '');
    } catch (error) {
      if (!mountedRef.current) {
        window.clearTimeout(timeoutId);
        return;
      }

      setSecret(pickWord());
      setPuzzleNumber(null);
      setApiSource('fallback');
      if (error.name === 'AbortError') {
        setMessage('Wordle API timed out - using built-in word list.');
      } else {
        setMessage('Offline mode - using built-in word list.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      if (mountedRef.current) {
        setLoadingSecret(false);
      }
    }
  }, []);

  useEffect(() => {
    loadSecret();
  }, [loadSecret]);

  const handleAdd = useCallback((letter) => {
    if (done || loadingSecret || checkingGuess || col >= 5 || row >= 6) {
      return;
    }

    setBoard(prev => {
      const copy = prev.map(r => r.slice());
      copy[row][col] = letter.toUpperCase();
      return copy;
    });
    setCol(c => Math.min(5, c + 1));
  }, [checkingGuess, col, done, loadingSecret, row]);

  const handleBack = useCallback(() => {
    if (col === 0 || done || loadingSecret || checkingGuess) {
      return;
    }

    setBoard(prev => {
      const copy = prev.map(r => r.slice());
      copy[row][col - 1] = '';
      return copy;
    });
    setCol(c => Math.max(0, c - 1));
  }, [checkingGuess, col, done, loadingSecret, row]);

  const handleSubmit = useCallback(async () => {
    if (done || loadingSecret || checkingGuess) {
      return;
    }

    if (col < 5) {
      setMessage('Not enough letters');
      return;
    }

    const guess = board[row].join('').toLowerCase();

    let guessIsValid = true;
    setCheckingGuess(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), VALIDATION_TIMEOUT_MS);

    try {
      guessIsValid = await validateWordWithApi(guess, { signal: controller.signal });
      if (!guessIsValid) {
        setMessage('Not in Wordle dictionary - try another word.');
        return;
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setMessage('Dictionary check timed out - continuing locally.');
      } else {
        setMessage('Dictionary offline - using local validation.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      if (mountedRef.current) {
        setCheckingGuess(false);
      }
    }

    if (!mountedRef.current) {
      return;
    }

    if (!guessIsValid) {
      return;
    }

    if (guess === secret) {
      setMessage('Congratulations! You guessed it!');
      setDone(true);
      return;
    }

    if (row === 5) {
      setMessage(`Game Over - word was ${secret.toUpperCase()}`);
      setDone(true);
      return;
    }

    setRow(r => r + 1);
    setCol(0);
    setMessage(prev => {
      if (prev && (prev.includes('Offline mode') || prev.includes('Dictionary offline'))) {
        return prev;
      }
      return '';
    });
  }, [board, checkingGuess, col, done, loadingSecret, row, secret]);

  useEffect(() => {
    function onKey(event) {
      if (done || loadingSecret || checkingGuess) {
        return;
      }

      const { key } = event;
      if (key === 'Enter') {
        handleSubmit();
      } else if (key === 'Backspace') {
        handleBack();
      } else if (/^[a-zA-Z]$/.test(key)) {
        handleAdd(key);
      }
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [checkingGuess, done, handleAdd, handleBack, handleSubmit, loadingSecret]);

  const restart = useCallback(() => {
    setBoard(Array.from({ length: 6 }, () => Array(5).fill('')));
    setRow(0);
    setCol(0);
    setMessage('');
    setDone(false);
    setCheckingGuess(false);
    loadSecret(true);
  }, [loadSecret]);

  const computeColors = (rIdx) => {
    const guess = board[rIdx];
    const guessFilled = guess.every(letter => letter);
    const submittedRow = rIdx < row || (done && rIdx === row && guessFilled);

    if (submittedRow) {
      const sArr = secret.split('');
      const colors = Array(5).fill('absent');
      const used = Array(5).fill(false);

      for (let i = 0; i < 5; i += 1) {
        if (guess[i] && guess[i].toLowerCase() === sArr[i]) {
          colors[i] = 'correct';
          used[i] = true;
        }
      }

      for (let i = 0; i < 5; i += 1) {
        if (!guess[i] || colors[i] === 'correct') {
          continue;
        }

        const idx = sArr.findIndex((ch, j) => ch === guess[i].toLowerCase() && !used[j]);
        if (idx !== -1) {
          colors[i] = 'present';
          used[idx] = true;
        }
      }

      return colors;
    }

    if (rIdx === row) {
      return guess.map(letter => (letter ? 'typing' : 'empty'));
    }

    return Array(5).fill('empty');
  };

  const attemptsUsed = done ? row + 1 : row + (col > 0 ? 1 : 0);
  const attemptsRemaining = Math.max(0, 6 - attemptsUsed);
  const lettersPlaced = board.flat().filter(Boolean).length;
  const statusMessage = loadingSecret
    ? 'Fetching today\'s puzzle from the live Wordle API...'
    : checkingGuess
      ? 'Checking your guess with the live dictionary...'
      : message || 'Type letters on your keyboard to make a guess.';

  const messageTone = loadingSecret || checkingGuess
    ? 'neutral'
    : message
      ? message.includes('Not enough') || message.includes('Not in Wordle') || message.includes('Offline mode') || message.includes('Dictionary offline') || message.includes('timed out')
        ? 'warning'
        : message.includes('Game Over')
          ? 'danger'
          : message.includes('Congratulations')
            ? 'success'
            : 'neutral'
      : 'muted';

  const sourceInfo = (() => {
    switch (apiSource) {
      case 'api-daily':
        return { label: 'Source', value: 'Live daily API', tone: '' };
      case 'api-random':
        return { label: 'Source', value: 'Live random API', tone: '' };
      case 'loading-daily':
      case 'loading-random':
        return { label: 'Source', value: 'Loading...', tone: '' };
      case 'fallback':
        return { label: 'Source', value: 'Offline fallback', tone: 'alert' };
      default:
        return { label: 'Source', value: 'Local pool', tone: '' };
    }
  })();

  return (
    <>
      <style>{wordleStyles}</style>
      <section className="wordle-page">
        <div className="wordle-card">
          <div className="wordle-content">
            <header className="wordle-header">
              <span className="wordle-subtitle">Daily Logic Drill</span>
              <h1 className="wordle-title">Wordle Lab</h1>
              <p className="wordle-description">
                Crack the five-letter code in six attempts. Read the color tells, refine your guess, and chase the perfect streak.
              </p>
            </header>

            <div className="wordle-metrics">
              <div className="wordle-chip">
                <span>Attempts</span>
                <strong>{attemptsUsed}</strong>
                <span>/ 6</span>
              </div>
              <div className={`wordle-chip ${attemptsRemaining <= 2 ? 'alert' : ''}`}>
                <span>Remaining</span>
                <strong>{attemptsRemaining}</strong>
              </div>
              <div className="wordle-chip">
                <span>Letters placed</span>
                <strong>{lettersPlaced}</strong>
              </div>
              {typeof puzzleNumber === 'number' && (
                <div className="wordle-chip">
                  <span>Puzzle</span>
                  <strong>#{puzzleNumber}</strong>
                </div>
              )}
              <div className={`wordle-chip ${sourceInfo.tone}`}>
                <span>{sourceInfo.label}</span>
                <strong>{sourceInfo.value}</strong>
              </div>
            </div>

            <div className="wordle-grid" role="grid" aria-label="Wordle board">
              {board.map((r, rIdx) => {
                const colors = computeColors(rIdx);
                return (
                  <div key={rIdx} className="wordle-row" role="row">
                    {r.map((cell, i) => (
                      <div
                        key={`${rIdx}-${i}`}
                        className={`wordle-square ${colors[i]} ${cell ? 'filled' : ''}`}
                        role="gridcell"
                        aria-live={rIdx === row ? 'polite' : 'off'}
                        aria-label={cell ? `${cell} ${colors[i]}` : 'empty slot'}
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className={`wordle-message ${messageTone}`}>
              {statusMessage}
            </div>

            <div className="wordle-actions">
              <button
                type="button"
                onClick={restart}
                className="wordle-button primary"
                disabled={loadingSecret || checkingGuess}
              >
                Restart
              </button>
              <button
                type="button"
                className="wordle-button secondary"
                onClick={() => window.navigateToPage && window.navigateToPage('tictactoe')}
              >
                Try Tic Tac Toe
              </button>
            </div>

            <div className="wordle-guide">
              <span className="wordle-guide-title">How To Read It</span>
              <ul className="wordle-instructions">
                <li><strong>Green</strong> letter is perfect - right spot, right letter.</li>
                <li><strong>Amber</strong> means the letter exists, but needs a new position.</li>
                <li><strong>Gray</strong> tells you to retire that letter from future guesses.</li>
                <li>Need a reset? Use Backspace, then press Enter to lock in your guess.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wordle;
