import './styles/Header.css';
import SearchBar from './SearchBar';

const Header = (props: {
  searchRequest: string;
  handleSearch: (request: string) => any;
}) => {
  return (
    <header className="Header">
      <h1 role="banner">@fekoneko blog.</h1>
      <SearchBar
        searchRequest={props.searchRequest}
        handleSearch={props.handleSearch}
      />
    </header>
  );
};

export default Header;
