import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <main className="container">
      <NavBar />
      <div>
        <Link to="/form">
          <button>Crear</button>
        </Link>
      </div>
      <SearchBar />
    </main>
  );
};

export { Home };
