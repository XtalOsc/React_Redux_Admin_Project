import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Homepage from './components/home/homepage';
import AboutPage from './components/about/aboutPage';
import CoursesPage from './components/course/coursesPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
