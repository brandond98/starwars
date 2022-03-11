type SortSelectorProps = {
  value: string;
  handleChange: (value: string) => void;
};

const SortSelector = ({ value, handleChange }: SortSelectorProps) => {
  return (
    <>
      <span>Sort:</span>
      <select onChange={(e) => handleChange(e.target.value)} value={value}>
        <option value="sort">Sort</option>
        <option value="name">Name</option>
        <option value="hairColor">Hair Colour</option>
        <option value="skinColor">Skin Colour</option>
        <option value="eyeColor">Eye Colour</option>
        <option value="gender">Gender</option>
        <option value="homeworld">Homeworld</option>
      </select>
    </>
  );
};

export default SortSelector;
