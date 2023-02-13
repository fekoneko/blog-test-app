import './styles/SearchBar.css';
import { BsX } from "react-icons/bs";
import { useRef } from 'react';

const SearchBar = (props: {
  searchRequest: string,
  handleSearch: (request: string) => any,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="search"
        style={{position: 'absolute', left: -99999}}
      >Search:</label>
      <input
        id="search"
        ref={searchInputRef}
        maxLength={256}
        type="text"
        role="search"
        placeholder="Search"
        onChange={(e) => props.handleSearch(e.target.value)}
        value={props.searchRequest}
      />
      <button
        className={'clearButton' + (props.searchRequest ? '' : ' hidden')}
        type="button"
        onClick={ () => {
          props.handleSearch('');
          if (searchInputRef.current) searchInputRef.current.focus();
        } }
      ><BsX /></button>
    </form>
  );
}
SearchBar.defaultParams = {
  searchRequest: '',
}
export default SearchBar;