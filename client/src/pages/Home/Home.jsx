import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div>
        <Link to="/form">
          <button>Crear</button>
        </Link>
      </div>
    </main>
  );
};

export { Home };
