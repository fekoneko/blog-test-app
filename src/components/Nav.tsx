import './styles/Nav.css';
import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';

type NavProps = {
  location: Location;
};

const Nav = ({ location }: NavProps) => {
  return (
    <nav className="Nav">
      <Link to="" className={location.pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link to="post" className={location.pathname === '/post' ? 'active' : ''}>
        Create Post
      </Link>
      <Link to="about" className={location.pathname === '/about' ? 'active' : ''}>
        About
      </Link>
    </nav>
  );
};

export default Nav;
