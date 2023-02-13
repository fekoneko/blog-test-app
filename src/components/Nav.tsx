import './styles/Nav.css';
import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';

const Nav = (props: {
  location: Location,
}) => {
  
  return (
    <nav className="Nav">
      <Link to="" className={ props.location.pathname === '/' ? 'active' : '' }>Home</Link>
      <Link to="post" className={ props.location.pathname === '/post' ? 'active' : '' }>Create Post</Link>
      <Link to="about" className={ props.location.pathname === '/about' ? 'active' : '' }>About</Link>
    </nav>
  );
}

export default Nav;