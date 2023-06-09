import { Formik } from 'formik';
import { Form, Label, Input, Button, Error } from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Notiflix from "notiflix";
import { selectContactsItems } from 'redux/contacts/selectors';

const Schema = Yup.object({
  name: Yup.string().min(3, 'Min of 3 chars').max(10, 'Max of 10 chars').required('Required'),
  number: Yup.string().required('Required')
    .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, 'Phone format 063-123-45-67'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

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
        if (contacts.some(value => value.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())) {
          Notiflix.Notify.failure(`${values.name} is already in contacts!`);
        } else {
          dispatch(addContact(values));
        }
        actions.resetForm();
      }
    }
    >
    <Form autoComplete='off'>
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
