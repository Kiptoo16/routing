import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails';


function App() {
  return (

    <div className="App"> 
    <Navbar />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Users/:id' element={<UserDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
