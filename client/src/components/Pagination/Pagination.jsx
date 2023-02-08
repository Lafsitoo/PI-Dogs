import "./Pagination.css";

const Pagination = ({ cardPerPage, allDogs, pagination, currentPage }) => {
  const pageNumbers = [];
  // Calculamos el núm de págs. ( Math.ceil = Redondear hacia arriba )
  for (let i = 1; i <= Math.ceil(allDogs / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => pagination(currentPage - 1)}
          >
            prev
          </button>
        </li>

        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => pagination((currentPage = 1))}
          >{`<<`}</button>
        </li>

        {/* {pageNumbers?.map((number) => (
          <li key={number}>
            <button onClick={() => pagination(number)}>{number}</button>
          </li>
        ))} */}
        <li>
          <button>{currentPage}</button>
        </li>

        <li>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination((currentPage = pageNumbers.length))}
          >{`>>`}</button>
        </li>

        <li>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => pagination(currentPage + 1)}
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
