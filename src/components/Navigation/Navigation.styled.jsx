import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
font-size: 38px;
color: whitesmoke;

&.active {
    color: #569271;
  };
`;