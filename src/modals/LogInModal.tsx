import { MouseEvent, useContext } from 'react';
import LogInForm from '../components/LogInForm';
import { GlobalContext } from '../contexts/GlobalContext';

const LogInModal = () => {
  const { setSearchParams, langData } = useContext(GlobalContext);

  const handleTipAction = (e: MouseEvent): void => {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set('m', 'r');
      return prev;
    });
  };

  return (
    <>
      <h1>{langData.LogInModal_header}</h1>
      <LogInForm />
      <p>
        {langData.LogInModal_tip}{' '}
        <a href="#" onClick={handleTipAction}>
          {langData.LogInModal_tipAction}
        </a>
      </p>
    </>
  );
};
export default LogInModal;
