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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={input}
        className="input-search"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button type="submit" onSubmit={(e) => handleSubmit(e)}>
        Search
      </button>
    </form>
  );
};

export { SearchBar };
