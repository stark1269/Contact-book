import styled from "styled-components";
import { AiOutlineDelete } from 'react-icons/ai';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  padding: 12px;
  overflow: auto;
  width: calc((100% - 90px) / 6);
  min-height: 280px;
  border-radius: 6px;
  background-color: #232323;
`;

export const Text = styled.p`
color: #f5f5f575;
font-size: 22px;
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
border: 1px solid #ffae009a;
color: #ffae009a;
background-color: transparent;
transition: background-color 300ms linear, color 300ms linear;
:hover, :focus {
  color: white;
  background-color: #ffae009a;
}
`;

export const Icon = styled(AiOutlineDelete)`
font-size: 34px;
fill: currentColor;
`;