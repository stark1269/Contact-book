import { Label } from "components/ContactForm/ContactForm.styled";
import { Input } from "./FindContacts.styled";
import { setFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from "redux/selectors";

export const FindContacts = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector(selectFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={stateFilter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Label>
  )
};