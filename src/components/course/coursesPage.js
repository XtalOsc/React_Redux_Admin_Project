import React, {PropTypes} from 'react';

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
    alert(`Saving ${this.state.course.title}`);
  }//end onClickSave

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title} />
        <input
        type="submit"
        value="Save"
        onChange={this.onClickSave} />
      </div>
    );//end return
  }//end render
}//end CoursesPage

export default CoursesPage;
