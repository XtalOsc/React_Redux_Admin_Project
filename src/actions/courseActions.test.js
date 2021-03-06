import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };//end expectedAction {}

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });//end it
  });//end describe createCourseSuccess
});//end describe Course Actions

//Testing thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  //performs clean up after each test is run
  afterEach(() => {
    nock.cleanAll();
  });//end afterEach

  it('Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    //Example of a call to nock. It will hit example.com and return the fake response that's hard coded below. Since we're hitting a mock API this step is skipped
    //nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, {body: { course: [{ id:1, firstName: 'Cory', lastName: 'House'}] }});

    //Note: This test will take a long time due to the hard coded delay in the API
    //arrange
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}] }}
    ];//end expectedActions

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      //assert
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();//tells Mocha async work is complete
    });//end .then()
  });//end it
});//end describe Async Actions
