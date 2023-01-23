
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <header>
            <nav>
            <div>
                <Link to="/">
                    <button></button>
                </Link>
            </div>
            <div>
                <Link to="/dogs">
                    <button></button>
                </Link>
            </div>
            <div>
                <Link to="/about">
                    <button></button>
                </Link>
            </div>
            </nav>
        </header>
    )
}

export { NavBar };
