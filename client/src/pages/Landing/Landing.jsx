import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export { Landing };
