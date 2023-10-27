import './App.css';
import { Routes,Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { PokemonList } from './components/Pokemon/PokemonList';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route exact path="/" element={<PokemonList/>}/>
      </Routes>
    </div>
  );
}

export default App;
