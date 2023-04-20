export const FindContacts = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
};