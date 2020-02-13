import React from 'react';

import './styles/Badge.css';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
      const firstName = "Cindy";
      const lastName = "Chavez";
      return (
      <div className="Badge">
        <div className= "Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="Badge__section-name">
          <img 
          className="Badge_avatar" 
          src={this.props.avatarUrl} 
          alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br/> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info"> 
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.github}</div>
        </div>
        <div className="Badge__footer">#bnext</div>
        </div>
      );
    }
}
export default Badge;