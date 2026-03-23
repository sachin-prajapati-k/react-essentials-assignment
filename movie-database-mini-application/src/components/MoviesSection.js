import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesSection({ query, matchingMovies, favorites, onToggleFavorite }) {
  const trimmed = query.trim();

  let content;
  if (!trimmed) {
    content = (
      <div className="empty-state">
        <div className="empty-pill">No input -> show hint</div>
        <div className="empty-text">
          Search movies (e.g. "Interstellar", "Star") to see results.
        </div>
      </div>
    );
  } else if (matchingMovies.length === 0) {
    content = (
      <div className="empty-state">
        <div className="empty-pill">No match -> show empty state</div>
        <div className="empty-text">No movies found for "{trimmed}".</div>
      </div>
    );
  } else {
    content = (
      <div className="movie-list">
        {matchingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.has(movie.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="panel-col">
      <div className="section-title">Matching Movies</div>
      {trimmed ? (
        <div className="results-line">
          {matchingMovies.length} results for "{trimmed}"
        </div>
      ) : null}
      {content}
    </section>
  );
}

