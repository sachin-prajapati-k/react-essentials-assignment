import React, { useState } from 'react';

const photos = [
  'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
];

function ProfileCard({ profiles, initialTheme = 'light' }) {
  const [theme, setTheme] = useState(initialTheme);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);
  const [likesPerProfile, setLikesPerProfile] = useState(
    () => profiles.map((p) => p.initialLikes ?? 0),
  );

  const isDark = theme === 'dark';
  const currentProfile = profiles[profileIndex];
  const currentLikes = likesPerProfile[profileIndex] ?? 0;

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handleAlert = () => {
    alert(`Thanks for reaching out to ${currentProfile.name}!`);
  };

  const handleLike = () => {
    setLikesPerProfile((prev) => {
      const next = [...prev];
      next[profileIndex] = (next[profileIndex] ?? 0) + 1;
      return next;
    });
  };

  const handleNextProfile = () => {
    setProfileIndex((prev) => (prev + 1) % profiles.length);
  };

  const handlePrevProfile = () => {
    setProfileIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className={`card-wrapper ${isDark ? 'card-wrapper--dark' : 'card-wrapper--light'}`}>
      <div className="card-header">
        <button className="toggle-theme-btn" onClick={handleToggleTheme}>
          <span className="toggle-icon">☀️</span> Toggle theme
        </button>
      </div>

      <article className="card">
        <div className="card-profile">
          <div className="avatar-wrapper" onClick={handleNextPhoto}>
            <img
              src={photos[photoIndex]}
              alt={`${currentProfile.name} profile`}
              className="avatar"
            />
          </div>
          <div className="card-title-block">
            <h1 className="card-name">{currentProfile.name}</h1>
            <p className="card-role">{currentProfile.title}</p>
          </div>
        </div>

        <p className="card-bio">{currentProfile.bio}</p>

        <section className="card-section">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            {currentProfile.skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="card-footer">
          <div className="footer-left">
            <button className="mode-chip" onClick={handleToggleTheme}>
              {isDark ? 'Dark' : 'Light'}
            </button>
            <span className="footer-divider">|</span>
            <span className="footer-page">
              {profileIndex + 1} / {profiles.length}
            </span>
          </div>

          <div className="footer-right">
            <button className="arrow-button" onClick={handlePrevProfile}>
              ‹
            </button>
            <button className="arrow-button" onClick={handleNextProfile}>
              ›
            </button>
            <button className="icon-button" onClick={handleLike}>
              <span className="icon-heart">♥</span>
              <span className="icon-count">{currentLikes}</span>
            </button>
            <button className="primary-button" onClick={handleAlert}>
              Contact
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default ProfileCard;

