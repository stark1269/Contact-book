import styled from "styled-components";
import { AiOutlineDelete } from 'react-icons/ai';

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: baseline;
gap: 8px;
:after {
  content: "";
  height: 1px;
  background-color: grey;
  flex-grow: 1;
}
`;

export const Text = styled.p`
font-weight: 500;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
order: 1;
border-radius: 50%;
width: 34px;
height: 34px;
border: 1px solid red;
box-shadow: 2px 2px 6px 0px rgba(209,132,132,1);
color: red;
background-color: transparent;
transition: background-color 300ms linear, color 300ms linear;
:hover, :focus {
  color: white;
  background-color: red;
}
`;

export const Icon = styled(AiOutlineDelete)`
fill: currentColor;
`;