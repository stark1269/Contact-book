import { Form as FormikForm, Field as FormikField, ErrorMessage } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled(FormikField)`
  font-size: 22px;
  padding: 6px;
  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #f5f5f583;
`;

export const Span = styled.span`
  position: relative;
  ::after {
    content: '*';
    position: absolute;
    color: #ff00009a;
  }
`;

export const Btn = styled.button`
  font-size: 22px;
  padding: 6px;
  border-radius: 6px;
  background-color: #606060;
  transition: background-color 250ms linear, color 250ms linear;

  :hover {
    background-color: #569271;
    color: whitesmoke;
  }
`;

export const Error = styled(ErrorMessage)`
color: #ff00009a;
font-size: 18px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 2px;
  right: 4px;
  padding: 0;
  font-size: 24px;
  border: none;
  color: black;
  background-color: transparent;
`;
