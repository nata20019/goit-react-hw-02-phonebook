import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: 100,
      }}
    >
      React homework template
      <Section title="Phonebook">
        <Phonebook />
      </Section>
    </div>
  );
};
