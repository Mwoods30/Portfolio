import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const styles = `
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0;
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(6, 9, 20, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

[data-theme="light"] .nav.scrolled {
  background: rgba(248, 250, 252, 0.92);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  letter-spacing: -0.02em;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-btn {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  letter-spacing: 0.01em;
}

.nav-link-btn:hover {
  color: #f1f5f9;
  background: rgba(99,102,241,0.1);
}

[data-theme="light"] .nav-link-btn { color: #475569; }
[data-theme="light"] .nav-link-btn:hover { color: #0f172a; background: rgba(99,102,241,0.07); }

.nav-theme-btn {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.5rem;
}

.nav-theme-btn:hover {
  border-color: rgba(99,102,241,0.5);
  color: #f1f5f9;
}

[data-theme="light"] .nav-theme-btn {
  background: rgba(0,0,0,0.04);
  border-color: rgba(0,0,0,0.1);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.25rem;
}

.nav-bar {
  width: 22px;
  height: 2px;
  background: #94a3b8;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(6, 9, 20, 0.97);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 1rem 0 1.5rem;
    gap: 0;
    align-items: stretch;
  }
  [data-theme="light"] .nav-links.open {
    background: rgba(248, 250, 252, 0.97);
  }
  .nav-link-btn {
    padding: 0.85rem 2rem;
    border-radius: 0;
    text-align: left;
    font-size: 1rem;
  }
  .nav-theme-btn { margin: 0.5rem 2rem 0; }
  .nav-hamburger { display: flex; }
}
`;

const NAV_LINKS = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Projects', section: 'portfolio' },
  { label: 'Skills', section: 'skills' },
  { label: 'Resume', section: 'resume' },
  { label: 'Contact', section: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{styles}</style>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => navigate('/')}>mw.dev</span>
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="nav-bar" />
            <span className="nav-bar" />
            <span className="nav-bar" />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button className="nav-link-btn" onClick={() => scrollToSection(link.section)}>
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Toggle color theme">
                {theme === 'dark' ? '☀️' : '🌙'} {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
