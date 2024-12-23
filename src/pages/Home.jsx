import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Terminator", release_date: "2000" },
    { id: 2, title: "Matrix", release_date: "2022" },
    { id: 3, title: "Shark", release_date: "2003" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Optional: alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movies ..."
          className="searh-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
