import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
      <div className='n-porto'>
          
          <div className='n-left'>
              <div className='n-logo'>Sara</div>
              <span>tpggle</span>
          </div>
          <div className='n-right'>
              <div className='n-list'>
                  <ul>
                      <li>Home</li>
                      <li>Portfolio</li>
                      <li>Services</li>
                      <li>Testimonials</li>
                  </ul>
              </div>
              <button className='n-button'> Contact Me </button>
          </div>

    </div>
  )
}

export default Navbar