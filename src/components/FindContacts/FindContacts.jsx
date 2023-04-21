import PropTypes from 'prop-types';
import { Label } from "components/ContactForm/ContactForm.styled";
import { Input } from "./FindContacts.styled";

export const FindContacts = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={onChange}
      />
    </Label>
  )
};

FindContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};