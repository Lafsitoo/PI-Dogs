import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
        <Link to="/home">
          <button className="landing-button">Lets go</button>
        </Link>
    </div>
  );
};

export { Landing };
