import "./Card.css";

const Card = ({ name, image, temperament, weight }) => {
  return (
    // <section className="card-container">

      <div class="card">
        <img className="card-image" src={image} alt="" />
        <div class="category">{name}</div>
        <div class="heading">
        Weight: {weight} kg
          <div class="author">
            <span class="name">{temperament}</span>
          </div>
        </div>
      </div>

    // </section>
  );
};

export { Card };
