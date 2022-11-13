const SearchBox = ({searchText, updateSearch}) => {
  return (
    <div>
      <label>
        <input type="text" defaultValue={searchText} onChange={(e) => updateSearch(e.target.value)}/>
      </label>
    </div>
  );
};

export default SearchBox;
