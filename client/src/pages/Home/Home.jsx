import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import { OrderAndFilter } from "../../components/OrderAndFilter/OrderAndFilter";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  /* PAGINATION */
  // Cantidad de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(8);
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
  }, [dispatch]);

  return (
    <main className="home">
      <NavBar />

      <div className="search">
        <div className="form">
          <SearchBar />
        </div>
      </div>

      <div className="order">
        <OrderAndFilter />
      </div>

      <Pagination
        cardPerPage={cardPerPage}
        allDogs={allDogs.length}
        pagination={pagination}
        currentPage={currentPage}
      />
      <section className="gallery-container">
        <div className="gallery">
          {currentDogs?.map((e) => {
            return (
              <Link to={`/dogs/${e.id}`} key={e.id}>
                <Card
                  name={e.name}
                  image={e.image}
                  temperament={e.temperament}
                  weight={e.weight}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export { Home };
