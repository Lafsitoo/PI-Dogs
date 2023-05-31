import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  // Input de busqueda
  const [input, setInput] = useState("");
  // La "X" que borra nuestro input
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDogs(input));
    // Actualiza el estado de "clear" para mostrar el botón "X"
    setClear(true);
  };

  const handleClear = () => {
    setInput("");
    dispatch(searchDogs(""));
    // Ocultar la "X"
    setClear(false);
  };

  return (
    <div className="search">
      <form className="searchBar" onSubmit={handleSubmit}>
        {!clear && <i className="fi fi-br-search" onClick={handleSubmit}></i>}
        <input
          type="text"
          value={input}
          className="searchInput"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setClear(false)}
        ></input>
        {clear && (
          <i className="fi fi-br-cross-circle" onClick={handleClear}></i>
        )}
      </form>
    </div>
  );
};

export { SearchBar };
