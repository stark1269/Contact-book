import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 18px;
`;

export const Link = styled(NavLink)`
font-size: 56px;
color: whitesmoke;

&.active {
    color: #569271;
  };
`;