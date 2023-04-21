import PropTypes from 'prop-types';
import { Item, Text, Button, Icon } from './ContactItem.styled';

export const ContactItem = ({ onDelete, item: { name, number, id } } ) => {
  return (
    <Item>
      <Text>{name}: {number}</Text>
      <Button onClick={() => onDelete(id)} type='button'><Icon /></Button>
    </Item>
  )
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};