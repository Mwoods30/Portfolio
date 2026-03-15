import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';

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

[data-theme="light"] {
  --bg-dark: #f4f4ff;
  --bg-card: #ebebff;
  --text-primary: #111111;
  --text-secondary: #555555;
  --glass: rgba(0, 0, 0, 0.06);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  transition: background 0.3s ease, color 0.3s ease;
}

.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--bg-dark);
  transition: background 0.3s ease;
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

[data-theme="light"] .bg-animation::before {
  background:
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.06) 0%, transparent 50%);
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
  display: grid;
  gap: 2rem;
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(20, 20, 45, 0.8);
  color: var(--text-secondary);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  justify-self: center;
}

.hero-meta {
  display: grid;
  gap: 1.5rem;
  justify-items: center;
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
  font-family: inherit;
  font-size: 1rem;
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.stat-card {
  background: rgba(20, 20, 45, 0.85);
  border-radius: 18px;
  padding: 1.5rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.4rem;
  justify-items: center;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.25);
}

[data-theme="light"] .stat-card {
  background: rgba(220, 220, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.stat-card strong {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-card span {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: center;
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

.section-subtitle {
  color: var(--text-secondary);
  text-align: center;
  max-width: 700px;
  margin: -2rem auto 2rem;
  font-size: 1rem;
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
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
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
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-card:hover::before {
  opacity: 0.1;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-meta span {
  color: var(--text-secondary);
  font-size: 0.9rem;
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
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text-secondary);
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  border-color: #667eea;
  color: #fff;
  background: rgba(102, 126, 234, 0.15);
}

[data-theme="light"] .btn-icon:hover {
  color: #222;
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
  cursor: pointer;
  position: relative;
}

.skill-item:hover,
.skill-item.active {
  transform: translateY(-5px) scale(1.02);
  border-color: rgba(102, 126, 234, 0.5);
}

.skill-item:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 4px;
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skill-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 15, 35, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
  padding: 1.5rem;
}

[data-theme="light"] .skill-overlay {
  background: rgba(200, 200, 230, 0.85);
}

.skill-modal {
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid var(--glass);
  padding: 2.5rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;
}

.skill-modal .skill-icon {
  font-size: 3.5rem;
}

.skill-modal h3 {
  margin-top: 0.5rem;
  font-size: 2rem;
  color: var(--text-primary);
}

.skill-modal p {
  color: var(--text-secondary);
  margin: 1rem auto 1.5rem;
}

.skill-details {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.skill-details li {
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: var(--glass);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-button:hover,
.close-button:focus-visible {
  color: var(--primary);
}

.journey-grid {
  display: grid;
  gap: 2rem;
}

.journey-timeline {
  display: grid;
  gap: 1.5rem;
}

.timeline-card {
  background: var(--bg-card);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.8rem;
  display: grid;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

[data-theme="light"] .timeline-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.timeline-card::after {
  content: '';
  position: absolute;
  inset: auto auto -40% -40%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at center, rgba(34, 72, 239, 0.15), transparent 70%);
  opacity: 0.8;
  pointer-events: none;
}

.timeline-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.timeline-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.65rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.timeline-points li::before {
  content: '•';
  color: #667eea;
  margin-right: 0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-card {
  background: rgba(20, 20, 45, 0.85);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  display: grid;
  gap: 0.75rem;
  transition: transform 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
}

[data-theme="light"] .contact-card {
  background: rgba(220, 220, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.contact-card:hover {
  transform: translateY(-6px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 18px 36px rgba(34, 72, 239, 0.2);
}

.contact-card span {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.contact-card strong {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 14px;
  border: none;
  text-decoration: none;
  font-weight: 600;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(34, 72, 239, 0.3);
}

.contact-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 2rem;
}

.resume-section {
  position: relative;
  overflow: hidden;
  background: var(--bg-card);
  border-radius: 24px;
  padding: 3.5rem clamp(2rem, 4vw, 4rem);
  margin: 2.5rem 0;
  border: 1px solid var(--glass);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.resume-section::before {
  content: '';
  position: absolute;
  inset: -40% -40% auto;
  height: 70%;
  background: radial-gradient(circle at center, rgba(89, 25, 154, 0.4), transparent 70%);
  opacity: 0.7;
  pointer-events: none;
  animation: float 18s ease-in-out infinite;
}

.resume-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;
}

.resume-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.resume-header h2 {
  text-align: left;
}

.resume-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.resume-badge {
  border-radius: 999px;
  padding: 0.5rem 1.25rem;
  background: rgba(35, 35, 70, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

[data-theme="light"] .resume-badge {
  background: rgba(200, 200, 240, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.resume-highlight-grid {
  display: grid;
  gap: 1.5rem;
}

.resume-highlight {
  padding: 1.5rem;
  background: rgba(20, 20, 45, 0.85);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.25);
  display: grid;
  gap: 0.75rem;
}

[data-theme="light"] .resume-highlight {
  background: rgba(210, 210, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.resume-highlight h3 {
  margin: 0;
  font-size: 1.3rem;
  color: var(--text-primary);
}

.resume-highlight ul {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--text-secondary);
  display: grid;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.resume-actions .btn {
  border-radius: 16px;
}

.resume-note {
  color: var(--text-secondary);
  font-size: 0.95rem;
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

@media (max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .cta-buttons { flex-direction: column; align-items: center; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
  .resume-section { padding: 2.5rem 1.75rem; }
  .resume-header h2 { text-align: center; }
  .resume-content { grid-template-columns: 1fr; }
  .resume-badge-row { justify-content: center; }
  .resume-actions { justify-content: center; text-align: center; }
  .resume-actions .btn { width: 100%; justify-content: center; }
  .resume-note { text-align: center; }
  .hero-stats { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
  .journey-grid { gap: 1.25rem; }
  .contact-grid { grid-template-columns: 1fr; }
}
`;

interface Project {
  title: string;
  img: string;
  desc: string;
  primaryButton: { text: string; href?: string; onClick?: () => void; external?: boolean };
  githubHref?: string;
  tech: string[];
  meta: string;
}

const createProjects = (navigate: ReturnType<typeof useNavigate>): Project[] => [
  {
    title: 'Portfolio Website',
    img: '/website.png',
    desc: 'The site you are on right now — built with React, Vite, TypeScript, and framer-motion.',
    primaryButton: { text: 'View on GitHub', href: 'https://github.com/Mwoods30/Portfolio', external: true },
    githubHref: 'https://github.com/Mwoods30/Portfolio',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    meta: '2024–25 · Personal',
  },
  {
    title: 'Wordle',
    img: '/wordle.png',
    desc: 'Interactive Wordle game with real-time word validation via API.',
    primaryButton: { text: 'Play Wordle', onClick: () => navigate('/wordle') },
    githubHref: 'https://github.com/Mwoods30/Portfolio',
    tech: ['React', 'TypeScript', 'CSS', 'Game Logic'],
    meta: '2024–25 · Game Design',
  },
  {
    title: 'Snake',
    img: '/snake.png',
    desc: 'Classic Snake game built on the Canvas API with smooth modern controls.',
    primaryButton: { text: 'Play Snake', onClick: () => navigate('/snake') },
    githubHref: 'https://github.com/Mwoods30/Portfolio',
    tech: ['React', 'Canvas API', 'TypeScript', 'Game Dev'],
    meta: '2023–24 · Canvas',
  },
  {
    title: 'Tic Tac Toe',
    img: '/tictactoeimg.png',
    desc: 'Play against a friend or a minimax-powered computer AI.',
    primaryButton: { text: 'Play Tic Tac Toe', onClick: () => navigate('/tictactoe') },
    githubHref: 'https://github.com/Mwoods30/Portfolio',
    tech: ['React', 'AI Logic', 'TypeScript', 'Strategy'],
    meta: '2023–24 · AI Logic',
  },
  {
    title: 'ReelQuest',
    img: '/ReelQuest.png',
    desc: 'React fishing game with multiple levels, Firebase backend, and API integration.',
    primaryButton: { text: 'Try it out', href: 'https://reelquest-fishing.web.app', external: true },
    githubHref: 'https://github.com/Mwoods30',
    tech: ['React', 'Firebase', 'JavaScript', 'CSS', 'API'],
    meta: '2025 · Firebase',
  },
];

const heroHighlights = [
  { value: '5+', label: 'Interactive projects launched' },
  { value: '3', label: 'Years crafting digital experiences' },
  { value: '∞', label: 'Curiosity for polished UX' },
];

const skills = [
  {
    id: 'frontend',
    icon: '⚛️',
    title: 'Frontend',
    summary: 'Responsive Design, Testing and Debugging, Accessibility, Cross-Browser Development',
    details: [
      'Responsive design systems for any device',
      'Testing and debugging workflows',
      'Accessibility-focused development',
      'Cross-browser compatibility assurance',
    ],
  },
  {
    id: 'languages',
    icon: '🔧',
    title: 'Languages & Frameworks',
    summary: 'Java, JavaScript, TypeScript, C#, HTML, CSS, Python, React, .NET, Vite',
    details: [
      'Java and C# for strongly typed applications',
      'JavaScript/TypeScript and React for interactive UIs',
      'Python for scripting and prototyping',
      'HTML, CSS, Vite, and .NET for full-stack delivery',
    ],
  },
  {
    id: 'skills',
    icon: '⚙️',
    title: 'Skills',
    summary: 'Git, Problem Solving, Communication, Creativity, Adaptability, UX/UI Knowledge',
    details: [
      'Version control best practices with Git',
      'Collaborative communication across teams',
      'Creative approaches to complex problems',
      'UX/UI-aware implementation and iteration',
    ],
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education',
    summary: 'Computer Science at Rowan University',
    details: [
      'Computer Science studies at Rowan University',
      'Hands-on projects in software development',
      'Continuous learning across emerging technologies',
    ],
  },
];

const resumeHighlights = [
  {
    title: 'What I Focus On',
    points: [
      'Building responsive React interfaces with polished UX',
      'Designing reusable component systems and style guides',
      'Collaborating with cross-functional teammates using Git workflows',
    ],
  },
  {
    title: 'Recent Wins',
    points: [
      'Launched interactive games (Wordle, Snake, Tic Tac Toe) in React + TypeScript',
      'Shipped ReelQuest, a Firebase-backed fishing experience',
      'Migrated portfolio from CRA to Vite with full TypeScript coverage',
    ],
  },
];

const resumeFactTags = ['React 19', 'TypeScript', 'Firebase', 'REST APIs', 'UI/UX'];

const journeyTimeline = [
  {
    period: '2024 – Present',
    title: 'Software Engineering Student',
    org: 'Rowan University CS Department',
    points: [
      'Built React prototypes to support campus research initiatives',
      'Introduced component libraries that cut feature delivery time by 30%',
      'Collaborated with faculty to produce accessible UI patterns',
    ],
  },
  {
    period: '2023 – 2024',
    title: 'Full-Stack Project Lead',
    org: 'Freelance',
    points: [
      'Architected Firebase-backed web apps with real-time data updates',
      'Shipped responsive game experiences (Wordle, Snake, Tic Tac Toe)',
      'Managed deployment pipelines with Netlify and GitHub Actions',
    ],
  },
  {
    period: '2022 – Present',
    title: 'B.S. Computer Science',
    org: 'Rowan University',
    points: [
      'Coursework across algorithms, software engineering, and UX',
      'Led peer coding sessions focused on React and game logic fundamentals',
      'Continuously learning through hackathons and open-source contributions',
    ],
  },
];

const contactChannels = [
  {
    title: "Let's build together",
    detail: 'Pitch a project or product idea and we can collaborate on a roadmap.',
    action: 'Email Matthew',
    href: 'mailto:mattwoods301@gmail.com',
    icon: '📬',
  },
  {
    title: 'Connect on LinkedIn',
    detail: 'Follow my journey, explore posts, and see what I am currently learning.',
    action: 'Message on LinkedIn',
    href: 'https://www.linkedin.com/in/matthew-woods-18b52526b',
    icon: '💼',
  },
  {
    title: 'Explore the code',
    detail: 'Browse repos for games, UI experiments, and full-stack prototypes.',
    action: 'Visit GitHub',
    href: 'https://github.com/Mwoods30',
    icon: '🔗',
  },
  {
    title: 'Challenge me',
    detail: 'Check out my latest problem-solving stats and patterns on LeetCode.',
    action: 'View LeetCode',
    href: 'https://leetcode.com/Mattwoods301/',
    icon: '⚡',
  },
];

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function Home() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null);
  const navigate = useNavigate();
  const projects = createProjects(navigate);

  useEffect(() => {
    if (!selectedSkill) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkill(null);
    };
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = original;
    };
  }, [selectedSkill]);

  return (
    <div>
      <Helmet>
        <title>Matthew Woods | Portfolio</title>
        <meta name="description" content="Matthew Woods — Software Developer & CS student at Rowan University." />
      </Helmet>
      <style>{spaStyles}</style>
      <div className="bg-animation" />

      {/* Hero */}
      <section id="home" className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero-meta">
            <h1>Matthew Woods</h1>
            <p className="hero-subtitle">Software developer & CS student at Rowan University</p>
            <p className="hero-description">
              I build immersive web experiences and interactive games backed by clean architecture, reusable components,
              and user-centered design. Every project is an opportunity to blend accessibility, performance, and joy.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>
                <span>📁</span> Explore Projects
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <span>💬</span> Start a Conversation
              </button>
            </div>
          </div>
          <div className="hero-stats">
            {heroHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="stat-card"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="hero-image">
            <img src="/Coding-Picture.jpeg" alt="Matthew Woods collaborating on code" />
          </div>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Featured Projects
        </motion.h2>
        <p className="section-subtitle">
          A snapshot of the interfaces, games, and product experiments I have built to challenge myself and delight users.
        </p>
        <div className="portfolio-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="project-card"
              custom={idx % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="project-image">
                <img src={proj.img} alt={proj.title} />
              </div>
              <div className="project-meta">
                <h3>{proj.title}</h3>
                {proj.meta && <span>{proj.meta}</span>}
              </div>
              <p>{proj.desc}</p>
              <div className="tech-stack">
                {proj.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {proj.primaryButton.external ? (
                  <a href={proj.primaryButton.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                    {proj.primaryButton.text}
                  </a>
                ) : (
                  <button onClick={proj.primaryButton.onClick} className="btn btn-primary">
                    {proj.primaryButton.text}
                  </button>
                )}
                {proj.githubHref && (
                  <a href={proj.githubHref} target="_blank" rel="noreferrer" className="btn-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Skills & Expertise
        </motion.h2>
        <p className="section-subtitle">
          From component-driven frontends to resilient backends, I focus on delivering experiences that are accessible,
          maintainable, and a pleasure to use.
        </p>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              className={`skill-item${selectedSkill?.id === skill.id ? ' active' : ''}`}
              role="button"
              tabIndex={0}
              custom={idx % 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => setSelectedSkill(skill)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSkill(skill);
                }
              }}
              aria-haspopup="dialog"
              aria-expanded={selectedSkill?.id === skill.id}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedSkill && (
        <motion.div
          className="skill-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`skill-${selectedSkill.id}-title`}
          onClick={() => setSelectedSkill(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="skill-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button type="button" className="close-button" onClick={() => setSelectedSkill(null)} aria-label="Close">
              &times;
            </button>
            <div className="skill-icon">{selectedSkill.icon}</div>
            <h3 id={`skill-${selectedSkill.id}-title`}>{selectedSkill.title}</h3>
            <p>{selectedSkill.summary}</p>
            <ul className="skill-details">
              {selectedSkill.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* Journey */}
      <section id="journey" className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Journey & Impact
        </motion.h2>
        <p className="section-subtitle">
          Highlights from freelance collaborations and the classroom that shaped my engineering mindset.
        </p>
        <div className="journey-timeline">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.title}
              className="timeline-card"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>{item.org}</span>
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <div className="resume-section">
          <div className="resume-content">
            <div className="resume-header">
              <h2>Resume</h2>
              <p className="resume-note">
                Explore the experience, coursework, and project delivery behind the work highlighted above. My resume
                dives deeper into leadership, collaboration, and the technical stack I apply every day.
              </p>
              <div className="resume-badge-row">
                {resumeFactTags.map((tag) => (
                  <span key={tag} className="resume-badge">{tag}</span>
                ))}
              </div>
            </div>
            <div className="resume-highlight-grid">
              {resumeHighlights.map((highlight) => (
                <div key={highlight.title} className="resume-highlight">
                  <h3>{highlight.title}</h3>
                  <ul>
                    {highlight.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="resume-actions">
            <a href="/MatthewWoodsResume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <span>📄</span> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-woods-18b52526b"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💼</span> View LinkedIn
            </a>
            <span className="resume-note">Let&apos;s connect to collaborate on software and UX-driven projects.</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="contact-container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Let&apos;s Work Together
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Share your next challenge — whether it&apos;s a playful product, a data-rich dashboard, or a front-end redesign.
          </p>
          <div className="contact-grid">
            {contactChannels.map((channel, idx) => (
              <motion.div
                key={channel.action}
                className="contact-card"
                custom={idx % 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <strong>{channel.icon} {channel.title}</strong>
                <span>{channel.detail}</span>
                <a
                  href={channel.href}
                  className="contact-button"
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {channel.action}
                </a>
              </motion.div>
            ))}
          </div>
          <p className="contact-note">Prefer a different platform? I am always open to a quick intro call or async brainstorm.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
