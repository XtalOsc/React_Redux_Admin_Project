import React, {PropTypes} from 'react';
import Header from './common/header';
import {connect} from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
      <Header
        loading={this.props.loading}
      />
      <br/>
      {this.props.children}
      </div>
    );//end return
  }//end render
}//end app

App.propTypes = {
  children: PropTypes.object.isRequired
};//end App.propTypes

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};//end App.propTypes

function mapStateToProps(state, props) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };//end return
}//end mapStateToProps

export default connect(mapStateToProps)(App);
