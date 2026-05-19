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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <div className="footer-bottom">
          <span>© {currentYear} Matthew Woods. Built with React and a love for thoughtful design.</span>
          <a href="mailto:mattwoods301@gmail.com">mattwoods301@gmail.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
