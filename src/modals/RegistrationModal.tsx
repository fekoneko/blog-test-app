import { MouseEvent, useContext } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { GlobalContext } from '../contexts/GlobalContext';

const RegistrationModal = () => {
  const { setSearchParams, langData } = useContext(GlobalContext);

  const handleTipAction = (e: MouseEvent): void => {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set('m', 'l');
      return prev;
    });
  };

  return (
    <>
      <h1>{langData.RegistrationModal_header}</h1>
      <RegistrationForm />
      <p>
        {langData.RegistrationModal_tip}{' '}
        <a href="#" onClick={handleTipAction}>
          {langData.RegistrationModal_tipAction}
        </a>
      </p>
    </>
  );
};
export default RegistrationModal;
