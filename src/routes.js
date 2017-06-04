import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Homepage from './components/home/homepage';
import AboutPage from './components/about/aboutPage';
import CoursesPage from './components/course/coursesPage';
import ManageCoursePage from './components/course/manageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
