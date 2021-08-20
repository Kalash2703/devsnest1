import "./styles.css";
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';

export default function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
          <AddMovie />
          <MovieList />
      
    </div>
    </MovieProvider>
  );
}
