
import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const profiles = [
    {
      name: 'TuteDude',
      title: 'Product Designer & Frontend Engineer',
      bio: 'I design and build calm, focused product experiences for fast-moving teams. Currently exploring advanced interfaces, design systems, and high-performance UI engineering.',
      skills: ['Design Systems', 'React', 'TypeScript', 'Figma', 'Prototyping', 'Accessibility'],
      initialLikes: 128,
    },
    {
      name: 'Aarav Sharma',
      title: 'Full-Stack Developer',
      bio: 'Building reliable web applications with a strong focus on performance, DX, and clean architecture across the stack.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Testing'],
      initialLikes: 92,
    },
    {
      name: 'Sara Patel',
      title: 'UI/UX Designer',
      bio: 'Crafting thoughtful, human-centered interfaces that balance visual polish with usability and accessibility.',
      skills: ['Wireframing', 'Figma', 'Design Systems', 'User Research', 'Prototyping'],
      initialLikes: 176,
    },
    {
      name: 'Rahul Verma',
      title: 'Frontend Engineer',
      bio: 'Translating complex product ideas into smooth, responsive experiences in the browser.',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Performance'],
      initialLikes: 204,
    },
  ];

  return (
    <div className="app-shell">
      <ProfileCard profiles={profiles} initialTheme="light" />
    </div>
  );
}

export default App;
