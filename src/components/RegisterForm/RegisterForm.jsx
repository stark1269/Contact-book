import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
      <Form>
        <label>
          Username
          <Field name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};