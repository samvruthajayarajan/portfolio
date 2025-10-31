// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
