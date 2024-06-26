import React from 'react';



import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MainPage from './components/MainPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/> } />         
          <Route path="one" element={<HomePage />} />
          <Route path="two" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


