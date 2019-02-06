import React from 'react';
import '../styles/App.scss';
import { Route, Redirect } from 'react-router-dom';
import Components from './common';
import SubNav from './SubNav';

class Infrastructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'facility1'
    }
    this.menuItems = [
      {
        id: 'facility1',
        name: 'Celebrations'
      },
      {
        id: 'facility2',
        name: 'Parental Involvement'
      }
    ]
  }
  updateActiveState(id) {
    this.setState({
      activeTab: id
    });
  }

  componentDidMount () {
    this.props.updateMainNavId(4);//products id
  }

  render() {
    const {match} = this.props;
    console.log(this.state.activeTab);
    return (
      <div>
        <SubNav activeTabId={this.state.activeTab} url={match.url} menuItems={this.menuItems}/>

        <Route path={`${match.path}/facility1`} render={
          (props) => {
            return (<Components.Facility updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
        <Route path={`${match.path}/facility2`} render={
          (props) => {
            return (<Components.Certification updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
        <Redirect from="/facilities" to="/facilities/facility1" />
      </div>
    );
  }
}

export default Infrastructure;
