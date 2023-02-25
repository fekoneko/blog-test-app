import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Missing = () => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="Missing" role="main">
      <h1>{langData.Missing_header}</h1>
    </main>
  );
};

export default Missing;
