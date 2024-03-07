import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Style/Leftswipe.css'

const leftswipe = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.left-swipe',
            start: 'top 100%',
            end: 'top -300%',
            scrub: 5,
            // Add other options here
          },
        });
    
        tl.to('.left-swipe h2', {
          transform: 'translateX(-600%)',
        });
      }, []);
  return (
    <>
      <div class="left-swipe">
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
            <h2>Make <span> Brands </span> With Us.</h2>
        </div>
    </>
  )
}

export default leftswipe
