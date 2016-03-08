import React from 'react';
import Link from '../link';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="main-navigation" id="main-navigation">
        <ul>
          <li><Link url='#' caption='bio' /></li>
          <li><Link url='#' caption='blog' /></li>
          <li><Link url='#' caption='experiencia' /></li>
          <li><Link url='#' caption='proyectos' /></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
