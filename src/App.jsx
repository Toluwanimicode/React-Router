import { Routes, Route } from 'react-router-dom';
import './App.css'
import MovieList from "./components/movies/MovieList"
 

function App() {
  

  return (
     <>
         <Routes>
            <Route path="/" element={ <MovieList/>} />
        </Routes>
    </>
  )
}

export default App;
