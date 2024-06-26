import React from 'react';
import { Link, Outlet } from 'react-router-dom';

 const MainPage = () => {
  return (
    <>
<h1>Main Page</h1>
  <nav>
    <ul>
      <li>
        <Link to="/one">Home page</Link>
      </li>
      <li>
        <Link to="/two">About us</Link>
      </li>
    </ul>
  </nav>
  <Outlet/>
  </>
    )
  };

export default MainPage;