import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { type JSX } from 'react';
interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const Token = Cookies.get('Token');
  if (Token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
