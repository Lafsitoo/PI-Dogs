import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getClean } from "./../../redux/actions/index";
import "./Detail.css"

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dog = useSelector((state) => state.detail);
  const [charged, setCharged] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCharged(false);
    }, 600);
    dispatch(getDetail(id));
    return () => {
      getClean();
    };
  }, [dispatch, id]);

  return (
    <div >
      {charged ? (
        <></>
      ) : (
        <div className="dog-details">
          <h2>{dog[0].name}</h2>
          <img src={dog[0].image} alt="" />
          <p>Age: {dog[0].life_span}</p>
          <p>Weight: {dog[0].weight}</p>
          <p>Heigth: {dog[0].height}</p>
          <p>Temperaments: {dog[0].temperament}</p>
        </div>
      )}
    </div>
  );
};

export { Detail };
