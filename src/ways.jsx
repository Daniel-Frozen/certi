import { 
  BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Starships from './Pages/Starships/Starships';
import Pilots from './Pages/Pilots/Pilots';

import React from 'react';


const Ways = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/starships' element={<Starships/>} />
          <Route path='/pilots' element={<Pilots/>} />
        </Routes>
      </div>
    </Router>
      
  );
};

export default Ways;
