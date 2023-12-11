import "./App.css";
import Movie from "./components/Movie";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((it) => (
          <Movie
            title={it.title}
            poster_path={it.poster_path}
            vote_average={it.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
