import { Form as FormikForm, Field as FormikField, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 16px;
padding: 12px;
border-radius: 4px;
border: 1px solid gray;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
font-size: 18px;
font-weight: 500;
`;

export const Input = styled(FormikField)`
padding: 4px;
font-size: 14px;
border-radius: 4px;
border: 1px solid gray;
box-shadow: 4px 4px 6px 0 rgba(217,217,217,1);
`;

export const Button = styled.button`
font-size: 14px;
width: 100px;
border-radius: 4px;
border: 1px solid gray;
box-shadow: 4px 4px 6px 0 rgba(217,217,217,1);
transition: background-color 300ms linear, color 300ms linear;
:hover, :focus {
  background-color: #71A92C;
  color: white;
}
`;

export const Error = styled(ErrorMessage)`
color: red;
font-size: 14px;
`;