import React, { useMemo, useState } from 'react';
import './App.css';
import { MOVIES } from './moviesData';
import SearchBar from './components/SearchBar';
import MoviesSection from './components/MoviesSection';
import FavouritesSection from './components/FavouritesSection';

export default function App() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(() => new Set());
  const [theme, setTheme] = useState('light');

  const trimmed = query.trim().toLowerCase();

  const matchingMovies = useMemo(() => {
    if (!trimmed) return [];

    return MOVIES.filter((movie) => {
      const haystack = [
        movie.title,
        movie.year,
        movie.genres.join(' '),
        movie.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(trimmed);
    });
  }, [trimmed]);

  const favoriteMovies = useMemo(
    () => MOVIES.filter((movie) => favorites.has(movie.id)),
    [favorites]
  );

  function toggleFavorite(movieId) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(movieId)) next.delete(movieId);
      else next.add(movieId);
      return next;
    });
  }

  return (
    <div className={`movie-explorer ${theme === 'dark' ? 'theme-dark' : ''}`}>
      <div className="app-card">
        <div className="topbar">
          <div>
            <h1 className="title">Movie Explorer</h1>
            <p className="subtitle">
              Search, filter, and favorite movies. Designed for a single-page React component structure.
            </p>
          </div>
          <button type="button" className="theme-toggle" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
            Toggle theme
          </button>
        </div>

        <SearchBar value={query} onChange={setQuery} onReset={() => setQuery('')} />

        <div className="content-grid">
          <MoviesSection
            query={query}
            matchingMovies={matchingMovies}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
          <FavouritesSection
            favoriteMovies={favoriteMovies}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
}
