import React, {PropTypes} from 'react';
import CourseListRow from './courseListRow';

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Video</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {courses.map(course =>
      <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );//end return
};//end CourseList

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};//end CourseList.propTypes

export default CourseList;
