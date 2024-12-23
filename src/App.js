import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';


function App(props) {
  return (
    <div className="App">
      <MovieCard movie={{ title: "Tim's film", release_date: "2024" }} />
    </div>
  );
}

export default App;
