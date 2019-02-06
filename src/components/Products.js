import React from 'react';
import '../styles/App.scss';
import '../styles/product.scss';
import ProductSpecs from './ProductSpecs';
import { Route, Redirect } from 'react-router-dom';
import Product from './Product';
import SubNav from './SubNav';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'kindergarten'
    }
  }
  updateActiveState(id) {
    this.setState({
      activeTab: id
    });
  }

  componentDidMount () {
    this.props.updateMainNavId(3);
    this.updateActiveState('kindergarten');
  }

  render() {
    const {match} = this.props;
    return (
      <div>
        <SubNav activeTabId={this.state.activeTab} url={match.url} menuItems={ProductSpecs}/>
        <Route path={`${match.path}/:productId`} render={
          (props) => {
            return (<Product updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
        <Redirect from="/programmes" to="/programmes/kindergarten" />
      </div>
    );
  }
}

export default Products;
