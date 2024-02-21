import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import AllHeroes from './pages/AllHeroes';
import Hero from './pages/Hero';
import Team from './pages/Team';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app">
       <div className="wrapper">
        <Router>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<AllHeroes />} />
            <Route path={"/:id"} element={<Hero/>} />
            <Route path={"/team"} element={<Team/>} />
          </Routes>
        </Router>
        </div>
        <footer>Data provided by Marvel. © 2014 Marvel</footer>
    </div>
  );
}

export default App;
