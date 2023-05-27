import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShowDetails from './components/ShowDetails';
import ShowList from './components/Showlist';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';


function App() {
  return (
      <div>
        <Home />
        <Navbar />
        <hr />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/tv-shows/:showName" element={<ShowList />} />
          <Route path="/tv-shows/details/:showId" element={<ShowDetails />} />

        </Routes>
      </div>
  );
}

export default App;
