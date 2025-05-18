import { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={name}
            onChange={this.handleChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            className="form-control"
            id="exampleInputPassword1"
            required
            value={number}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </Form>
    );
  }
}

export default Phonebook;
