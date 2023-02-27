import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type NavProps = {
  location: Location;
};

const Nav = ({ location }: NavProps) => {
  const { langData } = useContext(GlobalContext);

  return (
    <nav className="Nav">
      <Link
        to={`${(import.meta as any).env.BASE_URL}`}
        className={location.pathname === '/' ? 'active' : ''}
      >
        {langData.Nav_home}
      </Link>
      <Link
        to={`${(import.meta as any).env.BASE_URL}post`}
        className={location.pathname === '/post' ? 'active' : ''}
      >
        {langData.Nav_createPost}
      </Link>
      <Link
        to={`${(import.meta as any).env.BASE_URL}about`}
        className={location.pathname === '/about' ? 'active' : ''}
      >
        {langData.Nav_about}
      </Link>
    </nav>
  );
};

export default Nav;
