import React from 'react';

class BadgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanamount: 0,
    };
    this.handleChange =
    this.handleChange.bind(this);
  }
  async componentDidMount() {
    const { id } = this.props;

    const headers = new Headers();
    headers.set('X-WEB-KEY', 'Development');

    const response = await fetch(`https://api.bnext.io/partner_test/user?id=${ id }`, {
      method: 'GET',
      headers: headers
    });

    if (response.status === 404) {
      this.setState({ id: "Usuario no encontrado" });
    } else {
      const { data } = await response.json();
      this.setState(data);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if([e.target.name].value!=='') {
      console.log('no es un buen valor para este input');
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Button was clicked');
    const dataToSend = {
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      surname: document.querySelector('[name="surname"]').value,
      email: document.querySelector('[name="email"]').value,
      phone: document.querySelector('[name="phone"]').value,
      age: document.querySelector('[name="age"]').value,
      loan_amount: document.querySelector('[name="loanamount"]').value,
      loan_date: document.querySelector('[name="loandate"]').value,
      loan_weeks: document.querySelector('[name="loanweeks"]').value,
    };
    const headers = new Headers();
    headers.set('X-WEB-KEY', 'Development');
    headers.set('Content-Type', 'application/json');
    fetch(`https://api.bnext.io/partner_test/user/${dataToSend.id}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(dataToSend)
    })
      .then(response => console.log(response) )
  }



  render() {
    const formatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    });

    return (
        <div>
          <h1>Registro Nuevo</h1>
          <form >
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
              <label>Name</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                type="text" name="name" readonly
              />
            
            </div>

            <div className="form-group">
              <label>Surname</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="surname"
                value={this.state.surname}
                type="text" name="surname" readonly
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
                type="text" name="email" readonly
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

            <div className="form-group">
              <label>Loan amount</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="number"
                min="10"
                max="1000"
                name="loanamount"
                value={this.state.loanamount}
              />
              <br />
              {formatter.format(this.state.loanamount)}
            </div>
            <div className="form-group">
              <label>Loan date</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="date"
                name="loandate"
                value={this.state.loandate}
              />
            </div>
            <div className="form-group">
              <label>Loan weeks</label>
              <select
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="loanweeks"
                value={this.state.loanweeks}>
                <option>Select an option</option>
                {Array.from('x'.repeat(20)).map((_, index) => <option value={index+1}>
                  {index+1} semana/s
                </option>)}
              </select>
            </div>
            <div className="form-group">
              <label><a href="https://comparte.bnext.io/privacidad">Check</a></label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="checkbox"
                name="check"
                checked={this.state.check ? true : false}
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


