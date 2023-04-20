export const Section = ({ children, title }) => {
  return (
    <section>
      {title === 'Phonebook' ? <h1>{title}</h1> : <h2>{title}</h2>}
      {children}
    </section>
  )
};