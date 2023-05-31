import { Link } from "react-router-dom";
import png from "../../resources/Lovepik_com-401730263-golden-dog.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
        <img className="image-dog" src={png} alt="dog"></img>
      <Link to="/home">
        <button className="landing-button">Lets go</button>
      </Link>
    </div>
  );
};

export { Landing };
