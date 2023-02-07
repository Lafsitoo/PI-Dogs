import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDogs } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  const filterSearch = useSelector((state) => state.filterSearch);
  const [input, setInput] = useState("");
  const [clear, setClear] = useState(filterSearch === "" ? false : true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDogs(input));
    setInput("");
    setClear(true);
  };

  return (
    <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
      {!clear && <i class="fi fi-br-search"></i>}
      <input
        type="text"
        value={input}
        className="searchInput"
        placeholder="Buscar..."
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setClear(false)}
      ></input>
      {clear && <i class="fi fi-br-cross-circle"></i>}
    </form>
  );
};

export { SearchBar };
