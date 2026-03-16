import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants, useInView } from 'framer-motion';

// ─── CSS ─────────────────────────────────────────────────────────────────────

const homeStyles = `
/* ── CSS variables ── */
:root {
  --bg: #060914;
  --bg-1: #0a0f1e;
  --bg-2: #0d1428;
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(99,102,241,0.5);
  --text-1: #f1f5f9;
  --text-2: #94a3b8;
  --text-3: #475569;
  --accent: #6366f1;
  --accent-light: #818cf8;
  --purple: #a855f7;
  --cyan: #22d3ee;
  --green: #4ade80;
  --gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
}

[data-theme="light"] {
  --bg: #f8fafc;
  --bg-1: #f1f5f9;
  --bg-2: #e2e8f0;
  --border: rgba(0,0,0,0.06);
  --border-hover: rgba(99,102,241,0.5);
  --text-1: #0f172a;
  --text-2: #475569;
  --text-3: #94a3b8;
}

/* ── Base ── */
.home {
  background: var(--bg);
  color: var(--text-1);
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
}

/* ── Keyframes ── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
}

@keyframes orb-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -60px) scale(1.08); }
}

@keyframes orb-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, 40px) scale(0.95); }
}

/* ── Shared section wrapper ── */
.section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  background: linear-gradient(135deg, var(--text-1) 0%, var(--text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
}

.section-sub {
  color: var(--text-2);
  font-size: 1.05rem;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

[data-theme="light"] .hero-bg {
  background-image: radial-gradient(rgba(99,102,241,0.08) 1px, transparent 1px);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.hero-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
  top: -100px;
  left: -150px;
  animation: orb-float-1 18s ease-in-out infinite;
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
  bottom: 0;
  right: -100px;
  animation: orb-float-2 22s ease-in-out infinite;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── Hero text ── */
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.available-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  width: fit-content;
  font-family: 'JetBrains Mono', monospace;
}

[data-theme="light"] .available-badge {
  background: rgba(74,222,128,0.06);
  border-color: rgba(74,222,128,0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

.hero-h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .hero-h1 {
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #818cf8;
  min-height: 2rem;
}

.role-text {
  color: #818cf8;
}

.cursor {
  color: #6366f1;
  animation: blink 1s step-end infinite;
  font-weight: 400;
}

.hero-bio {
  color: var(--text-2);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 480px;
  margin: 0;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: #fff;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(99,102,241,0.3);
  letter-spacing: 0.01em;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99,102,241,0.45);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-1);
  border: 1px solid var(--border-hover);
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
}

.btn-outline:hover {
  background: rgba(99,102,241,0.08);
  border-color: #6366f1;
  color: #818cf8;
}

/* ── Code window ── */
.hero-code {
  position: relative;
  z-index: 1;
}

.code-window {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.2), 0 24px 64px rgba(0,0,0,0.5);
  overflow: hidden;
  transform: rotate(1.5deg);
  transition: transform 0.3s ease;
}

.code-window:hover {
  transform: rotate(0deg);
}

.code-window-bar {
  background: #161b22;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dots span:nth-child(1) { background: #ff5f57; }
.dots span:nth-child(2) { background: #febc2e; }
.dots span:nth-child(3) { background: #28c840; }

.code-window-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #6b7280;
  margin-left: auto;
  margin-right: auto;
}

.code-body {
  padding: 1.5rem;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.8;
  color: #e2e8f0;
  overflow: auto;
  background: transparent;
}

.code-kw { color: #569CD6; }
.code-str { color: #CE9178; }
.code-prop { color: #9CDCFE; }
.code-punct { color: #94a3b8; }
.code-val-t { color: #4EC9B0; }
.code-arr { color: #c586c0; }
.code-comment { color: #6A9955; font-style: italic; }
.code-num { color: #b5cea8; }
.code-email { color: #CE9178; }

/* ── Hero stats ── */
.hero-stats {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 2.5rem;
  margin-top: 3.5rem;
  padding: 2rem 2.5rem;
  background: rgba(13, 20, 40, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  width: 100%;
  max-width: 1200px;
}

[data-theme="light"] .hero-stats {
  background: rgba(241, 245, 249, 0.8);
  border-color: rgba(0,0,0,0.08);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.stat-item + .stat-item {
  border-left: 1px solid var(--border);
  padding-left: 2.5rem;
}

.stat-item strong {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  line-height: 1;
}

.stat-item span {
  color: var(--text-2);
  font-size: 0.85rem;
  font-weight: 500;
}

/* ── Projects section ── */
.projects-section {
  background: var(--bg-1);
}

.projects-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Featured project */
.proj-featured {
  display: grid;
  grid-template-columns: 45% 55%;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg-2);
  overflow: hidden;
  margin-bottom: 2.5rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.proj-featured:hover {
  border-color: var(--border-hover);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
}

.proj-featured-img {
  position: relative;
  overflow: hidden;
}

.proj-featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.proj-featured:hover .proj-featured-img img {
  transform: scale(1.04);
}

.proj-featured-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.proj-featured:hover .proj-featured-img::after {
  opacity: 1;
}

.proj-featured-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
}

.proj-badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.proj-featured-badge {
  background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%);
  border: 1px solid rgba(99,102,241,0.3);
  color: #818cf8;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
}

.proj-year-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-3);
}

.proj-featured-content h3 {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  color: var(--text-1);
  line-height: 1.2;
}

.proj-subtitle {
  font-size: 0.9rem;
  color: var(--text-2);
  margin: -0.5rem 0 0;
  font-style: italic;
}

.proj-featured-content p {
  color: var(--text-2);
  line-height: 1.7;
  font-size: 0.97rem;
  margin: 0;
}

.proj-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  color: #818cf8;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.tech-pill:hover {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.4);
}

[data-theme="light"] .tech-pill {
  background: rgba(99,102,241,0.06);
  color: #6366f1;
}

.proj-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: var(--text-2);
  border: 1px solid var(--border);
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--border-hover);
  color: var(--text-1);
  background: rgba(99,102,241,0.06);
}

/* Project grid */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.proj-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.proj-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
}

.proj-card-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.proj-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.proj-card:hover .proj-card-img img {
  transform: scale(1.05);
}

.proj-card-year {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(6, 9, 20, 0.85);
  color: var(--text-2);
  font-size: 0.72rem;
  font-family: 'JetBrains Mono', monospace;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

[data-theme="light"] .proj-card-year {
  background: rgba(248, 250, 252, 0.9);
  color: var(--text-2);
}

.proj-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.proj-card-body h3 {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--text-1);
}

.proj-card-body .proj-subtitle {
  font-size: 0.82rem;
  color: var(--text-3);
  margin: -0.35rem 0 0;
  font-style: normal;
  font-weight: 500;
}

.proj-card-body p {
  color: var(--text-2);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

/* ── Skills section ── */
.skills-section {
  background: var(--bg);
}

.skills-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.skills-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: var(--border-hover);
}

.skill-category-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.skill-category-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skill-category-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-pill {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  color: var(--text-2);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.skill-pill:hover {
  background: rgba(99,102,241,0.1);
  border-color: rgba(99,102,241,0.35);
  color: var(--text-1);
}

[data-theme="light"] .skill-pill {
  background: rgba(0,0,0,0.03);
  color: var(--text-2);
}

[data-theme="light"] .skill-pill:hover {
  background: rgba(99,102,241,0.06);
}

/* Terminal window */
.terminal-window {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.45);
  overflow: hidden;
  position: sticky;
  top: 6rem;
}

.terminal-bar {
  background: #161b22;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.terminal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: #6b7280;
  margin: 0 auto;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 2;
  color: #e2e8f0;
}

.t-prompt { color: #4ade80; }
.t-cmd { color: #818cf8; }
.t-out { color: #94a3b8; margin-left: 0.5rem; }
.t-highlight { color: #22d3ee; }
.t-string { color: #CE9178; }
.t-blank { display: block; height: 0.5rem; }

/* ── Skill modal ── */
.skill-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 9, 20, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 1.5rem;
}

[data-theme="light"] .skill-overlay {
  background: rgba(15, 23, 42, 0.7);
}

.skill-modal {
  background: var(--bg-2);
  border-radius: 20px;
  border: 1px solid var(--border-hover);
  padding: 2.5rem;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2);
  position: relative;
  text-align: center;
}

.skill-modal-icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
  display: block;
}

.skill-modal h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.03em;
}

.skill-modal p {
  color: var(--text-2);
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.65;
}

.skill-details {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: left;
}

.skill-details li {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(99,102,241,0.06);
  border: 1px solid rgba(99,102,241,0.15);
  color: var(--text-2);
  font-size: 0.9rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.skill-details li::before {
  content: '▸';
  color: #6366f1;
  flex-shrink: 0;
  margin-top: 0.05rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-2);
  font-size: 1.1rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 1;
}

.close-btn:hover {
  background: rgba(99,102,241,0.15);
  color: var(--text-1);
  border-color: var(--border-hover);
}

/* ── Timeline ── */
.timeline-section {
  background: var(--bg-1);
}

.timeline-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 2.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #6366f1 0%, #a855f7 50%, rgba(168,85,247,0.2) 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding: 0 0 3rem 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 0.35rem;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 50%;
  border: 2px solid var(--bg-1);
  transform: translateX(-5px);
  box-shadow: 0 0 12px rgba(99,102,241,0.5);
}

.timeline-period {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--cyan);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.timeline-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
  transition: border-color 0.25s ease;
}

.timeline-card:hover {
  border-color: var(--border-hover);
}

.timeline-role {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-1);
  letter-spacing: -0.02em;
  margin: 0 0 0.3rem 0;
}

.timeline-org {
  font-size: 0.9rem;
  color: #818cf8;
  font-weight: 600;
  margin: 0 0 1rem 0;
  font-family: 'JetBrains Mono', monospace;
}

.timeline-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-points li {
  color: var(--text-2);
  font-size: 0.9rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.timeline-points li::before {
  content: '→';
  color: #6366f1;
  flex-shrink: 0;
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

/* ── Resume section ── */
.resume-section {
  background: var(--bg);
}

.resume-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.resume-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  position: relative;
  overflow: hidden;
}

.resume-card::before {
  content: '';
  position: absolute;
  top: -60%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.resume-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.resume-left h2 {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, var(--text-1) 0%, var(--text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resume-note {
  color: var(--text-2);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.resume-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.resume-tag {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  color: #818cf8;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
}

.resume-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.resume-right {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
}

.resume-highlight {
  background: rgba(99,102,241,0.04);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s ease;
}

.resume-highlight:hover {
  border-color: var(--border-hover);
}

.resume-highlight h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.01em;
}

.resume-highlight ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.resume-highlight li {
  color: var(--text-2);
  font-size: 0.88rem;
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}

.resume-highlight li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #6366f1;
  font-weight: 700;
}

/* ── Contact section ── */
.contact-section {
  background: var(--bg-1);
}

.contact-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-heading {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 1.25rem 0;
  background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .contact-heading {
  background: linear-gradient(135deg, #0f172a 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.contact-sub {
  color: var(--text-2);
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

.contact-cta-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.contact-channels {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  text-align: left;
}

.contact-channel {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  text-decoration: none;
}

.contact-channel:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.25);
}

.contact-channel-icon {
  width: 40px;
  height: 40px;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-channel-icon svg {
  width: 20px;
  height: 20px;
  fill: #818cf8;
}

.contact-channel-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0;
}

.contact-channel-desc {
  font-size: 0.85rem;
  color: var(--text-2);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.contact-channel-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #818cf8;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.contact-channel:hover .contact-channel-link {
  color: #6366f1;
}

.contact-note {
  margin-top: 3rem;
  color: var(--text-3);
  font-size: 0.875rem;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .hero-text {
    align-items: center;
  }
  .hero-bio {
    max-width: 100%;
    text-align: left;
  }
  .hero-cta {
    justify-content: center;
  }
  .code-window {
    transform: none;
    max-width: 480px;
    margin: 0 auto;
  }
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  .stat-item + .stat-item {
    border-left: none;
    border-top: 1px solid var(--border);
    padding-left: 0;
    padding-top: 1.5rem;
  }
  .proj-featured {
    grid-template-columns: 1fr;
  }
  .proj-featured-img {
    height: 240px;
  }
  .skills-layout {
    grid-template-columns: 1fr;
  }
  .terminal-window {
    position: static;
  }
  .resume-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  .resume-left h2 {
    text-align: center;
  }
  .resume-tags {
    justify-content: center;
  }
  .resume-btns {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 4rem 1.25rem;
  }
  .projects-section-inner,
  .skills-section-inner,
  .timeline-section-inner,
  .resume-section-inner,
  .contact-section-inner {
    padding: 4rem 1.25rem;
  }
  .proj-grid {
    grid-template-columns: 1fr;
  }
  .contact-channels {
    grid-template-columns: 1fr;
  }
}
`;

