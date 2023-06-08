import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  gap: 18px;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: whitesmoke;
`;

export const Btn = styled.button`
  font-size: 18px;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 250ms linear, color 250ms linear;

  :hover {
    background-color: #ff00009a;
    color: whitesmoke;
  }
`;