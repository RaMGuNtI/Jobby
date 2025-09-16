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
import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import InputLabelBox from '../InputLabelBox';
// eslint-disable-next-line react-refresh/only-export-components
const LoginPage = () => {
  if (Cookies.get('Token')) {
    <Navigate to="/" />;
  }
  const { authStore } = useContext(MobXProviderContext);
  const { loginToJobby } = authStore;
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  console.log(typeof usernameInputRef);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  if (Cookies.get('Token') !== undefined) {
    return <Navigate to="/" />;
  }
  const submitCredentials = async () => {
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
  return (
    <LoginPageUI>
      <LoginBox>
        <LogoBox>
          <Logo src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
        </LogoBox>
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
        <div>
          <SubmitBox>
            <button onClick={submitCredentials}>Login</button>
          </SubmitBox>
          <ErrorMsg>{error}</ErrorMsg>
        </div>
      </LoginBox>
    </LoginPageUI>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(LoginPage);
