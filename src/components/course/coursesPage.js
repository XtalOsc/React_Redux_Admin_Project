import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };//end this.state

    this.onTitleChange= this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }//end constructor

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }//end onTitleChange

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }//end onClickSave

courseRow(course, index) {
  return <div key={index}>{course.title}</div>;
}//end courseRow
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title} />
        <input
        type="submit"
        value="Save"
        onClick={this.onClickSave} />
      </div>
    );//end return
  }//end render
}//end CoursesPage

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};//end CoursesPage.propTypes

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //courses from the reducer index
  };//end return
}//end mapStateToProps

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}//end mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//Alternative Export
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
