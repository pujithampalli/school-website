import React from 'react';
import '../styles/App.scss';
import '../styles/facility.scss';


class Facility extends React.Component {
  componentDidMount() {
    this.props.updateActiveState('facility');
  }

  render() {
    return (
      <div className="facility">
        <p><strong>Play school</strong> education is the foundation of a child's learning path. Research shows that the skills, knowledge, aptitude and attitude that a child develops in the preschool years (between one to five years) will have a dramatic impact on their individual development when formal schooling begins and thereafter. Planet Kids has been at the forefront of this initiative for a decade now.</p>
        <p>Encouraging a child's preschool learning will promote his or her self esteem as well. A good pre-school is one that helps the child gain confidence by making learning fun and easy. It should also make a child a 'Learner for life'. Preschool education is also very important because it can give a child the competitive edge to make him/her live up to their maximum potential.</p>
        <p className="sub-heading">Celebrations</p>
        <p>All festival celebrations are a real fun affair at Planet Kids, be it Diwali, Eid, Christmas or Holi. The children also participate in large scale events like the Family carnivals, Sports Meet, Annual Cultural Day et cetera which give them an excellent platform to become more independent and street smart individuals.</p>
      </div>
    );
  }
}

export default Facility;
