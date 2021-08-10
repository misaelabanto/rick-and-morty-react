import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { CharacterCard } from './components/CharacterCard/CharacterCard';

function App() {
  return (
    <div className="App">
      <AppBar />
      <CharacterCard />
    </div>
  );
}

export default App;
