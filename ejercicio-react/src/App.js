import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  },[])
  return (
    <>
      <h1>Rick and morty</h1>
      <Gallery
        characters_={characters}          
      ></Gallery>
    </>
  );
}

export default App;