
import './App.css';
import Home from './pages/Home';
import Wordle from './pages/Wordle';
import Snake from './pages/Snake';
import Tictactoe from './pages/Tictactoe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/wordle') setCurrentPage('wordle');
      else if (path === '/snake') setCurrentPage('snake');
      else if (path === '/tictactoe') setCurrentPage('tictactoe');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check initial path

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate to a page
  const navigateToPage = (page) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
  };

  // Make navigation function available globally
  useEffect(() => {
    window.navigateToPage = navigateToPage;
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'wordle':
        return <Wordle />;
      case 'snake':
        return <Snake />;
      case 'tictactoe':
        return <Tictactoe />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;


