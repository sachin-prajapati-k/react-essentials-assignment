import React from 'react';
import MovieCard from './MovieCard';

export default function FavouritesSection({ favoriteMovies, favorites, onToggleFavorite }) {
  return (
    <section className="panel-col">
      <div className="section-title">Favourite Movies</div>

      {favoriteMovies.length === 0 ? (
        <div className="empty-state">
          <div className="empty-pill">No favorites yet</div>
          <div className="empty-text">You haven't added any favorites yet.</div>
        </div>
      ) : (
        <div className="movie-list">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.has(movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

