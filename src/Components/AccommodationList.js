import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../Styles/Accommodation.css';

function AccommodationList() {
  const [accommodations, setAccommodations] = useState([]);
  const [viewingActive, setViewingActive] = useState(true); // Default view: Active accommodations

  useEffect(() => {
    // Fetch accommodations based on availability status
    fetchAccommodations(viewingActive);
  }, [viewingActive]);

  const fetchAccommodations = async (isActive) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/accommodations?status=${isActive ? 'active' : 'inactive'}`
      );
      const data = await response.json();
      setAccommodations(data);
    } catch (error) {
      console.error('Error fetching accommodation data:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="button-container">
        <button
          onClick={() => setViewingActive(true)}
          className={`status-button ${viewingActive ? 'active' : ''}`}
        >
          Active Accommodations
        </button>
        <button
          onClick={() => setViewingActive(false)}
          className={`status-button ${!viewingActive ? 'inactive' : ''}`}
        >
          Inactive Accommodations
        </button>
      </div>

      <div className="detailed-breakdown">
        <table>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Room Number</th>
              <th>Occupied Rooms</th>
              <th>Available Rooms</th>
              <th>Total Guests</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accommodations.map((acc, index) => (
              <tr key={index}>
                <td>{acc.hotel_name}</td>
                <td>{acc.room_number}</td>
                <td>{acc.occupied_rooms}</td>
                <td>{acc.available_rooms}</td>
                <td>{acc.total_guests}</td>
                <td>{acc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccommodationList;

