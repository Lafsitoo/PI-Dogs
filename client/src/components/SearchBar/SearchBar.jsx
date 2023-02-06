import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDogs(input));
    setInput("");
  };

  return (
    <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
      <i class="fi fi-br-search"></i>
      <input
        type="text"
        value={input}
        className="searchInput"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      ></input>
      <i class="fi fi-br-cross-circle"></i>
    </form>
  );
};

export { SearchBar };
