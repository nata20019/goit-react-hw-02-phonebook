import PropTypes from 'prop-types';

export const ContactsItem = ({ contact }) => {
  const { name, number } = contact;
  return (
    <div className="p-group" role="group" aria-label="Basic example">
      <ul className="w-list">
        <li className="list" key={name}>
          <p className="list-element">{name}</p>
          <span className="value">{number}</span>
        </li>
      </ul>
    </div>
  );
};
ContactsItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
