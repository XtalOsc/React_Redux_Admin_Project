import React, {PropTypes} from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
      <p>Header</p>
      {this.props.children}
      </div>
    );//end return
  }//end render
}//end app

App.propTypes = {
  children: PropTypes.object.isRequired
};//end App.propTypes

export default App;
