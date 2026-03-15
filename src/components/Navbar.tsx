import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navbarStyles = `
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

[data-theme="light"] .navbar {
  background: rgba(245, 245, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.navbar__logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  cursor: pointer;
}

.navbar__menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navbar__links {
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 0;
}

[data-theme="light"] .navbar__links {
  color: #555;
}

.navbar__links:hover {
  color: #ffffff;
}

[data-theme="light"] .navbar__links:hover {
  color: #111;
}

.navbar__links::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.navbar__links:hover::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 0.4rem 0.9rem;
  color: #a1a1aa;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}

[data-theme="light"] .theme-toggle {
  border-color: rgba(0, 0, 0, 0.15);
  color: #555;
}

.theme-toggle:hover {
  border-color: #667eea;
  color: #fff;
}

[data-theme="light"] .theme-toggle:hover {
  color: #111;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.25rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: #ffffff;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

[data-theme="light"] .bar {
  background: #333;
}

@media (max-width: 768px) {
  .navbar__menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(15, 15, 35, 0.97);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  [data-theme="light"] .navbar__menu {
    background: rgba(245, 245, 255, 0.98);
  }

  .navbar__menu.open {
    display: flex;
  }

  .navbar__menu li {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;
  }

  .navbar__toggle {
    display: flex;
  }
}
`;

const NAV_LINKS = [
  { label: 'Home', section: 'home' },
  { label: 'Projects', section: 'portfolio' },
  { label: 'Skills', section: 'skills' },
  { label: 'Resume', section: 'resume' },
  { label: 'Contact', section: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

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
      <style>{navbarStyles}</style>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo" onClick={() => navigate('/')}>
            Matthew Woods
          </div>

          <button
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <ul className={`navbar__menu${menuOpen ? ' open' : ''}`}>
            {NAV_LINKS.map(link => (
              <li key={link.label} className="navbar__item">
                <button className="navbar__links" onClick={() => scrollToSection(link.section)}>
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
