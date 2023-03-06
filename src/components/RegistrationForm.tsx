import { FormEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegistrationForm = () => {
  const { langData } = useContext(GlobalContext);
  const [username, setUsername] = useState<string>('');
  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [usernameFocus, setUsernameFocus] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<string>('');
  const [confirmValid, setConfirmValid] = useState<boolean>(false);
  const [confirmFocus, setConfirmFocus] = useState<boolean>(false);
  const [showAllHints, setShowAllHints] = useState<boolean>(false);

  const validateUsername = (): boolean => USERNAME_REGEX.test(username);
  const validatePassword = (): boolean => PASSWORD_REGEX.test(password);
  const validateConfirm = (): boolean => confirm === password;

  useEffect(() => setUsernameValid(validateUsername()), [username]);
  useEffect(() => setPasswordValid(validatePassword()), [password]);
  useEffect(() => setConfirmValid(validateConfirm()), [confirm, password]);

  useEffect(() => setShowAllHints(false), [usernameFocus, passwordFocus, confirmFocus]);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const curUsernameValid = validateUsername();
    const curPasswordValid = validatePassword();
    const curConfirmValid = validateConfirm();
    setUsernameValid(curUsernameValid);
    setPasswordValid(curPasswordValid);
    setConfirmValid(curConfirmValid);
    if (curUsernameValid && curPasswordValid && curConfirmValid) {
      // TODO
    } else {
      setShowAllHints(true);
      // TODO
    }
  };

  return (
    <form className="RegistrationForm styledForm" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="usernameInput">{langData.RegistrationForm_usernameLabel}</label>
        <input
          id="usernameInput"
          type="text"
          autoFocus
          placeholder={langData.RegistrationForm_usernamePlaceholder}
          autoComplete="off"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          aria-describedby="usernameHint"
          aria-invalid={usernameValid || !username ? 'false' : 'true'}
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
        />
      </fieldset>
      <p
        className={
          'inputHint' +
          ((showAllHints || usernameFocus) && username && !usernameValid ? '' : ' hidden')
        }
        id="usernameHint"
      >
        {langData.RegistrationForm_usernameHint}
      </p>

      <fieldset>
        <label htmlFor="passwordInput">{langData.RegistrationForm_passwordLabel}</label>
        <input
          id="passwordInput"
          type="password"
          placeholder={langData.RegistrationForm_passwordPlaceholder}
          autoComplete="off"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          aria-describedby="passwordHint"
          aria-invalid={passwordValid || !password ? 'false' : 'true'}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
      </fieldset>
      <p
        className={
          'inputHint' +
          ((showAllHints || passwordFocus) && password && !passwordValid ? '' : ' hidden')
        }
        id="passwordHint"
      >
        {langData.RegistrationForm_passwordHint}{' '}
        <span aria-label={langData.exclamationMarkName}>!</span>{' '}
        <span aria-label={langData.atMarkName}>@</span>{' '}
        <span aria-label={langData.hashtagName}>#</span>{' '}
        <span aria-label={langData.dollarSignName}>$</span>{' '}
        <span aria-label={langData.percentName}>%</span>
      </p>

      <fieldset>
        <label htmlFor="confirmInput">{langData.RegistrationForm_confirmLabel}</label>
        <input
          id="confirmInput"
          type="password"
          placeholder={langData.RegistrationForm_confirmPlaceholder}
          autoComplete="off"
          required
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
          aria-describedby="confirmHint"
          aria-invalid={confirmValid || !confirm ? 'false' : 'true'}
          onFocus={() => setConfirmFocus(true)}
          onBlur={() => setConfirmFocus(false)}
        />
      </fieldset>
      <p
        className={
          'inputHint' +
          ((showAllHints || confirmFocus) && confirm && !confirmValid ? '' : ' hidden')
        }
        id="confirmHint"
      >
        {langData.RegistrationForm_confirmHint}
      </p>

      <button type="submit">{langData.RegistrationForm_submit}</button>
    </form>
  );
};
export default RegistrationForm;
