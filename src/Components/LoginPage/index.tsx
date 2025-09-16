import { useRef, useState } from 'react';
import {
  LoginPageUI,
  InputBox,
  Logo,
  UserCredentialBox,
  LoginBox,
  LogoBox,
  Input,
  SubmitBox,
  ErrorMsg,
} from './styledComp';
import { Navigate, useNavigate } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
// eslint-disable-next-line react-refresh/only-export-components
const LoginPage = () => {
  if (Cookies.get('Token')) {
    <Navigate to="/" />;
  }
  const { authStore } = useContext(MobXProviderContext);
  const { loginToJobby } = authStore;
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
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
          <InputBox>
            <label htmlFor="username">USERNAME</label>
            <Input
              ref={usernameInputRef}
              id="username"
              type="text"
              placeholder="Username"
            />
          </InputBox>
          <InputBox>
            <label htmlFor="password">PASSWORD</label>
            <Input
              ref={passwordInputRef}
              id="password"
              type="password"
              placeholder="Password"
            />
          </InputBox>
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
