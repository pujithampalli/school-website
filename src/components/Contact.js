import React from 'react';
import '../styles/App.scss';
import '../styles/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h4 className="sub-heading">Contact us</h4>
        <div className="cards">
          <div className="card m10">
            <div>PLAY SCHOOL</div>
            <div><img src={require('../images/logo-2.png')} alt=""/></div>
            <div>Dr. No, ROAD,</div>
            <div>COLONY, CITY</div>
            <div>STATE</div>
            <div>COUNTRY</div>
            <div>PHONE: +1-(888)888-8888</div>
            <div>EMAIL: <a href="mailto:example@gmail.com?Subject=Play%20School" target="_blank" rel="noopener noreferrer">example@gmail.com</a></div>
          </div>
          <div className="card m10">
            <div>PLAY SCHOOL FRANCHISE</div>
            <div><img src={require('../images/logo-2.png')} alt=""/></div>
            <div>Dr. No, ROAD,</div>
            <div>COLONY, CITY</div>
            <div>STATE</div>
            <div>COUNTRY</div>
            <div>PHONE: +1-(888)888-8888</div>
            <div>EMAIL: <a href="mailto:example@gmail.com?Subject=Play%20School" target="_blank" rel="noopener noreferrer">example@gmail.com</a></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;
