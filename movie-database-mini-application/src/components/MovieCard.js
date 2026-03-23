import React from 'react';

function ratingToColor(rating) {
  if (rating >= 8.5) return '#10b981'; // green
  if (rating >= 7.0) return '#3b82f6'; // blue
  return '#f59e0b'; // amber
}

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const badgeColor = ratingToColor(movie.rating);

  return (
    <div className="movie-card">
      <div className="movie-rating" style={{ backgroundColor: badgeColor }} aria-label={`Rating ${movie.rating}`}>
        {movie.rating.toFixed(1)}
      </div>

      <div className="movie-info">
        <div className="movie-title-row">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-year">{movie.year}</div>
        </div>

        <div className="movie-sub">{movie.genres.join(' • ')}</div>

        <div className="movie-tags">
          {movie.tags.map((t) => (
            <span key={t} className="movie-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`fav-btn ${isFavorite ? 'is-fav' : ''}`}
        onClick={() => onToggleFavorite(movie.id)}
        aria-pressed={isFavorite}
      >
        <span className="fav-icon" aria-hidden="true">
          {isFavorite ? '[X]' : '[ ]'}
        </span>
        <span className="fav-text">{isFavorite ? 'Favorited' : 'Favorite'}</span>
      </button>
    </div>
  );
}

