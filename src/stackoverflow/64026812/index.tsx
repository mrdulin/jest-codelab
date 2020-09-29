import React from 'react';

function MovieSummary({ movie, disabled, addItem, handleDisabled }) {
  const disableButton = false;
  return (
    <div key={movie.imdbID} className="movie-container">
      <div className="button-container">
        <button
          id="btn-click"
          key={movie.imdbID}
          disabled={disabled.indexOf(movie.imdbID) !== -1 || disableButton}
          className="btn btn-primary mt-3"
          onClick={() => {
            addItem({
              title: movie.Title,
              id: movie.imdbID,
              year: movie.Year,
            });
            handleDisabled(movie.imdbID);
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  );
}

export default MovieSummary;
