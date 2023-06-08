import styled from "styled-components";
import { AiOutlineDelete } from 'react-icons/ai';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  overflow: auto;
  width: calc((100% - 90px) / 6);
  min-height: 300px;
  border: 3px solid whitesmoke;;
  border-radius: 6px;
`;

export const Text = styled.p`
color: whitesmoke;
font-size: 32px;
font-weight: 500;
`;

export const Button = styled.button`
position: absolute;
bottom: 12px;
right: 12px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 54px;
height: 54px;
border: 1px solid red;
color: #ff00009a;
background-color: transparent;
transition: background-color 300ms linear, color 300ms linear;
:hover, :focus {
  color: white;
  background-color: #ff00009a;
}
`;

export const Icon = styled(AiOutlineDelete)`
font-size: 34px;
fill: currentColor;
`;