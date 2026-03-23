import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Movie Explorer header', () => {
  render(<App />);
  expect(screen.getByText(/Movie Explorer/i)).toBeInTheDocument();
});

test('shows a hint when there is no search input', () => {
  render(<App />);
  expect(screen.getByText(/No input/i)).toBeInTheDocument();
});

test('filters movies and allows favoriting', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Search movies/i);
  await userEvent.type(input, 'Interstellar');

  expect(screen.getByText(/^Interstellar$/i)).toBeInTheDocument();
  expect(screen.getByText(/No favorites yet/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /Favorite/i }));

  expect(screen.queryByText(/No favorites yet/i)).not.toBeInTheDocument();
});
