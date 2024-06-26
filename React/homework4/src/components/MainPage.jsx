import React from 'react';
import { Link, Outlet } from 'react-router-dom';

 const MainPage = () => {
  return (
    <>

  <nav>
    <ul>
      <li>
        <Link to="/one">Page One</Link>
      </li>
      <li>
        <Link to="/two">Page Two</Link>
      </li>
    </ul>
  </nav>
  <Outlet/>
  </>
    )
  };

export default MainPage;