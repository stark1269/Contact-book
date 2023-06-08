import { Formik, } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Btn, Form, Input, Label } from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={
        {
          email: '',
          password: '',
        }
      }
      onSubmit={(value, { resetForm }) => {
        dispatch(logIn(value))
        resetForm();
      }}>
      <Form>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Btn type="submit">Log In</Btn>
      </Form>
    </Formik>
  );
};