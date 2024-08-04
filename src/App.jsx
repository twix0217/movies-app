// src/App.jsx
import './App.css';

const App = () => {
  const movies = [
    { name: 'Harry Potter', watched: true },
    { name: 'Dragon Ball', watched: false },
    { name: 'Prison Break', watched: true },
  ];

  return (
    <>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className={movie.watched ? 'completed' : 'not-completed'}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
}



export default App;