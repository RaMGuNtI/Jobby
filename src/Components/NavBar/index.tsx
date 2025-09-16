import { Link } from 'react-router-dom';
import { Logo, NavbarBox, NavItems } from './styledComp';

const NavBar = () => {
  return (
    <NavbarBox>
      <Logo src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
      <NavItems>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
      </NavItems>
      <button>Logout</button>
    </NavbarBox>
  );
};

export default NavBar;
