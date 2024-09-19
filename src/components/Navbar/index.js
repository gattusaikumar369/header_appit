// Navbar.js
import React, { useState } from 'react'

import './index.css'; // Import the CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [databaseOpen, setDatabaseOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDatabase = () => setDatabaseOpen(!databaseOpen);

  return (
    <nav className="navbar">
     <div className='left-nav-cnt'>
      <div className="logo">
        <img src="https://workisy.com/uploaded-images/logo/pnyd1i5u2KOpKGk5XcajI6MShDnWHVkzU9PND19N.png" alt="Workisy Logo" className='nav-logo'/>
      </div>
      <ul className="nav-links-list">
        <li className='nav-list-item'>Post a job</li>
        <li onClick={toggleDatabase} className="nav-list-item">
          Candidate Database
          {databaseOpen && (
            <div className="database-dropdown">
              <ul>
                <li className='nav-list-item'> Searched Candidates</li>
                <li className='nav-list-item'>Saved Candidates</li>
                <li className='nav-list-item'>Unlocked Candidates</li>
              </ul>
            </div>
          )}
        </li>
        <li className='nav-list-item'>Reports</li>
        
      </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className='profile-name'>
          A
        </div>
         
        {menuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li className='nav-list-item'>Credits</li>
              <li className='nav-list-item'>Usage</li>
              <li className='nav-list-item'>Billing</li>
              <li className='nav-list-item'>Plans & Pricing</li>
              <li className='nav-list-item'>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
