import React from 'react';

class BadgeForm extends React.Component {
  state = {};

  async componentDidMount() {
    const { id } = this.props;

    const headers = new Headers();
    headers.set('X-WEB-KEY', 'Development');

    const response = await fetch(`https://api.bnext.io/partner_test/user?id=${ id }`, {
      method: 'GET',
      headers
    });

    if (response.status === 404) {
      this.setState({ notFound: true });
    } else {
      const { data } = await response.json();
      this.setState(data);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick(e) {
    console.log('Button was clicked');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Button was clicked');
  }

  render() {
    return this.state.notFound ?
      (
        <div className="not-found d-flex justify-content-center align-items-center">
          <h1>Not Found</h1>
        </div>
      ) :
      (
        <div>
          <h1>Registro Nuevo</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>ID</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="id"
                value={this.state.id}
              />
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="surname"
                value={this.state.surname}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="phone"
                value={this.state.phone}
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="age"
                value={this.state.age}
              />
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      );
  }
}

export default BadgeForm;


