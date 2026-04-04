import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/context/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-testid="toggle">
      {theme}
    </button>
  );
}

describe('ThemeContext', () => {
  it('defaults to dark theme', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByTestId('toggle')).toHaveTextContent('dark');
  });

  it('toggles between dark and light', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const btn = screen.getByTestId('toggle');
    fireEvent.click(btn);
    expect(btn).toHaveTextContent('light');
    fireEvent.click(btn);
    expect(btn).toHaveTextContent('dark');
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('toggle'));
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('sets data-theme attribute on document root', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('toggle'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
