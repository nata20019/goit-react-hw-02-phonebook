import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };

  render() {
    const { name, number } = this.props;

    return (
      <div className="p-group" role="group" aria-label="Basic example">
        <ul className="w-list">
          <li className="list" key="good">
            <p className="list-element">{name}</p>
            <span className="value">{number}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactsList;
