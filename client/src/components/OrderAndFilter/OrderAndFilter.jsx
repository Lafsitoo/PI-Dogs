import "./OrderAndFilter.css";
import { order, origin } from "../../redux/constants";
import { orderSort, filter } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const OrderAndFilter = () => {
  const dispatch = useDispatch();
  // Estado local para mantener el índice de la opción seleccionada
  const [orderOption, setOrderOption] = useState(0);
  // Estado para el filtrado
  const [filterOption, setFilterOption] = useState(0);

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
    dispatch(filter(origin[e.target.value].filter));
  };

  return (
    <div>
      {/* Etiqueta de label para el control desplegable */}
      <label htmlFor="sort">Sort by:</label>
      {/* Control desplegable */}
      <select id="sort" value={orderOption} onChange={handleOrder}>
        {/* Renderizar las opciones de ordenamiento */}
        {order.map((option, index) => (
          <option key={option.id} value={index}>
            {option.name}
          </option>
        ))}
      </select>

      {/* Nuevo control desplegable para el filtrado */}
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" value={filterOption} onChange={handleFilter}>
        {origin.map((option, index) => (
          <option key={option.id} value={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { OrderAndFilter };
