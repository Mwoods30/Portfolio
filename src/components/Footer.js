import React from 'react';

const footerStyles = `
.footer__container {
  background: #1a1a2e;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem 2rem;
  margin-top: auto;
}

.footer__links {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer__link--wrapper {
  display: flex;
  gap: 3rem;
}

.footer__link--items h2 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer__link {
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  display: block;
  margin-bottom: 0.5rem;
}

.footer__link:hover {
  color: #6366f1;
}

.footer__social-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social__icons--link {
  color: #a1a1aa;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.social__icons--link:hover {
  color: #6366f1;
  border-color: #6366f1;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 102, 241, 0.2);
}

.social__media {
  max-width: 1200px;
  margin: 2rem auto 0;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__logo a {
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .footer__links {
    flex-direction: column;
    text-align: center;
  }
  
  .footer__link--wrapper {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
`;

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Navigation</h2>
              <div className="footer__link" onClick={() => scrollToSection('portfolio')}>Projects</div>
              <div className="footer__link" onClick={() => scrollToSection('skills')}>Skills</div>
              <div className="footer__link" onClick={() => scrollToSection('resume')}>Resume</div>
            </div>
            <div className="footer__link--items">
              <h2>Contact</h2>
              <div className="footer__link" onClick={() => scrollToSection('contact')}>Contact Me</div>
              <a href="/Matthew Woods Resume.pdf" className="footer__link" download>Download Resume</a>
            </div>
          </div>

          <ul className="footer__social-list">
            <li>
              <a href="https://www.linkedin.com/in/matthew-woods-18b52526b" className="social__icons--link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.8v2.05h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-7.04c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-5V8.98z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mwoods30" className="social__icons--link" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/Mattwoods301/" className="social__icons--link" target="_blank" rel="noreferrer" aria-label="LeetCode">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12.707 10.293a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 10-1.414 1.414l2.5 2.5a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                  <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="#home" onClick={() => scrollToSection('home')}>MW</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
