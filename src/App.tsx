import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Wordle from './pages/Wordle';
import Snake from './pages/Snake';
import Tictactoe from './pages/Tictactoe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wordle" element={<Wordle />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/tictactoe" element={<Tictactoe />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
