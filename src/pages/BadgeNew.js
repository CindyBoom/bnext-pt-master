import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';


class BadgeNew extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id:
        this.props.location.search ?
          new URLSearchParams(this.props.location.search).get('id') : 0
    };
  }

  render() {
    const { id } = this.state;

    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
          <div className="col-6">
            <Badge
             firstName="Cindy"
             lastName="Chavez"
             github="cindyboomcodes"
             jobTitle="Junior Developer"
             avatarUrl="https://s.gravatar.com/avatar/3ceb3ed11c163ff68db127f3ac3139ed?s=80"
             />
            </div>

            <div className="col-6">
              <BadgeForm id={id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
