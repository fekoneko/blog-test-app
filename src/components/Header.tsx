import './styles/Header.css';
import SearchBar from './SearchBar';

type HeaderProps = {
  searchRequest: string;
  handleSearch: (request: string) => any;
};

const Header = ({ searchRequest, handleSearch }: HeaderProps) => {
  return (
    <header className="Header">
      <h1 role="banner">@fekoneko blog.</h1>
      <SearchBar searchRequest={searchRequest} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
