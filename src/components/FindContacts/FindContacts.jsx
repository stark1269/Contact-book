import { Label } from "components/ContactForm/ContactForm.styled";
import { Input } from "./FindContacts.styled";
import { setFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from "redux/selectors";

export const FindContacts = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector(getFilter);

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