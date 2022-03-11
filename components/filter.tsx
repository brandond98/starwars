type FilterProps = {
  options: string[];
  handleChange: (value: string) => void;
  selected: string;
  placeholder: string;
};

const Filter = ({
  options,
  handleChange,
  selected,
  placeholder,
}: FilterProps) => {
  return (
    <select onChange={(e) => handleChange(e.target.value)} value={selected}>
      <option>{placeholder}</option>
      {options.map((colour: string) => (
        <option key={colour}>{colour}</option>
      ))}
    </select>
  );
};

export default Filter;
