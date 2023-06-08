import PropTypes from 'prop-types';
import { Item, Text, Button, Icon } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>{name}: {number}</Text>
      <Button onClick={() => dispatch(deleteContact(id))} type='button'><Icon /></Button>
    </Item>
  )
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};