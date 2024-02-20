import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import AllHeroes from './pages/AllHeroes';
import Hero from './pages/Hero';
import NavBar from './components/NavBar/NavBar';
import Team from './pages/Team';

function App() {
  return (
    <div className="app">
    <Router>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<AllHeroes />} />
        <Route path={"/:id"} element={<Hero/>} />
        <Route path={"/team"} element={<Team/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
