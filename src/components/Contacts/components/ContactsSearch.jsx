import { Component } from 'react';

export class ContactsSearch extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <p className="name-to-finde">Find contacts by name</p>
        <input
          type="text"
          className="form-control"
          placeholder="Search contact"
        />

        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
    );
  }
}
export default ContactsSearch;
