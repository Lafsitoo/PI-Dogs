import React from "react";
import { useSelector } from "react-redux";

const Detail = ({ match }) => {
  const dogs = useSelector((state) => state.dogs);
  const dog = dogs.find((dog) => dog.id === match.params.id);

  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Weight: {dog.weight}</p>
      <p>Temperaments: {dog.temperament}</p>
    </div>
  );
};

export { Detail };
