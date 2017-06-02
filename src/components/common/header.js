import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './loadingDots';

const Header = ({loading}) => {
  return(
    <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
    {" "}
    {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );//end return
};//end Header()

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}//end Header.propTypes

export default Header;