// ─── Typing animation ─────────────────────────────────────────────────────────

function useTypingAnimation(words: string[], speed = 80, pause = 2000) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return words[wordIdx].slice(0, charIdx);
}

// ─── AnimatedCounter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      color: '#22d3ee', fontSize: '0.75rem', fontWeight: 600,
      letterSpacing: '0.15em', textTransform: 'uppercase',
      marginBottom: '1rem', fontFamily: "'JetBrains Mono', monospace",
    }}>
      <span style={{ width: 20, height: 1, background: '#22d3ee', display: 'inline-block' }} />
      {children}
      <span style={{ width: 20, height: 1, background: '#22d3ee', display: 'inline-block' }} />
    </div>
  );
}

// ─── fadeUp variant ───────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROLES = ['Software Developer', 'React Engineer', 'CS Student @ Rowan', 'Problem Solver', 'UI/UX Enthusiast'];

const techStack = [
  { category: 'Languages', color: '#6366f1', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#', 'HTML', 'CSS'] },
  { category: 'Frameworks & Libraries', color: '#a855f7', items: ['React', 'Vite', '.NET', 'Framer Motion'] },
  { category: 'Tools & Platforms', color: '#22d3ee', items: ['Git', 'GitHub', 'Firebase', 'Netlify', 'VS Code'] },
  { category: 'Concepts', color: '#4ade80', items: ['REST APIs', 'Responsive Design', 'Accessibility', 'Game Dev', 'UI/UX', 'Agile'] },
];

const stats = [
  { value: 5, suffix: '+', label: 'Projects Shipped' },
  { value: 3, suffix: '', label: 'Years Coding' },
  { value: 100, suffix: '%', label: 'TypeScript Coverage' },
];

const timeline = [
  {
    period: '2024 – Present',
    role: 'Software Engineering Student',
    org: 'Rowan University CS Dept',
    points: [
      'Built React prototypes for campus research initiatives',
      'Introduced component libraries cutting delivery time by 30%',
      'Collaborated with faculty on accessible UI patterns',
    ],
  },
  {
    period: '2023 – 2024',
    role: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    points: [
      'Architected Firebase web apps with real-time data',
      'Shipped ReelQuest, a production fishing game to Firebase hosting',
      'Managed CI/CD pipelines with Netlify and GitHub Actions',
    ],
  },
  {
    period: '2022 – Present',
    role: 'B.S. Computer Science',
    org: 'Rowan University',
    points: [
      'Core coursework: algorithms, software engineering, UX design',
      'Led peer coding sessions focused on React and game logic',
      'Active in hackathons and open-source contributions',
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

const resumeTags = ['React 19', 'TypeScript', 'Firebase', 'REST APIs', 'UI/UX'];

const skillCards = [
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

// ─── Inline SVGs for contact ───────────────────────────────────────────────────

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const contactChannels = [
  {
    title: "Email Me",
    desc: "Pitch a project or product idea and we can collaborate on a roadmap.",
    action: "mattwoods301@gmail.com",
    href: "mailto:mattwoods301@gmail.com",
    Icon: EmailIcon,
  },
  {
    title: "LinkedIn",
    desc: "Follow my journey, explore posts, and see what I am currently learning.",
    action: "matthew-woods-18b52526b",
    href: "https://www.linkedin.com/in/matthew-woods-18b52526b",
    Icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    desc: "Browse repos for games, UI experiments, and full-stack prototypes.",
    action: "Mwoods30",
    href: "https://github.com/Mwoods30",
    Icon: GithubIcon,
  },
  {
    title: "LeetCode",
    desc: "Check out my latest problem-solving stats and patterns.",
    action: "Mattwoods301",
    href: "https://leetcode.com/Mattwoods301/",
    Icon: LeetcodeIcon,
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

function Home() {
  const navigate = useNavigate();
  const role = useTypingAnimation(ROLES);
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCards[0] | null>(null);

  // Projects defined inside component to access navigate
  const projects = [
    {
      id: 'reelquest',
      title: 'ReelQuest',
      subtitle: 'Full-stack fishing game',
      img: '/ReelQuest.png',
      desc: 'A Firebase-backed fishing game with multiple levels, real-time leaderboards, and API integration. Built with React and deployed to production.',
      primaryButton: { text: 'Live Demo', href: 'https://reelquest-fishing.web.app', external: true as const },
      githubHref: 'https://github.com/Mwoods30',
      tech: ['React', 'Firebase', 'JavaScript', 'CSS', 'REST API'],
      year: '2025',
      featured: true,
    },
    {
      id: 'portfolio',
      title: 'This Portfolio',
      subtitle: 'Personal portfolio website',
      img: '/website.png',
      desc: 'Built from scratch with Vite, React 19, TypeScript, and framer-motion. Migrated from CRA, added React Router, dark/light mode, and full TypeScript coverage.',
      primaryButton: { text: 'View Source', href: 'https://github.com/Mwoods30/Portfolio', external: true as const },
      githubHref: 'https://github.com/Mwoods30/Portfolio',
      tech: ['React', 'TypeScript', 'Vite', 'framer-motion'],
      year: '2024–25',
      featured: false,
    },
    {
      id: 'wordle',
      title: 'Wordle Lab',
      subtitle: 'Word game with live API',
      img: '/wordle.png',
      desc: 'A Wordle clone with real-time word validation via API, puzzle numbering, and elegant color-coded feedback.',
      primaryButton: { text: 'Play Now', onClick: () => navigate('/wordle'), external: false as const },
      githubHref: 'https://github.com/Mwoods30/Portfolio',
      tech: ['React', 'TypeScript', 'REST API'],
      year: '2024–25',
      featured: false,
    },
    {
      id: 'snake',
      title: 'Snake',
      subtitle: 'Canvas-based game',
      img: '/snake.png',
      desc: 'Classic Snake built on the HTML5 Canvas API with touch support and smooth controls.',
      primaryButton: { text: 'Play Now', onClick: () => navigate('/snake'), external: false as const },
      githubHref: 'https://github.com/Mwoods30/Portfolio',
      tech: ['React', 'Canvas API', 'TypeScript'],
      year: '2023–24',
      featured: false,
    },
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      subtitle: 'AI-powered strategy game',
      img: '/tictactoeimg.png',
      desc: 'Play against a friend or challenge a minimax AI. Smart blocking, winning detection, and clean UI.',
      primaryButton: { text: 'Play Now', onClick: () => navigate('/tictactoe'), external: false as const },
      githubHref: 'https://github.com/Mwoods30/Portfolio',
      tech: ['React', 'TypeScript', 'AI Logic'],
      year: '2023–24',
      featured: false,
    },
  ];

  const featuredProject = projects.find(p => p.featured)!;
  const gridProjects = projects.filter(p => !p.featured);

  // Escape key + body lock for skill modal
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="home">
      <Helmet>
        <title>Matthew Woods | Portfolio</title>
        <meta name="description" content="Matthew Woods — Software Developer & CS student at Rowan University. Building React apps, games, and interactive experiences." />
      </Helmet>
      <style>{homeStyles}</style>

      {/* ── Hero ── */}
      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-inner">
          {/* Left: text */}
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <div className="available-badge">
                <span className="status-dot" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1 className="hero-h1" variants={fadeUp} custom={1}>
              Matthew<br />Woods
            </motion.h1>

            <motion.div className="hero-role" variants={fadeUp} custom={2}>
              <span className="role-text">{role}</span>
              <span className="cursor">|</span>
            </motion.div>

            <motion.p className="hero-bio" variants={fadeUp} custom={3}>
              I build responsive web applications and interactive experiences with React, TypeScript, and Firebase.
              CS student at Rowan University — passionate about clean architecture, accessible design, and delightful UX.
            </motion.p>

            <motion.div className="hero-cta" variants={fadeUp} custom={4}>
              <button className="btn-primary" onClick={() => scrollTo('portfolio')}>
                View Projects
              </button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right: code window */}
          <motion.div
            className="hero-code"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="code-window">
              <div className="code-window-bar">
                <div className="dots">
                  <span /><span /><span />
                </div>
                <span className="code-window-title">developer.ts</span>
              </div>
              <pre className="code-body">{/* prettier-ignore */
                <><span className="code-kw">const</span>{' '}<span className="code-prop">developer</span>{' '}<span className="code-punct">= {'{'}</span>{'\n'}
<span className="code-prop">  name</span><span className="code-punct">:</span>{' '}<span className="code-str">"Matthew Woods"</span><span className="code-punct">,</span>{'\n'}
<span className="code-prop">  role</span><span className="code-punct">:</span>{' '}<span className="code-str">"Software Developer"</span><span className="code-punct">,</span>{'\n'}
<span className="code-prop">  stack</span><span className="code-punct">:</span>{' '}<span className="code-arr">[</span><span className="code-str">"React"</span><span className="code-punct">,</span>{' '}<span className="code-str">"TypeScript"</span><span className="code-punct">,</span>{' '}<span className="code-str">"Firebase"</span><span className="code-arr">]</span><span className="code-punct">,</span>{'\n'}
<span className="code-prop">  university</span><span className="code-punct">:</span>{' '}<span className="code-str">"Rowan University"</span><span className="code-punct">,</span>{'\n'}
<span className="code-prop">  available</span><span className="code-punct">:</span>{' '}<span className="code-val-t">true</span><span className="code-punct">,</span>{'\n'}
<span className="code-prop">  contact</span><span className="code-punct">:</span>{' '}<span className="code-email">"mattwoods301@gmail.com"</span><span className="code-punct">,</span>{'\n'}
<span className="code-punct">{'}'}</span><span className="code-punct">;</span>{'\n'}
{'\n'}
<span className="code-comment">// Currently: building cool things</span>{'\n'}
<span className="code-kw">export</span>{' '}<span className="code-kw">default</span>{' '}<span className="code-prop">developer</span><span className="code-punct">;</span></>
              }</pre>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {stats.map((s, i) => (
            <div className="stat-item" key={s.label}>
              <strong><AnimatedCounter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Projects ── */}
      <section id="portfolio" className="projects-section">
        <div className="projects-section-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>My Work</SectionLabel>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-sub">
              A collection of interfaces, games, and full-stack apps built to challenge myself and create delightful user experiences.
            </p>
          </motion.div>

          {/* Featured card */}
          <motion.div
            className="proj-featured"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="proj-featured-img">
              <img src={featuredProject.img} alt={featuredProject.title} />
            </div>
            <div className="proj-featured-content">
              <div className="proj-badge-row">
                <span className="proj-featured-badge">Featured</span>
                <span className="proj-year-badge">{featuredProject.year}</span>
              </div>
              <div>
                <h3>{featuredProject.title}</h3>
                <p className="proj-subtitle">{featuredProject.subtitle}</p>
              </div>
              <p>{featuredProject.desc}</p>
              <div className="proj-tech-row">
                {featuredProject.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
              </div>
              <div className="proj-actions">
                <a
                  href={featuredProject.primaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {featuredProject.primaryButton.text}
                </a>
                <a
                  href={featuredProject.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="proj-grid">
            {gridProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                className="proj-card"
                custom={idx % 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="proj-card-img">
                  <img src={proj.img} alt={proj.title} />
                  <span className="proj-card-year">{proj.year}</span>
                </div>
                <div className="proj-card-body">
                  <h3>{proj.title}</h3>
                  <p className="proj-subtitle">{proj.subtitle}</p>
                  <p>{proj.desc}</p>
                  <div className="proj-tech-row">
                    {proj.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
                  </div>
                  <div className="proj-actions" style={{ marginTop: '0.5rem' }}>
                    {proj.primaryButton.external ? (
                      <a
                        href={proj.primaryButton.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
                      >
                        {proj.primaryButton.text}
                      </a>
                    ) : (
                      <button
                        className="btn-primary"
                        onClick={proj.primaryButton.onClick}
                        style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
                      >
                        {proj.primaryButton.text}
                      </button>
                    )}
                    <a
                      href={proj.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="skills-section">
        <div className="skills-section-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Skills</SectionLabel>
            <h2 className="section-heading">Tech Stack</h2>
            <p className="section-sub">
              From component-driven frontends to resilient backends — I focus on delivering experiences that are accessible,
              maintainable, and a pleasure to use. Click any card for details.
            </p>
          </motion.div>

          <div className="skills-layout">
            {/* Left: categories */}
            <div className="skills-stack">
              {techStack.map((cat, ci) => (
                <motion.div
                  key={cat.category}
                  className="skill-category"
                  custom={ci}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="skill-category-header">
                    <span className="skill-category-dot" style={{ background: cat.color }} />
                    <span className="skill-category-label" style={{ color: cat.color }}>{cat.category}</span>
                  </div>
                  <div className="skill-pills">
                    {cat.items.map(item => (
                      <span className="skill-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Clickable skill cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
              >
                <p style={{ color: 'var(--text-3)', fontSize: '0.8rem', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em' }}>
                  // Click to explore details
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {skillCards.map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        padding: '1rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(99,102,241,0.5)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ fontSize: '1.6rem', marginBottom: '0.35rem' }}>{skill.icon}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.25rem' }}>{skill.title}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{skill.summary.split(',')[0].trim()}…</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: terminal */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="dots">
                    <span /><span /><span />
                  </div>
                  <span className="terminal-title">terminal</span>
                </div>
                <div className="terminal-body">
                  <div>
                    <span className="t-prompt">~</span>{' '}
                    <span className="t-cmd">whoami</span>
                  </div>
                  <div className="t-out">
                    <span className="t-highlight">Matthew Woods</span>
                    {' '}— Software Developer
                  </div>
                  <span className="t-blank" />
                  <div>
                    <span className="t-prompt">~</span>{' '}
                    <span className="t-cmd">cat skills.json</span>
                  </div>
                  <div className="t-out">
                    {`{`}
                  </div>
                  <div className="t-out">
                    {'  '}<span className="t-highlight">"frontend"</span>{': '}
                    <span className="t-string">["React", "TypeScript", "Vite"]</span>{','}
                  </div>
                  <div className="t-out">
                    {'  '}<span className="t-highlight">"backend"</span>{': '}
                    <span className="t-string">["Firebase", "REST APIs"]</span>{','}
                  </div>
                  <div className="t-out">
                    {'  '}<span className="t-highlight">"languages"</span>{': '}
                    <span className="t-string">["JS", "TS", "Java", "Python", "C#"]</span>
                  </div>
                  <div className="t-out">{`}`}</div>
                  <span className="t-blank" />
                  <div>
                    <span className="t-prompt">~</span>{' '}
                    <span className="t-cmd">git log --oneline -3</span>
                  </div>
                  <div className="t-out">
                    <span style={{ color: '#f59e0b' }}>a41c282</span>
                    {' '}Migrate portfolio to Vite + TypeScript
                  </div>
                  <div className="t-out">
                    <span style={{ color: '#f59e0b' }}>e7f3b12</span>
                    {' '}Add framer-motion scroll animations
                  </div>
                  <div className="t-out">
                    <span style={{ color: '#f59e0b' }}>45d1a49</span>
                    {' '}Ship ReelQuest to Firebase hosting
                  </div>
                  <span className="t-blank" />
                  <div>
                    <span className="t-prompt">~</span>{' '}
                    <span className="t-cmd">npm run build</span>
                  </div>
                  <div className="t-out">
                    <span className="t-highlight">✓</span>
                    {' '}Build complete in <span style={{ color: '#f59e0b' }}>1.4s</span>
                  </div>
                  <div className="t-out">
                    <span className="t-highlight">✓</span>
                    {' '}0 TypeScript errors
                  </div>
                  <span className="t-blank" />
                  <div>
                    <span className="t-prompt">~</span>{' '}
                    <span className="t-cmd" style={{ animation: 'blink 1s step-end infinite' }}>_</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill modal */}
      {selectedSkill && (
        <motion.div
          className="skill-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`skill-modal-${selectedSkill.id}`}
          onClick={() => setSelectedSkill(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="skill-modal"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28 }}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setSelectedSkill(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <span className="skill-modal-icon">{selectedSkill.icon}</span>
            <h3 id={`skill-modal-${selectedSkill.id}`}>{selectedSkill.title}</h3>
            <p>{selectedSkill.summary}</p>
            <ul className="skill-details">
              {selectedSkill.details.map(detail => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* ── Journey / Timeline ── */}
      <section id="journey" className="timeline-section">
        <div className="timeline-section-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Journey</SectionLabel>
            <h2 className="section-heading">Experience & Education</h2>
            <p className="section-sub">
              Highlights from freelance work, research, and the coursework that shaped my engineering mindset.
            </p>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.role}
                className="timeline-item"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="timeline-dot" />
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-card">
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <ul className="timeline-points">
                    {item.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resume ── */}
      <section id="resume" className="resume-section">
        <div className="resume-section-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Resume</SectionLabel>
          </motion.div>

          <motion.div
            className="resume-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="resume-left">
              <h2>Download My Resume</h2>
              <p className="resume-note">
                Explore the experience, coursework, and project delivery behind the work highlighted above.
                My resume dives deeper into leadership, collaboration, and the technical stack I apply every day.
              </p>
              <div className="resume-tags">
                {resumeTags.map(tag => (
                  <span key={tag} className="resume-tag">{tag}</span>
                ))}
              </div>
              <div className="resume-btns">
                <a
                  href="/MatthewWoodsResume.pdf"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 2 }}>
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-woods-18b52526b"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn
                </a>
              </div>
              <p style={{ color: 'var(--text-3)', fontSize: '0.82rem', marginTop: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                // Open to full-time & internship roles
              </p>
            </div>

            <div className="resume-right">
              {resumeHighlights.map(highlight => (
                <div key={highlight.title} className="resume-highlight">
                  <h3>{highlight.title}</h3>
                  <ul>
                    {highlight.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact-section">
        <div className="contact-section-inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Contact</SectionLabel>
            <h2 className="contact-heading">Let&apos;s Work Together</h2>
            <p className="contact-sub">
              Open to new opportunities, collaborations, and interesting problems.
              Whether it&apos;s a full-time role, freelance project, or just a chat — I&apos;d love to connect.
            </p>
            <div className="contact-cta-row">
              <a href="mailto:mattwoods301@gmail.com" className="btn-primary">
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-woods-18b52526b"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <div className="contact-channels">
            {contactChannels.map((ch, idx) => (
              <motion.a
                key={ch.title}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-channel"
                custom={idx % 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="contact-channel-icon">
                  <ch.Icon />
                </div>
                <p className="contact-channel-title">{ch.title}</p>
                <p className="contact-channel-desc">{ch.desc}</p>
                <span className="contact-channel-link">
                  {ch.action} <ArrowIcon />
                </span>
              </motion.a>
            ))}
          </div>

          <p className="contact-note">
            Prefer a different platform? I&apos;m always open to a quick intro call or async brainstorm.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
