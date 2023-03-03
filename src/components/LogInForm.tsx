import { FormEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const LogInForm = () => {
  const { langData } = useContext(GlobalContext);
  const [username, setUsername] = useState<string>('');
  const [usernameValid, setUsernameValid] = useState<boolean>(true);
  const [usernameFocus, setUsernameFocus] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  useEffect(() => {
    if (!usernameValid) setUsernameValid(true); // will be actually checked on submit
  }, [username]);

  useEffect(() => {
    if (!passwordValid) setPasswordValid(true); // will be actually checked on submit
  }, [password]);

  const validateForm = async (): Promise<[usernameValid: boolean, passwordValid: boolean]> => {
    // TODO check on server
    return [false, false];
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const [curUsernameValid, curPasswordValid] = await validateForm();
    setUsernameValid(curUsernameValid);
    setPasswordValid(curPasswordValid);
    if (curUsernameValid && curPasswordValid) {
      // TODO
    } else {
      // TODO
    }
  };

  return (
    <form className="LogInForm styledForm" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="usernameInput">{langData.LogInForm_usernameLabel}</label>
        <input
          id="usernameInput"
          type="text"
          placeholder={langData.LogInForm_usernamePlaceholder}
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
      {usernameFocus && username && !usernameValid ? (
        <p className="inputHint" id="usernameHint">
          {langData.LogInForm_usernameHint}
        </p>
      ) : (
        ''
      )}

      <fieldset>
        <label htmlFor="passwordInput">{langData.LogInForm_passwordLabel}</label>
        <input
          id="passwordInput"
          type="password"
          placeholder={langData.LogInForm_passwordPlaceholder}
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
      {passwordFocus && password && !passwordValid ? (
        <p className="inputHint" id="passwordHint">
          {langData.LogInForm_passwordHint}
        </p>
      ) : (
        ''
      )}

      <button type="submit">{langData.LogInForm_submit}</button>
    </form>
  );
};
export default LogInForm;
