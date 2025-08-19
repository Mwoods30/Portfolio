import React from 'react';

const navbarStyles = `
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  transition: all 0.3s ease;
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
}

.navbar__menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links {
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.navbar__links:hover {
  color: #ffffff;
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

.navbar__toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #ffffff;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .navbar__menu {
    display: none;
  }
  
  .navbar__toggle {
    display: flex;
  }
}
`;

function Navbar() {
  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.navigateToPage('home');
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <>
      <style>{navbarStyles}</style>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo" onClick={() => {
            if (window.navigateToPage) {
              window.navigateToPage('home');
            } else {
              window.location.href = '/';
            }
          }}>
            <i className="fas fa-gem" /> Matthew Woods
          </div>

          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>

          <ul className="navbar__menu">
            <li className="navbar__item">
              <div className="navbar__links" onClick={() => scrollToSection('home')}>Home</div>
            </li>
            <li className="navbar__item">
              <div className="navbar__links" onClick={() => scrollToSection('portfolio')}>Projects</div>
            </li>
            <li className="navbar__item">
              <div className="navbar__links" onClick={() => scrollToSection('skills')}>Skills</div>
            </li>
            <li className="navbar__item">
              <div className="navbar__links" onClick={() => scrollToSection('resume')}>Resume</div>
            </li>
            <li className="navbar__item">
              <div className="navbar__links" onClick={() => scrollToSection('contact')}>Contact</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
