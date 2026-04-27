import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@/context/ThemeContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './App.css';

const Home = lazy(() => import('@/pages/Home'));
const Wordle = lazy(() => import('@/pages/Wordle'));
const Snake = lazy(() => import('@/pages/Snake'));
const Tictactoe = lazy(() => import('@/pages/Tictactoe'));
const SquareSprint = lazy(() => import('@/pages/SquareSprint'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/wordle" element={<Wordle />} />
                  <Route path="/snake" element={<Snake />} />
                  <Route path="/tictactoe" element={<Tictactoe />} />
                  <Route path="/square-sprint" element={<SquareSprint />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
