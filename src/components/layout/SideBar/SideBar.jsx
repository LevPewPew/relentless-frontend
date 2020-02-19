import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <nav className="SideBar">
      <Link
        to="/"
      >
        HOME LINK
      </Link>
      <Link
        to="/quiz"
      >
        QUIZ LINK
      </Link>
      <Link
        to="/editor"
      >
        EDITOR LINK
      </Link>
    </nav>
  )
}

export default SideBar;
