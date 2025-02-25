import './App.css';
import Quiz from './Quiz';
import Fin from './Fin';
import Home from './Home';

import { Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fin' element={<Fin />} />
        <Route path='quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
