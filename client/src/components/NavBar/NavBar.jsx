import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="fix">
      <nav className="container">
        <div>
          <Link to="/">Landing</Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/form">Create</Link>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
