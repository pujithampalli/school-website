import React from 'react';
import '../styles/App.scss';
import '../styles/facility.scss';


class Certification extends React.Component {
  componentDidMount() {
    this.props.updateActiveState('certifications');
  }

  render () {
    return (
      <div class="facility">
        <p>We at Play School agree that your child is your most precious treasure and nurturing them in a safe environment is an absolute must. To ensure that the child at our facility is absolutely safe there are various safety measures taken.</p>
        <p className="sub-heading">Parental Involvement</p>
        <p>Any early childhood educator would agree that pre-schooling is not complete without a tripartite agreement. The child is at the apex of the triangle with the Parent & the school at the base. Hence parents play an important part in their child’s schooling. Regular parental guidance programmes on various topics such as child nutrition, child rearing, dealing with behavioural problems in children are some of the topics dealt with by experts associated with the school in these fields. One to one interaction with parents, active & enthusiastic participation of parents in activities like the sing-along sessions, carnivals, sports day, Annual day make it a very fulfilling experience for every parent. Each child is assessed every term & has his/her own record of growth & progress.</p>
        <p>The themes conducted in the classroom will be regularly intimated through circulars as well as the work books. Regular Parent Teacher Interaction Forums (PTIF) also ensure that the child's progress is closely monitored.</p>
      </div>
    );
  }
}
export default Certification;
