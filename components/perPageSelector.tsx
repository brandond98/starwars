import React from 'react';

type PerPageSelectorProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  perPage: number;
};

const PerPageSelector = ({ handleChange, perPage }: PerPageSelectorProps) => {
  return (
    <div className="number-selector">
      <span>Results per page:</span>
      <select value={perPage} onChange={(e) => handleChange(e.target.value)}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>
  );
};

export default PerPageSelector;
