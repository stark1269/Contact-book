import { Item, Text, Button, Icon } from './ContactItem.styled';

export const ContactItem = ({ onDelete, item: { name, number, id } } ) => {
  return (
    <Item>
      <Text>{name}: {number}</Text>
      <Button onClick={() => onDelete(id)} type='button'><Icon /></Button>
    </Item>
  )
};