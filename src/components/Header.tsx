import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

type HeaderProps = {
  searchRequest: string;
  handleSearch: (request: string) => any;
};

const Header = ({ searchRequest, handleSearch }: HeaderProps) => {
  return (
    <header className="Header">
      <Link to={`${(import.meta as any).env.BASE_URL}`}>
        <h1 role="banner">@fekoneko blog.</h1>
      </Link>
      <SearchBar searchRequest={searchRequest} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
