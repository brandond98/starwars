const PerPageSelector = ({ handleChange, perPage }) => {
  return (
    <>
      <span>Results per page:</span>
      <select value={perPage} onChange={(e) => handleChange(e.target.value)}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </>
  );
};

export default PerPageSelector;
