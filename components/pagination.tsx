type PaginationProps = {
  perPage: number;
  total: number;
  handlePageChange: (num: number) => void;
};

const Pagination = ({ perPage, total, handlePageChange }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num, i) => (
          <li key={i}>
            <a href="#" onClick={() => handlePageChange(num)}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
