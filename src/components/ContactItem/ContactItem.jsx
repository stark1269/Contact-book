import { AiOutlineDelete } from 'react-icons/ai';

export const ContactItem = ({ onDelete, item: { name, number, id } } ) => {
  return (
    <li>
      <p>{name}: {number}</p>
      <button onClick={() => onDelete(id)} type='button'><AiOutlineDelete /></button>
    </li>
  )
};