import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from './hooks/ThemeProvider';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`${darkMode ? "bg-dark para-dark" : "bg-light para-light"}`}>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/gallery' element={<Gallery></Gallery>}/>
          <Route
            exact
            path='/contact-form'
            element={<ContactForm></ContactForm>}
          />
        </Routes>        
      </Router>
    </div>
    
  );
}

export default App;
