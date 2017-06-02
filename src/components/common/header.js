import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './loadingDots';

const Header = () => {
  return(
    <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
    <LoadingDots interval={100} dots={20} />
    </nav>
  );//end return
};//end Header()

export default Header;
