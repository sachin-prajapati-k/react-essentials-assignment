import React from 'react';

export default function SearchBar({ value, onChange, onReset }) {
  const hasValue = value.trim().length > 0;

  return (
    <div className="search-row">
      <div className="search-field">
        <span className="search-glass" aria-hidden="true">
          🔍
        </span>
        <input
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search movies (e.g. 'Interstellar', 'Star')"
          aria-label="Search movies"
        />
        {hasValue && (
          <button
            type="button"
            className="search-clear"
            onClick={onReset}
            aria-label="Reset search"
          >
            ×
          </button>
        )}
      </div>
      <button type="button" className="reset-btn" onClick={onReset} disabled={!hasValue}>
        Reset
      </button>
    </div>
  );
}

