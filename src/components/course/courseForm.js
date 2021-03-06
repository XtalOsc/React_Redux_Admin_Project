import React , {PropTypes} from 'react';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Courses</h1>
      <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title} />

      <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId}
      defaultOption="Select Author"
      options={allAuthors}
      onChange={onChange}
      errors={errors.authorId} />

      <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category} />

      <TextInput
      name="length"
      label="Length"
      value={length}
      onChange={onChange}
      error={errors.length} />

      <input
      type="submit"
      disable={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave} />

    </form>
  );//end return
};//end CourseForm

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};//end CourseForm.propTypes

export default CourseForm;
