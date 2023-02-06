import './styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  
  return (
    <nav className="Nav">
      <Link to="" className={ location.pathname === '/' ? 'active' : '' }>Home</Link>
      <Link to="post" className={ location.pathname === '/post' ? 'active' : '' }>Create Post</Link>
      <Link to="about" className={ location.pathname === '/about' ? 'active' : '' }>About</Link>
    </nav>
  );
}

export default Nav;