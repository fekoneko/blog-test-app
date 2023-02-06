import './styles/SearchBar.css';

const SearchBar = ({ searchRequest, handleSearch }) => {
  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="search"
        style={{position: 'absolute', left: -99999}}
      >Search:</label>
      <input
        id="search"
        type="text"
        role="search"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchRequest}
      />
    </form>
  );
}
SearchBar.defaultParams = {
  searchRequest: '',
}
export default SearchBar;