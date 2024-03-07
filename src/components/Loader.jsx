// Loader.js
import React, { useEffect, useState } from 'react';
import './Style/Loader.css';
import gif from './gif/Bean.svg';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if the user has visited the page before
    const hasVisited = localStorage.getItem('hasVisited');

    // If the user has not visited, show the loader and mark the page as visited
    if (!hasVisited) {
      setTimeout(() => {
        setShowLoader(false);
        localStorage.setItem('hasVisited', 'true');
      }, 3000); // Adjust the duration of the loader animation as needed
    } else {
      // If the user has visited, hide the loader immediately
      setShowLoader(false);
    }
  }, []);

  return showLoader ? (
    <div className='loader load-animate'>
      <img src={gif} alt="" />
    </div>
  ) : null;
}

export default Loader;
