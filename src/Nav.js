import './styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="">Home</Link>
      <Link to="post">Create Post</Link>
      <Link to="about">About</Link>
    </nav>
  );
}

export default Nav;