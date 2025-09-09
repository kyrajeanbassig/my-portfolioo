import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Educational from './components/Educational/Educational';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Profile />
      <About />
      <Educational /> 
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
