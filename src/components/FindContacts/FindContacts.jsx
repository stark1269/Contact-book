import { Label } from "components/ContactForm/ContactForm.styled";
import { Input } from "./FindContacts.styled";
import { setFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from 'react-redux';

export const FindContacts = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Label>
  )
};