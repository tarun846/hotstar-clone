import { useEffect } from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios'
import Tv from './pages/Tv';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Navbar from './Components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { getMovieAndTv } from './Container/movieandtvslice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getMovieAndTv())
  }, [])
  

  return (
    <>
   

    <Router>

    <Navbar/>
             <Routes>
            <Route path = '/' element = {<Home/>}  />
            <Route path = '/tv'  element = {<Tv/>}/>
            <Route path = '/movie'  element = {<Movie/>}/>
            <Route path = '*'  element = {<Notfound/>}  /> 
            </Routes>

             </Router>
            
    
    </>
    
  );
}

export default App;
