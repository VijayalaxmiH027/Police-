import React from 'react';
import TodayDetails from './TodayDetails'; // Assuming you have a TodayDetails component
import UserDetails from './UserDetails'; // Assuming you have a UserDetails component
import '../Styles/Dashboard.css'; // Import external CSS for styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Section: Today's Details */}
      <TodayDetails />

      {/* Right Section: User Details */}
      <UserDetails />
    </div>
  );
};

export default Dashboard;
