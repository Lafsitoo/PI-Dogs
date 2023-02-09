import "./OrderAndFilter.css";
import { order } from "../../redux/constants";
import { orderSort } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const OrderAndFilter = () => {
    const dispatch = useDispatch();
    // Estado local para mantener el índice de la opción seleccionada
    const [selectedOption, setSelectedOption] = useState(0);
  
    // Cambiar la selección
    const handleChange = (event) => {
      // Actualizar el estado con la opción seleccionada
      setSelectedOption(event.target.value);
      // Despachar la acción con la opción seleccionada
      dispatch(orderSort(order[event.target.value]));
    };
  
    return (
      <div>
        {/* Etiqueta de label para el control desplegable */}
        <label htmlFor="sort">Sort by:</label>
        {/* Control desplegable */}
        <select id="sort" value={selectedOption} onChange={handleChange}>
          {/* Renderizar las opciones de ordenamiento */}
          {order.map((option, index) => (
            <option key={option.id} value={index}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

export { OrderAndFilter };
