import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const Schema = Yup.object({
  name: Yup.string().required('Required')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, 'Invalid by name'),
  number: Yup.string().required('Required')
    .matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/, 'Invalid by number'),
});

export const ContactForm = ({onSave}) => {
  return (
    <Formik
      initialValues={
        {
          name: '',
          number: '',
        }
    }
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        }, values.name);
        actions.resetForm();
      }
    }
    >
    <Form>
      <label>Name
        <Field
            name="name"
          ></Field>
          <ErrorMessage name="name" component="div"/>
      </label>
      <label>Number
        <Field
          name="number"
          type="tel"
          ></Field>
          <ErrorMessage name="number" component="div"/>
      </label>
      <button type="submit">Add contact</button>
    </Form>
    </Formik>
  )
};