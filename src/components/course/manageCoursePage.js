import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };//end this.state

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }//end constructor

  componentWillReceiveProps(nextProps) {
    //Has the course id changed
    if (this.props.course.id != nextProps.course.id) {
      //Needed to populate form when existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }//end if
  }//end componentWillReceiveProps

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }//end updateCourseState

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveCourse(this.state.course)
    .then(() => this.redirect());
  }//end saveCourse

  redirect() {
    this.setState({saving:false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }//end redirect

  render() {
    return (
      <div>
      <CourseForm
      allAuthors={this.props.authors}
      onChange={this.updateCourseState}
      onSave={this.saveCourse}
      course={this.state.course}
      errors={this.state.errors}
      saving={this.state.saving}
      />
      </div>
    );//end return
  }//end render
}//end ManageCoursePage

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};//end ManageCoursePage.propTypes

//Pull in the React Router context so router is avaliable on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};//end ManageCoursePage.contextTypes

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; //filter returns an array, so need to grab first one
  return null;
}//end getCourseById()

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; //from path '/course/:id'
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  //check to make sure one course exists
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };//end return
  });//end author function

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };//end return

}//mapStateToProps

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };//end return
}//end mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
