/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = (role) => {
        if (role === 'farmer') {
            navigate('/farmer');
        } else if (role === 'buyer') {
            navigate('/buyer');
        }
    };

    return (
        <div className="landing-page">
             
            <h1>Welcome to KrishiPact</h1>
            <button onClick={() => handleClick('farmer')}>Farmer</button>
            <button onClick={() => handleClick('buyer')}>Buyer</button>
        </div>
    );
};

export default LandingPage;*/

/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
    const navigate = useNavigate();

    const goToDashboard = (type) => {
        if (type === 'farmer') {
            navigate('/farmer-dashboard');
        } else {
            navigate('/buyer-dashboard');
        }
    };

    return (
        <div className="landing-page">
            <header className="landing-header">
                <img src="/components/agripact.png" alt="KrishiPact Logo" className="landing-logo" />
                <h1>Welcome to KrishiPact</h1>
            </header>
            <div className="landing-content">
                <div className="option" onClick={() => goToDashboard('farmer')}>
                    <img src="/path-to-images/farmer-option.png" alt="Farmer" />
                    <h2>Farmer</h2>
                </div>
                <div className="option" onClick={() => goToDashboard('buyer')}>
                    <img src="/path-to-images/buyer-option.png" alt="Buyer" />
                    <h2>Buyer</h2>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;*/

/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
    const navigate = useNavigate();

    const goToDashboard = (type) => {
        if (type === 'farmer') {
            navigate('/FarmerDashboard');
        } else {
            navigate('/BuyerDashboard');
        }
    };

    return (
        <div className="landing-page">
            <header className="landing-header">
                { <img src="/agripact.png" alt="KrishiPact Logo" className="landing-logo" /> }
                <h1>Welcome to KrishiPact</h1>
            </header>
            <div className="landing-content">
                <div className="option" onClick={() => goToDashboard('farmer')}>
                    {/* { <img src="/farmer-option.png" alt="Farmer" /> } *//*
                    <h2>Farmer</h2>
                </div>
                <div className="option" onClick={() => goToDashboard('buyer')}>
                    {/* { <img src="/buyer-option.png" alt="Buyer" /> } */
                    /*<h2>Buyer</h2>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const goToDashboard = (type) => {
        if (type === 'farmer') {
            navigate('/farmer-dashboard');
        } else {
            navigate('/buyer-dashboard');
        }
    };

    return (
        <div className="landing-page">
            <header className="landing-header">
                <img src="/agripact.png" alt="KrishiPact Logo" className="landing-logo" />
                <h1>Welcome to KrishiPact</h1>
            </header>
            <div className="landing-content">
                <div className="option" onClick={() => goToDashboard('farmer')}>
                    <h2>Farmer</h2>
                </div>
                <div className="option" onClick={() => goToDashboard('buyer')}>
                    <h2>Buyer</h2>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
