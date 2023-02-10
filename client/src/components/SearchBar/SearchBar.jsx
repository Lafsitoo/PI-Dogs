import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDogs } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const filterSearch = useSelector((state) => state.filterSearch);
  const dispatch = useDispatch();
  const [clear, setClear] = useState(filterSearch === "" ? false : true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDogs(input));
    setClear(true);
  };

  const handleClear = () => {
    setInput("");
    setClear(false);
    dispatch(searchDogs(""));
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      {!clear && (
        <i className="fi fi-br-search" onClick={handleSubmit}></i>
      )}
      <input
        type="text"
        value={input}
        className="searchInput"
        placeholder="Buscar..."
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setClear(false)}
      ></input>
      {clear && <i className="fi fi-br-cross-circle" onClick={handleClear}></i>}
    </form>
  );
};

export { SearchBar };
