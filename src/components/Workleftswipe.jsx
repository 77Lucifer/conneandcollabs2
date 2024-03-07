import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Style/Workleftswipe.css'

const Workleftswipe = () => {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to('.work-left-swipe h2', {
          transform: 'translateX(-500%)',
          scrollTrigger: {
            trigger: '.work-left-swipe',
            start: 'top 200%',
            end: 'top -300%',
            scrub: 3,
            // Add other options here
          },
        });
      }, []);

  return (
    <>
        <div class="work-left-swipe">
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
            <h2>Our <span>Work.</span></h2>
        </div>

    </>
  )
}

export default Workleftswipe
