import { Link, useLocation } from 'react-router-dom';
import { Location } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Nav = () => {
  const { langData } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <nav className="Nav">
      <Link to={''} className={location.pathname === '/' ? 'active' : ''}>
        {langData.Nav_home}
      </Link>
      <Link to={'post'} className={location.pathname === '/post' ? 'active' : ''}>
        {langData.Nav_createPost}
      </Link>
      <Link to={'about'} className={location.pathname === '/about' ? 'active' : ''}>
        {langData.Nav_about}
      </Link>
    </nav>
  );
};

export default Nav;
