import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Btn, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          password: '',
        }
      }
      onSubmit={(value, { resetForm }) => {
        dispatch(register(value))
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <Label>
          Username
          <Input name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Formik>
  );
};