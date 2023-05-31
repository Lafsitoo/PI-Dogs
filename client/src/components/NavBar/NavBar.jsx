import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="fix">
      <nav className="container">
        <div className="button">
          <Link className="name" to="/">Landing</Link>
        </div>
        <div className="button">
          <Link className="name" to="/home">Home</Link>
        </div>
        <div className="button">
          <Link className="name" to="/form">Create</Link>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
