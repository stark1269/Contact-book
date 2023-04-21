import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Label, Input, Button, Error } from './ContactForm.styled';
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
      <Label>Name
        <Input name="name" />
        <Error name="name" component="div"/>
      </Label>
      <Label>Number
        <Input name="number" type="tel" />
        <Error name="number" component="div"/>
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
    </Formik>
  )
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};