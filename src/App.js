import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import TodayDetails from './Components/TodayDetails';
import Header from './Components/Header';
import SuspectForm from './Components/SuspectForm';
import Footer from './Components/Footer';
import AccommodationList from './Components/AccommodationList';
import Profile from './Components/Profile'

const App = () => {
  const location = useLocation(); // Get the current location

  const isLoginPage = location.pathname === '/'; // Check if the current page is the login page

  return (
    <>
      {/* Render Header only if the current path is not '/' (login page) */}
      {!isLoginPage && <Header />}
      
      <div>
        {/* Main App Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/suspects" element={<SuspectForm />} />
          <Route path="/today-details" element={<TodayDetails />} />
          <Route path="/accommodationlist" element={<AccommodationList />} /> {/* Added the route for AccommodationList */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* Render Footer only if the current path is not '/' (login page) */}
      {!isLoginPage && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
