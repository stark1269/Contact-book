import { Div, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <Link to="/register">
        Register
      </Link>
      <Link to="/login">
        Login
      </Link>
    </Div>
  );
};