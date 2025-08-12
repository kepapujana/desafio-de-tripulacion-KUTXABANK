// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/Home';
import Subscriptions from './routes/Subscriptions';
import Profile from './routes/Profile';
import Nav from './components/header/Nav';
import Login from './routes/Login';
import Menu from '../src/Menu/Menu';
import '../src/style/index.css';

function App() {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <BrowserRouter>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/perfile" element={<Profile />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
