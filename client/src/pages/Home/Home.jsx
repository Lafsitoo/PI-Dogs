import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const current = allDogs.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <main className="home">
      <NavBar />
      <div>
        <Link to="/form">
          <button>Crear</button>
        </Link>
      </div>
      <SearchBar />

      <section>
        {current?.map((e) => {
          return (
            <Link>
              <Card name={e.name} image={e.image} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export { Home };
