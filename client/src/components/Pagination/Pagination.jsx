import "./Pagination.css";

const Pagination = ({ cardPerPage, allDogs, pagination, currentPage }) => {

  const pageNumbers = [];
  // Calculamos el núm de págs. ( Math.ceil = Redondear hacia arriba )
  for (let i = 1; i <= Math.ceil(allDogs / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div>
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => pagination(currentPage - 1)}
          >
            prev
          </button>
        </div>

        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => pagination((currentPage = 1))}
          >{`<<`}</button>
        </div>

        {/* {pageNumbers?.map((number) => (
          <li key={number}>
            <button onClick={() => pagination(number)}>{number}</button>
          </li>
        ))} */}
        <div>
          <button>{currentPage}</button>
        </div>

        <div>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination((currentPage = pageNumbers.length))}
          >{`>>`}</button>
        </div>

        <div>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination(currentPage + 1)}
          >
            next
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Pagination };
