import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './courseForm';

function setup(saves) {
  let props = {
    course: {},
    saving: saves,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };//end props

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };//end return
}//end setup()

describe('CourseForm via React TestUtils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });//end 'renders form and h1'

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });//end 'save button is labeled "Save" when not saving'

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });//end 'save button is labeled "Saving..." when saving'

});//end CourseForm via React TestUtils
