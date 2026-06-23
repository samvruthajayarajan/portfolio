// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage';
import ParticleBackground from './ParticleBackground';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen text-white">
      <ParticleBackground />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
