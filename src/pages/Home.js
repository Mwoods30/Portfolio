
import React from 'react';

const spaStyles = `
:root {
  --primary: #fdfdfdff;
  --secondary: #3a158eff;
  --accent: #e3f1f4ff;
  --bg-dark: #0f0f23;
  --bg-card: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
  --glass: rgba(255, 243, 243, 0.1);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--bg-dark);
}

.bg-animation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  margin-top: 80px;
}

.hero-content {
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--gradient);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 102, 241, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--glass);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  border-color: var(--primary);
  background: var(--glass);
}

.hero-image {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.hero-image img {
  max-width: 400px;
  width: 100%;
  border-radius: 24px;
  border: 2px solid var(--glass);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--glass);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
}

.project-card:hover::before {
  opacity: 0.1;
}

.project-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid var(--glass);
}

.project-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--glass);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-item {
  text-align: center;
  padding: 2rem 1rem;
  background: var(--bg-card);
  border-radius: 15px;
  border: 1px solid var(--glass);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resume-section {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid var(--glass);
  backdrop-filter: blur(10px);
  text-align: center;
}

.contact-container {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid var(--glass);
  backdrop-filter: blur(10px);
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  border: 2px solid var(--glass);
  backdrop-filter: blur(10px);
}

.contact-link:hover {
  color: var(--primary);
  transform: translateY(-2px);
  border-color: var(--primary);
  background: var(--glass);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
`;

const projects = [
  {
    title: 'Website',
    img: '/website.png',
    desc: 'Different version of website currently using.',
    button: { text: 'View on GitHub', href: 'https://github.com/Mwoods30/Portfolio', external: true },
    tech: ['React', 'JavaScript', 'CSS', 'HTML']
  },
  {
    title: 'Wordle',
    img: '/wordle.png',
    desc: 'Interactive Wordle game built with React.',
    button: { text: 'Play Wordle', onClick: () => window.navigateToPage('wordle') },
    tech: ['React', 'JavaScript', 'CSS', 'Game Logic']
  },
  {
    title: 'Snake',
    img: '/snake.png',
    desc: 'Classic Snake game with modern controls.',
    button: { text: 'Play Snake', onClick: () => window.navigateToPage('snake') },
    tech: ['React', 'Canvas API', 'JavaScript', 'Game Dev']
  },
  {
    title: 'Tic Tac Toe',
    img: '/tictactoeimg.png',
    desc: 'Play against a friend or computer AI.',
    button: { text: 'Play Tic Tac Toe', onClick: () => window.navigateToPage('tictactoe') },
    tech: ['React', 'AI Logic', 'JavaScript', 'Strategy']
  },
  {
    titile: "Expense Tracker",
    img: "/snake.png",
    desc: 'Finance Tracker',
    button: {text: "Try it out", onClick: ()=> window.navigateToPage('financetracker')},
    tech: ['React', 'Node.js', 'CSS', 'HTML']

  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

function Home() {
  return (
    <div>
      <style>{spaStyles}</style>
      <div className="bg-animation"></div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Matthew Woods</h1>
          <p className="hero-subtitle">CS at Rowan University</p>
          <p className="hero-description">
            Welcome to my personal website! Here you can find information about my projects, skills, and how to contact me.
            Feel free to explore and learn more about me.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>
              <span>📁</span> View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <span>💬</span> Get In Touch
            </button>
          </div>
          <div className="hero-image">
            <img src="/Coding-Picture.jpeg" alt="Matthew Woods - Coding" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <h2>Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card fade-in">
              <div className="project-image">
                <img src={proj.img} alt={proj.title} />
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              {proj.button.external ? (
                <a href={proj.button.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {proj.button.text}
                </a>
              ) : (
                <button onClick={proj.button.onClick} className="btn btn-primary">
                  {proj.button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item fade-in">
            <div className="skill-icon">⚛️</div>
            <h3>Frontend</h3>
            <p>Responsive Design, Testing and Debugging, Accessibility, Cross-Browser Development</p>
          </div>
          <div className="skill-item fade-in">
            <div className="skill-icon">🔧</div>
            <h3>Languages/Frameworks</h3>
            <p>Java, JavaScript, C#, HTML, CSS, Python, React, .NET, Vite</p>
          </div>
          <div className="skill-item fade-in">
            <div className="skill-icon">⛭</div>
            <h3>Skills</h3>
            <p>Git, Problem Solving, Communication, Creativity, Adaptability, UX/UI Knowledge</p>
          </div>
          <div className="skill-item fade-in">
            <div className="skill-icon">🎓</div>
            <h3>Education</h3>
            <p>Computer Science at Rowan University</p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section">
        <div className="resume-section">
          <h2>Resume</h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem'}}>
            Download my resume to learn more about my education, experience, and technical skills.
          </p>
          <a href="/MatthewWoodsResume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span>📄</span> Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-container">
          <h2>Let's Work Together</h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem'}}>
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people.
          </p>
          <div className="contact-links">
            <a href="mailto:mattwoods301@gmail.com" className="contact-link">
              <span>📬</span> mattwoods301@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/matthew-woods-18b52526b" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>💼</span> LinkedIn
            </a>
            <a href="https://github.com/Mwoods30" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>🔗</span> GitHub
            </a>
            <a href="https://leetcode.com/Mattwoods301/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>⚡</span> LeetCode
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;