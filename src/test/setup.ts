/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});
