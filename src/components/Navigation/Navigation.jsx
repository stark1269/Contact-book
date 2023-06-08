import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link, Nav } from './Navigation.styled';
import { RiContactsBook2Line } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <Link to="/">
        <IoHome />
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <RiContactsBook2Line />
        </Link>
      )}
    </Nav>
  );
};