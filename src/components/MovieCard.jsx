import React from "react";
import "../css/MovieCard.css";
import { FaFaceGrinHearts } from "react-icons/fa6";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("Click me to  strart");
  }
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.url} alt={movie.title} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
              <FaFaceGrinHearts />
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
