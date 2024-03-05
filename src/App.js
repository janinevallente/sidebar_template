// App.js
import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home.jsx';
import Entries from './pages/Entries.jsx';
import Schedule from './pages/Schedule.jsx';
import Reports from './pages/Reports.jsx';
import Profile from './pages/Profile.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/entries" element={<Entries />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
