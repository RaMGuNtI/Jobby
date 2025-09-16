import { Link, useNavigate } from 'react-router-dom';
import { Logo, NavbarBox, NavItems } from './styledComp';
import Cookies from 'js-cookie';
const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('Token');
    navigate('/login');
  };
  return (
    <NavbarBox>
      <Logo src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
      <NavItems>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
      </NavItems>
      <button onClick={logout}>Logout</button>
    </NavbarBox>
  );
};

export default NavBar;
