import { useNavigate } from 'react-router-dom';

const footerStyles = `
:root {
  --primary: #fdfdfdff;
  --secondary: #3a158eff;
  --bg-dark: #0f0f23;
  --bg-card: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
  --glass: rgba(255, 243, 243, 0.1);
}

[data-theme="light"] {
  --bg-dark: #f0f0ff;
  --bg-card: #e8e8f8;
  --text-primary: #111;
  --text-secondary: #555;
  --glass: rgba(0, 0, 0, 0.06);
}

.footer::before,
.footer::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.footer::before {
  width: 520px;
  height: 520px;
  background: rgba(34, 72, 239, 0.35);
  top: 10%;
  left: 12%;
}

.footer::after {
  width: 420px;
  height: 420px;
  background: rgba(89, 25, 154, 0.35);
  bottom: -5%;
  right: 10%;
  transform: translate(50%, 50%);
}

.footer {
  background: rgba(12, 12, 28, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: clamp(3rem, 6vw, 4.5rem) 2rem 2.5rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

[data-theme="light"] .footer {
  background: rgba(230, 230, 250, 0.97);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.footer-shell {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: clamp(2.5rem, 5vw, 3.5rem);
  position: relative;
  z-index: 1;
}

.footer-brand {
  display: grid;
  gap: 1rem;
  max-width: 520px;
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: rgba(20, 20, 45, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-secondary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.footer-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -12px;
  width: clamp(48px, 6vw, 72px);
  height: 3px;
  background: var(--gradient);
  border-radius: 999px;
}

.footer-tagline {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer-button {
  border: none;
  border-radius: 14px;
  padding: 0.75rem 1.8rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.footer-button.primary {
  background: var(--gradient);
  color: var(--text-primary);
  box-shadow: 0 14px 32px rgba(34, 72, 239, 0.25);
}

.footer-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(34, 72, 239, 0.35);
}

.footer-button.secondary {
  background: rgba(20, 20, 45, 0.85);
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

.footer-button.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 0 18px 36px rgba(34, 72, 239, 0.25);
}

.footer-insight {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 420px;
  line-height: 1.6;
  display: grid;
  gap: 0.35rem;
}

.footer-columns {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.footer-column {
  display: grid;
  gap: 1rem;
}

.footer-column h3 {
  margin: 0;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
}

.footer-link,
.footer-link-button {
  background: none;
  border: none;
  padding: 0;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  font-family: inherit;
}

.footer-link:hover,
.footer-link-button:hover {
  color: var(--primary);
  transform: translateX(4px);
}

.footer-social {
  display: flex;
  gap: 1.1rem;
}

.footer-social a {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
}

.footer-social a:hover {
  color: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(34, 72, 239, 0.25);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.footer-bottom a {
  color: var(--text-secondary);
  text-decoration: none;
}

.footer-bottom a:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-actions {
    width: 100%;
  }

  .footer-button {
    flex: 1 1 160px;
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
`;

const quickLinks = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'portfolio' },
  { label: 'Skills', target: 'skills' },
  { label: 'Journey', target: 'journey' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'contact' },
];

const resources = [
  { label: 'Download Resume', href: '/MatthewWoodsResume.pdf' },
  { label: 'GitHub Portfolio', href: 'https://github.com/Mwoods30' },
  { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/matthew-woods-18b52526b' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/matthew-woods-18b52526b',
    label: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.8v2.05h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-7.04c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-5V8.98z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Mwoods30',
    label: 'GitHub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/Mattwoods301/',
    label: 'LeetCode',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12.707 10.293a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 10-1.414 1.414l2.5 2.5a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5z" />
      </svg>
    ),
  },
];

const footerInsights = [
  'Currently exploring advanced motion design in React.',
  'Always open to collaborating on playful UX and game mechanics.',
  'Comfortable shipping to Netlify, Vercel, and Firebase-hosted stacks.',
];

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <div className="footer-shell">
          <div className="footer-brand">
            <span className="footer-badge">Matthew Woods</span>
            <h2 className="footer-title">Designing playful, accessible, and performant web products.</h2>
            <p className="footer-tagline">
              From interactive games to production-ready dashboards, I thrive on crafting experiences where thoughtful
              UX meets reliable engineering. Let&apos;s collaborate on what comes next.
            </p>
            <div className="footer-actions">
              <button type="button" className="footer-button primary" onClick={() => scrollToSection('contact')}>
                Start a project
              </button>
              <a className="footer-button secondary" href="mailto:mattwoods301@gmail.com">
                Say hello
              </a>
            </div>
            <div className="footer-insight">
              {footerInsights.map((insight) => (
                <div key={insight}>{insight}</div>
              ))}
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>Navigate</h3>
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  className="footer-link-button"
                  onClick={() => scrollToSection(link.target)}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              {resources.map((item) => (
                <a key={item.label} className="footer-link" href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="footer-column">
              <h3>Stay in touch</h3>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Matthew Woods. Built with React and a love for thoughtful design.</span>
          <a href="mailto:mattwoods301@gmail.com">mattwoods301@gmail.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
