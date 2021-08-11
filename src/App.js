import './App.css';
import { useState, useEffect } from 'react';
import { AppBar } from './components/AppBar/AppBar';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import { CharacterService } from './services/CharacterService';
import { PaginationButton } from './components/PaginationButton/PaginationButton';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ page, setPage] = useState(1);
  let totalPages = 0;

  const fetchCharacters = async () => {
    const charactersResponse = await CharacterService.getCharacters(page);
    console.log(charactersResponse, totalPages);
    totalPages = charactersResponse.info.pages;
    setCharacters(charactersResponse.results);
  }

  const fetchNextPage = async () => {
    if(page < totalPages) {
      setPage(page + 1);
      await fetchCharacters();
    }
  }
  
  const fetchPreviousPage = async () => {
    if(page > 1) {
      setPage(page - 1);
      await fetchCharacters();
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [page])

  return (
    <div className="App">
      <AppBar />
      <div className="grid grid-cols-3 gap-4">
        {
          characters.map(character => {
            const parsedCharacter = {
              ...character,
              origin: character.origin.name
            }
            return (
              <CharacterCard key={parsedCharacter.name} {...parsedCharacter}/>
            )
          })
        }
      </div>
      <div className="flex justify-between">
        <PaginationButton onClick={fetchPreviousPage}>Anterior</PaginationButton>
        <PaginationButton onClick={fetchNextPage}>Siguiente</PaginationButton>
      </div>
    </div>
  );
}

export default App;
