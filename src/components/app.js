import React, {PropTypes} from 'react';
import Header from './common/header';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
      <Header/>
      <br/>
      {this.props.children}
      </div>
    );//end return
  }//end render
}//end app

App.propTypes = {
  children: PropTypes.object.isRequired
};//end App.propTypes

export default App;
