import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={input}
        className="input-search"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export { SearchBar };
