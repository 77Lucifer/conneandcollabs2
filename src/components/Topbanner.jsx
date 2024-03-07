import React from 'react'
import './Style/Topbanner.css'
import img1 from './images/img1.png'
import { Link } from 'react-router-dom'
const Topbanner = () => {
  return (
    <>
      <div class="top-banner">
            <div class="top-inner">
                <div class="top-left">
                    <h1>Elevate <span class="first-span">Your Brand</span> Market Potential with Our Dynamic
                        Design,
                        Development and Marketing Solutions
                    </h1>
                    <Link to='/Contact'>
                    <button class="button-64" role="button">
                        <span class="text">Let's Talk</span>
                    </button>
                    </Link> 
                </div>
                <div class="top-right">
                    <img src={img1} alt="img1"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbanner
