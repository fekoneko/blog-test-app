import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalContext } from '../contexts/GlobalContext';

const About = () => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="About" role="main">
      <Helmet>
        <title>{`${langData.About_title} - ${langData.SiteName}`}</title>
      </Helmet>

      <figure className="profile">
        <img src="https://avatars3.githubusercontent.com/u/55813967" alt="" />
        <figcaption>
          @fekoneko{' '}
          <span style={{ color: '#808080' }}>
            (<a href="https://github.com/fekoneko">GitHub</a>)
          </span>
        </figcaption>
      </figure>
    </main>
  );
};

export default About;
