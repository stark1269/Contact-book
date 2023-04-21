import { Title, AfterTitle } from "./Section.styled";

export const Section = ({ children, title }) => {
  return (
    <section>
      {title === 'Phonebook' ? <Title>{title}</Title> : <AfterTitle>{title}</AfterTitle>}
      {children}
    </section>
  )
};