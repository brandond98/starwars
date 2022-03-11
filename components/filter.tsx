type FilterProps = {
  options: string[];
  handleChange: (value: string) => void;
  selected: string;
};

const Filter = ({ options, handleChange, selected }: FilterProps) => {
  return (
    <select onChange={(e) => handleChange(e.target.value)} value={selected}>
      <option>Eye Colour</option>
      {options.map((colour: string) => (
        <option>{colour}</option>
      ))}
    </select>
  );
};

export default Filter;
