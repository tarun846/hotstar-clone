import { useEffect } from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios'
import Tv from './pages/Tv';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
   

    <Router>

    <Navbar/>
             <Routes>
            <Route path = '/' element = {<Home/>}  />
            <Route path = '/tv/:Id'  element = {<Tv/>}/>
            <Route path = '/movie/:Id'  element = {<Movie/>}/>
            <Route path = '*'  element = {<Notfound/>}  /> 
            </Routes>

             </Router>
            
    
    </>
    
  );
}

export default App;
