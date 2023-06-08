import { Form as FormikForm, Field as FormikField, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 12px;
width: 30%;
margin-bottom: 32px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
font-size: 18px;
font-weight: 500;
color: #f5f5f583;
`;

export const Input = styled(FormikField)`
padding: 6px;
font-size: 22px;
border-radius: 6px;
`;

export const Button = styled.button`
width: 150px;
font-size: 22px;
border-radius: 6px;
background-color: #606060;
transition: background-color 300ms linear, color 300ms linear;

:hover {
  background-color: #569271;
  color: whitesmoke;
}
`;

export const Error = styled(ErrorMessage)`
color: #ff00009a;
font-size: 18px;
`;