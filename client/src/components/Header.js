import React, { Component } from 'react'
import { Route, NavLink  } from 'react-router-dom'
import DisplayPosts from './DisplayPosts'
import './App.css'

class Header extends Component {
  render() {
    return (
      <div>
        {/* <UpdateBlocker> */}
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="nav-selected"
        >
        All


        </NavLink>
        <NavLink
          to="/react"
          className="nav-link"
          activeClassName=" nav-selected">
        React
        </NavLink>
        <NavLink
          to="/redux"
          className="nav-link"
          activeClassName="nav-selected">
        Redux
        </NavLink>
        <NavLink
          to="/udacity"
          className="nav-link"
          activeClassName="nav-selected">
        Udacity
        </NavLink>
        {/* </UpdateBlocker> */}
        <hr/>

 
      </div>
    );
  }
}

export default Header
