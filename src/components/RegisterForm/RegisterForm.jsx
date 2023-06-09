import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Btn, Button, Error, Form, Input, Label, Span, Wrapper } from './RegisterForm.styled';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Schema = Yup.object({
  name: Yup.string().min(3, 'Min of 3 chars').max(10, 'Max of 10 chars').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Min of 8 chars')
    .matches(/[a-zA-Z]/, 'Add at least one Latin letter').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          password: '',
        }
      }
      validationSchema={Schema}
      onSubmit={(value, { resetForm }) => {
        dispatch(register(value))
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <Label>
          <Span>Username</Span>
          <Input name="name" />
          <Error name="name" component="div" />
        </Label>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" />
          <Error name="email" component="div" />
        </Label>
        <Label>
          <Span>Password</Span>
          <Wrapper>
            <Input type={showPass ? 'password' : 'text'} name="password" />
            <Button onClick={() => setShowPass(!showPass)} type='button'>{showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</Button>
          </Wrapper>
          <Error name="password" component="div" />
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Formik>
  );
};