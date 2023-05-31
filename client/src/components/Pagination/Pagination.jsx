import "./Pagination.css";

const Pagination = ({ cardPerPage, allDogs, pagination, currentPage }) => {

  const pageNumbers = [];
  // Calculamos el núm de págs. ( Math.ceil = Redondear hacia arriba )
  for (let i = 1; i <= Math.ceil(allDogs / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container">
      <ul>
        <div className="list">
          <button
            disabled={currentPage === 1}
            onClick={() => pagination((currentPage = 1))}
          >{`<<`}</button>
        </div>

        <div className="list">
          <button
            disabled={currentPage === 1}
            onClick={() => pagination(currentPage - 1)}
          >
            prev
          </button>
        </div>

        {/* {pageNumbers?.map((number) => (
          <li key={number}>
            <button onClick={() => pagination(number)}>{number}</button>
          </li>
        ))} */}
        <div className="list">
          <button>{currentPage}</button>
        </div>

        <div className="list">
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination(currentPage + 1)}
          >
            next
          </button>
        </div>

        <div className="list">
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination((currentPage = pageNumbers.length))}
          >{`>>`}</button>
        </div>
      </ul>
    </nav>
  );
};

export { Pagination };
