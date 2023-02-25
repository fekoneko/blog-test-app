import './styles/SearchBar.css';
import { BsX } from 'react-icons/bs';
import { useContext, useRef } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type SearchBarProps = {
  searchRequest: string;
  handleSearch: (request: string) => any;
};

const SearchBar = ({ searchRequest, handleSearch }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { langData } = useContext(GlobalContext);

  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" style={{ position: 'absolute', left: -99999 }}>
        {langData.SearchBar_label}
      </label>
      <input
        id="search"
        ref={searchInputRef}
        maxLength={256}
        type="text"
        role="search"
        placeholder={langData.SearchBar_placeholder}
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
