// Navbar.js

import React from 'react';
import './App.css'

const Navbar = () => {
  return (
    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <a className="navbar-brand" href="#">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25" alt="MDB Logo" loading="lazy" />
        </a>
        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input autoComplete="off" type="search" className="form-control rounded" placeholder='Search (ctrl + "/" to focus)' style={{ minWidth: '225px' }} />
          <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
        </form>
        <ul className="navbar-nav ms-auto d-flex flex-row">
          {/* Notification dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Some news</a></li>
              <li><a className="dropdown-item" href="#">Another news</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          {/* Add more navbar items */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
