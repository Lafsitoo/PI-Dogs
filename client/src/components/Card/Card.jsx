import "./Card.css";

const Card = ({ name, image, temperament, weight }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt="dog-img" />
      <h5>{weight}</h5>
      <h5>{temperament}</h5>
    </div>
  );
};

export { Card };
