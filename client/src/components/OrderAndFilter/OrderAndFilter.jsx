import "./OrderAndFilter.css";
import { order } from "../../redux/constants";
import { orderSort, filter, filterTemperament } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const OrderAndFilter = () => {
  const dispatch = useDispatch();
  // Estado local para mantener el índice de la opción seleccionada
  const [orderOption, setOrderOption] = useState(0);
  // Estado para el filtrado
  const [filterOption, setFilterOption] = useState("");
  const [temperament, setTemperament] = useState("Default");
  // Obtener los names de temperaments desde el estado inicial
  const allTemperaments = useSelector((state) => state.temperaments);
  const dogLife = useSelector(state => state.dogs)
  const [dogVide, setDogVide] = useState(dogLife)

  // Cambiar la selección de ordenamiento
  const handleOrder = (e) => {
    // Actualizar el estado con la opción seleccionada
    setOrderOption(e.target.value);
    // Despachar la acción con la opción seleccionada
    dispatch(orderSort(order[e.target.value]));
  };

  // Selecion de filtrado
  const handleFilter = (e) => {
    // Actualiza estado
    setFilterOption(e.target.value);
    // Despachar la seleción
    dispatch(filter(e.target.value));
  };

  const handleTemperament = (e) => {
    setTemperament(e.target.value);
    dispatch(filterTemperament(e.target.value));
  };

  const handleLife = (e) => {
  }

  return (
    <div className="container">

    <div>
      <button>
      {}
      Vida + 12
      </button>
    </div>

      <div className="label">
        <label htmlFor="sort">Sort by: </label>
        <select className="pizzo" id="sort" value={orderOption} onChange={handleOrder}>
          {order.map((option, index) => (
            <option key={option.id} value={index}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="label">
        <label htmlFor="filter">Filter by: </label>
        <select id="filter" value={filterOption} onChange={handleFilter}>
          <option key={"All dogs"} value="All dogs">
            All dogs
          </option>
          <option key={"Created by Users"} value="Created by Users">
            Created by Users
          </option>
          <option key={"Created by API"} value="Created by API">
            Created by API
          </option>
        </select>
      </div>

      <div className="label">
        <label htmlFor="filterTemperament">Temperament by: </label>
        <select
          id="filterTemperament"
          value={temperament}
          onChange={handleTemperament}
        >
          <option key={"All temperaments"} value="All temperaments">
            Default
          </option>
          {allTemperaments.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { OrderAndFilter };
