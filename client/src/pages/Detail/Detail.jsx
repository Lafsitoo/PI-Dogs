import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getClean } from "./../../redux/actions/index";
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  // Obtener la ID
  const { id } = useParams();
  const dog = useSelector((state) => state.detail);

  // Petición que se ejecuta cuando se monta el componente
  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getClean());
  }, [dispatch, id]);

  return (
    <div>
      {dog[0] ? (
        <div className="dog-details">
          <h2>{dog[0].name}</h2>
          <img src={dog[0].image} alt="" />
          <p>Age: {dog[0].life_span}</p>
          <p>Weight: {dog[0].weight}</p>
          <p>Heigth: {dog[0].height}</p>
          <p>Temperaments: {dog[0].temperament}</p>
        </div>
      ) : (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export { Detail };
