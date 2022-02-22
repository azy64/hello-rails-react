import React from "react"
import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom';
class NavBar extends React.Component {
  render () {
    return (
      <div>
    <ul>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink> |
        <NavLink to="/hello" activeclassname="active">
          greeting
        </NavLink>
    </ul>
  </div>
    );
  }
}

export default NavBar
