import HomeTrainer from './components/HomeTrainer';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokedexDetail from './components/PokedexDetail';
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeTrainer />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:name" element={<PokedexDetail />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
