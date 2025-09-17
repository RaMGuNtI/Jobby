import { useRef, useState } from 'react';
import {
  LoginPageUI,
  Logo,
  UserCredentialBox,
  LoginBox,
  LogoBox,
  SubmitBox,
  ErrorMsg,
} from './styledComp';
import { Navigate, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import Cookies from 'js-cookie';
import InputLabelBox from '../InputLabelBox';
import { useAuthStore } from '../../Hooks/CustomHooks';
const LoginPage = observer(() => {
  if (Cookies.get('Token')) {
    <Navigate to="/" />;
  }

  const authStore = useAuthStore();
  const { loginToJobby } = authStore;
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (Cookies.get('Token') !== undefined) {
    return <Navigate to="/" />;
  }

  const submitCredentials = async (): Promise<void> => {
    if (!usernameInputRef.current || !passwordInputRef.current) return;
    const response = await loginToJobby(
      usernameInputRef.current.value,
      passwordInputRef.current.value,
      setError
    );
    if (response) {
      navigate('/');
    }
  };

  const renderInputsBox = () => {
    return (
      <UserCredentialBox>
        <InputLabelBox
          label="USERNAME"
          id="username"
          placeHolder="Enter Username"
          ref={usernameInputRef}
          type="text"
        />
        <InputLabelBox
          label="PASSWORD"
          id="password"
          placeHolder="Enter Password"
          type="password"
          ref={passwordInputRef}
        />
      </UserCredentialBox>
    );
  };

  return (
    <LoginPageUI>
      <LoginBox>
        <LogoBox>
          <Logo src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
        </LogoBox>
        {renderInputsBox()}
        <div>
          <SubmitBox>
            <button onClick={submitCredentials}>Login</button>
          </SubmitBox>
          <ErrorMsg>{error}</ErrorMsg>
        </div>
      </LoginBox>
    </LoginPageUI>
  );
});

export default LoginPage;
