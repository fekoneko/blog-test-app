import './styles/Header.css';
import SearchBar from './SearchBar';

const Header = ({ searchRequest, handleSearch }) => {
  return (
    <header className="Header">
      <h1 role="banner">@fekoneko blog.</h1>
      <SearchBar
        searchRequest={searchRequest}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default Header;