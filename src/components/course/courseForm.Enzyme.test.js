import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './courseForm';

function setup(saves) {
  const props = {
    course: {},
    saving: saves,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };//end props

  return shallow(<CourseForm {...props} />);
}//end setup()

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Courses');
  });//end 'renders form and h1'

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });//end 'save button is labeled "Save" when not saving'

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });//end 'save button is labeled "Saving..." when saving'

});//end CourseForm via React TestUtils
