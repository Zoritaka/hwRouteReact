import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Attractions1 from './pages/attractions1';
import Attractions2 from './pages/attractions2';
import Attractions3 from './pages/attractions3';
import City from './pages/City';
import Info from './pages/info';
import Photo from './pages/photo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<City/>}></Route>
        <Route path="/photo" element={<Photo/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="/attractions1" element={<Attractions1/>}></Route>
        <Route path="/attractions2" element={<Attractions2/>}></Route>
        <Route path="/attractions3" element={<Attractions3/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
