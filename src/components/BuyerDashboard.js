/*import React from 'react';
import { Link } from 'react-router-dom';
import './BuyerDashboard.css';  // Import the CSS file

const BuyerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Buyer Dashboard</h1>
      <input type="text" placeholder="Search Farmers..." className="search-bar" />
      
      <div className="dashboard-options">
        <Link to="/contract-form">
          <button className="btn">Create Contract</button>
        </Link>
        <Link to="/chatbot">
          <button className="btn">Chatbot</button>
        </Link>
      </div>
    </div>
  );
};

export default BuyerDashboard;*/

/*import React from 'react';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
    const farmers = [
        { name: 'Farmer 1', details: 'Details about Farmer 1' },
        { name: 'Farmer 2', details: 'Details about Farmer 2' },
        { name: 'Farmer 3', details: 'Details about Farmer 3' },
    ];

    return (
        <div className="buyer-dashboard">
            <h2>Welcome, Buyer!</h2>
            <div className="farmer-profiles">
                {farmers.map((farmer, index) => (
                    <div key={index} className="farmer-profile">
                        <h3>{farmer.name}</h3>
                        <p>{farmer.details}</p>
                    </div>
                ))}
            </div>
            <div className="dashboard-buttons">
                <button onClick={() => console.log('Make Contract')}>Make Contract</button>
                <button onClick={() => console.log('Chatbot')}>Chatbot</button>
            </div>
        </div>
    );
};

export default BuyerDashboard;*/

import React from 'react';
import './BuyerDashboard.css'; // Import the CSS file

const BuyerDashboard = () => {
    return (
        <div className="buyer-dashboard">
            <h2>Buyer Dashboard</h2>
            <div className="buyer-profile-card">
                <h3>Profile 1</h3>
                <p>Contact: 1234567890</p>
                <p>Location: City, Country</p>
            </div>
            <div className="buyer-profile-card">
                <h3>Profile 2</h3>
                <p>Contact: 0987654321</p>
                <p>Location: City, Country</p>
            </div>
            <div className="action-buttons">
                <button>Make Contract</button>
            </div>
            <div className="chatbot-toggle">
                <button className="chatbot-button">
                    <img src="/path-to-icon/toggle-icon.png" alt="Chatbot" />
                </button>
            </div>
        </div>
    );
};

export default BuyerDashboard;
