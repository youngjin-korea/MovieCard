import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
//
const Movie = ({ title, poster_path, vote_average }) => {
  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt="이미지" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
