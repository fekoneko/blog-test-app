import './styles/SearchBar.css';
import { BsX } from 'react-icons/bs';
import { useRef } from 'react';

type SearchBarProps = {
  searchRequest: string;
  handleSearch: (request: string) => any;
};

const SearchBar = ({ searchRequest, handleSearch }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" style={{ position: 'absolute', left: -99999 }}>
        Search:
      </label>
      <input
        id="search"
        ref={searchInputRef}
        maxLength={256}
        type="text"
        role="search"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchRequest}
      />
      <button
        className={'clearButton' + (searchRequest ? '' : ' hidden')}
        type="button"
        onClick={() => {
          handleSearch('');
          if (searchInputRef.current) searchInputRef.current.focus();
        }}
      >
        <BsX />
      </button>
    </form>
  );
};
SearchBar.defaultParams = {
  searchRequest: '',
};
export default SearchBar;
