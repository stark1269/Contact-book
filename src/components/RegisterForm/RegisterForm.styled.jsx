import { Form as FormikForm, Field as FormikField } from "formik";
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
  font-size: 20px;
  color: #f5f5f583;
`;

export const Btn = styled.button`
  font-size: 22px;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 250ms linear, color 250ms linear;

  :hover {
    background-color: #569271;
    color: whitesmoke;
  }
`;