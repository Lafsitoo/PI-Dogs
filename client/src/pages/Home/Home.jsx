import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import "./Home.css";
import { OrderAndFilter } from "../../components/OrderAndFilter/OrderAndFilter";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  /* PAGINATION */
  // Cantidad de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(8);
  // Calculos de primer y ultima card
  const indexOfLastCard = currentPage * cardPerPage; // 8
  const indexOfFirstCard = indexOfLastCard - cardPerPage; // 1
  // Separación y agrupación
  const currentDogs = allDogs.slice(indexOfFirstCard, indexOfLastCard);
  // Encargado de cambiar la página actual
  const pagination = (pageNumber) => {
    // Actualiza el estado con el número de página proporcionado
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  return (
    <main className="home">
      <NavBar />
      <div>
        <Link to="/form">
          <button>Create</button>
        </Link>
      </div>
      <SearchBar />

      <OrderAndFilter />

      <Pagination
        cardPerPage={cardPerPage}
        allDogs={allDogs.length}
        pagination={pagination}
        currentPage={currentPage}
      />

      <div>
        {currentDogs?.map((e) => {
          return (
            <Link to={`/dogs/${e.id}`}>
              <Card key={e.id} name={e.name} image={e.image} temperament={e.temperament} weight={e.weight}/>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export { Home };
