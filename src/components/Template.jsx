import React from 'react'
import logo from '/image/e-commerce.png' 
import '../App.css'

function Template() {
  return (
    <div className="card">
      <h4>Data Loading...</h4>
      <img
        src={logo}
        alt="Loading"
        style={{ height: '150px', objectFit: 'contain' }}
      />
      <p>₹ xx,xxx</p>
    </div>
  )
}

export default Template