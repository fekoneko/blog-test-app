import { MouseEvent, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import RegistrationForm from '../components/RegistrationForm';
import { GlobalContext } from '../contexts/GlobalContext';

const SignUpModal = () => {
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
      <Helmet>
        <title>{`${langData.SignUpModal_title} - ${langData.SiteName}`}</title>
      </Helmet>

      <h1>{langData.SignUpModal_header}</h1>
      <RegistrationForm />
      <p>
        {langData.SignUpModal_tip}{' '}
        <a href="#" onClick={handleTipAction}>
          {langData.SignUpModal_tipAction}
        </a>
      </p>
    </>
  );
};
export default SignUpModal;
