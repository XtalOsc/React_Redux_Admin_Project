import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };//end this.state
  }//end constructor

  render() {
    return (
    <div>
      <CourseForm
      allAuthors={[]}
      course={this.state.course}
      errors={this.state.errors} />
    </div>
    );//end return
  }//end render

}//end ManageCoursePage

ManageCoursePage.propTypes = {
course: PropTypes.object.isRequired
};//end ManageCoursePage.propTypes

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course
  };//end return
}//mapStateToProps

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };//end return
}//end mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
