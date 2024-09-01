/*import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  // Import the CSS file

const FarmerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Farmer Dashboard</h1>
      <input type="text" placeholder="Search Buyers..." className="search-bar" />
      
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

export default FarmerDashboard;*/
/*import React from 'react';
import { useHistory } from 'react-router-dom';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
    const history = useHistory();

    const handleContractClick = () => {
        history.push('/contract-manager');
    };

    const handleChatbotClick = () => {
        // Implement chatbot logic here
    };

    return (
        <div className="farmer-dashboard">
            <h2>Available Buyers</h2>
            <div className="buyer-profiles">
                {/* Add profiles here }*//*
                <div className="buyer-profile">Buyer 1</div>
                <div className="buyer-profile">Buyer 2</div>
                <div className="buyer-profile">Buyer 3</div>
            </div>
            <button onClick={handleContractClick}>Make Contract</button>
            <button onClick={handleChatbotClick}>Chatbot</button>
        </div>
    );
};

export default FarmerDashboard;*/

/*import React from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
    const buyers = [
        { name: 'Buyer 1', details: 'Details about Buyer 1' },
        { name: 'Buyer 2', details: 'Details about Buyer 2' },
        { name: 'Buyer 3', details: 'Details about Buyer 3' },
    ];

    return (
        <div className="farmer-dashboard">
            <h2>Welcome, Farmer!</h2>
            <div className="buyer-profiles">
                {buyers.map((buyer, index) => (
                    <div key={index} className="buyer-profile">
                        <h3>{buyer.name}</h3>
                        <p>{buyer.details}</p>
                    </div>
                ))}
            </div>
            <div className="dashboard-buttons">
                <button onClick={() => console.log('Make Contract')}>Make Contract</button>
                <button onClick={() => console.log('Chatbot')}>Chatbot</button>
            </div>
        </div>
    );
};*/

import React from 'react';
import './FarmerDashboard.css'; // Import the correct CSS file

const FarmerDashboard = () => {
    const buyers = [
        { name: 'Buyer 1', details: 'Details about Buyer 1' },
        { name: 'Buyer 2', details: 'Details about Buyer 2' },
        { name: 'Buyer 3', details: 'Details about Buyer 3' },
    ];

    return (
        <div className="farmer-dashboard">
            <h2>Welcome, Farmer!</h2>
            <div className="buyer-profiles">
                {buyers.map((buyer, index) => (
                    <div key={index} className="buyer-profile">
                        <h3>{buyer.name}</h3>
                        <p>{buyer.details}</p>
                    </div>
                ))}
            </div>
            <div className="dashboard-buttons">
                <button className="contract-button" onClick={() => console.log('Make Contract')}>Make Contract</button>
                <button className="chatbot-button" onClick={() => console.log('Chatbot')}>Chatbot</button>
            </div>
        </div>
    );
};

export default FarmerDashboard;




