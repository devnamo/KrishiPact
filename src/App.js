/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FarmerDashboard from './components/FarmerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import ContractManager from './components/ContractManager';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/farmer" element={<FarmerDashboard />} />
                <Route path="/buyer" element={<BuyerDashboard />} />
                <Route path="/contract" element={<ContractManager />} />
            </Routes>
        </Router>
    );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FarmerDashboard from './components/FarmerDashboard';
import BuyerDashboard from './components/BuyerDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
