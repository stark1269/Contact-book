import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
display: flex;
gap: 16px;
`;

export const Link = styled(NavLink)`
font-size: 28px;
color: whitesmoke;

&.active {
    color: #569271;
  };
`;