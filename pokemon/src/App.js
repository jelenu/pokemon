import './App.css';
import { Routes,Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { PokemonList } from './components/Pokemon/PokemonList';
import { PokemonDetail } from './components/Pokemon/PokemonDetail';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route exact path="/" element={<PokemonList/>}/>
      <Route exact path="/:pokemonName" element={<PokemonDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
