import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }//end constructor

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }//end courseRow

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }//end redirectToAddCoursePage

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses = {courses} />
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
    courses: state.courses
  };//end return
}//end mapStateToProps

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };//end return
}//end mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//Alternative Export
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
