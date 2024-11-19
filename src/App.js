import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Adjust the import path
import Signup from './Signup'; // Adjust the import path
import AIDiagnostics from './ai_diagnostics';
import DataManagement from './data_mangement';
import Footer from './Footer';
import Home from './Home';
import Features from './feature';
// import Navbar from './Navbar';
import RealTime from './real_time';
import './index.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai-diagnostics" element={<AIDiagnostics />} />
        <Route path="/data-management" element={<DataManagement />} />
        <Route path="/home" element={<Home />} />
        <Route path="/real-time" element={<RealTime />} />
        <Route path="/feature" element={<Features />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
