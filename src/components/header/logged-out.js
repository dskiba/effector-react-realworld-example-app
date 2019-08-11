import React from 'react';
import { NavLink } from 'react-router-dom';

export const LoggedOut = () => (
  <>
    <NavLink to="/" className="header-nav-link">
      Home
    </NavLink>

    <NavLink to="/login" className="header-nav-link">
      Sign in
    </NavLink>

    <NavLink to="/register" className="header-nav-link">
      Sign up
    </NavLink>
  </>
);
