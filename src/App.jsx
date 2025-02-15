import  { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/App.css'; // Import the CSS file
import Header from './components/Header';
import Footer from './components/Footer';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='App container' id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
          <Outlet />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;