
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <header>
            <nav>
            <div>
                <Link to="/">
                    <button>Landing</button>
                </Link>
            </div>
            <div>
                <Link to="/home">
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <Link to="/about">
                    <button>About</button>
                </Link>
            </div>
            </nav>
        </header>
    )
}

export { NavBar };
