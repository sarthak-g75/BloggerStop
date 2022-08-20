import React from 'react'
import "./styles/navbar.css";
import loading from '../../src/loader.gif'
const Loader = () => {
  return (
    <div className='mid' >
        <img className='loader' src={loading} alt="" />
    </div>
  )
}

export default Loader