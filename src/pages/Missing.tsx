import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalContext } from '../contexts/GlobalContext';

const Missing = () => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="Missing" role="main">
      <Helmet>
        <title>{`${langData.Missing_title} - ${langData.SiteName}`}</title>
      </Helmet>

      <h1>{langData.Missing_header}</h1>
    </main>
  );
};

export default Missing;
