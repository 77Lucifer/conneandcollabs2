import React, { useEffect } from 'react';
import './Style/Partners.css';
import part1 from './images/partner1.jpeg';
import part2 from './images/partner2.png';
import part3 from './images/partner3.jpeg';
import part4 from './images/partner4.png';

const Partners = () => {

    return (
        <>
            <div className="partners">
                    <h1><span>Our</span> Partners</h1>
                <div id="abt" className="scroller">
                    <div class="scrol-in">
                        <img src={part1} alt="" />
                        <img src={part2} alt="" />
                        <img src={part3} alt="" />
                        <img src={part4} alt="" />
                    </div>
                    <div class="scrol-in">
                        <img src={part1} alt="" />
                        <img src={part2} alt="" />
                        <img src={part3} alt="" />
                        <img src={part4} alt="" />
                    </div>
                    <div class="scrol-in">
                        <img src={part1} alt="" />
                        <img src={part2} alt="" />
                        <img src={part3} alt="" />
                        <img src={part4} alt="" />
                    </div>
                </div>
            </div>











        </>
    );
};

export default Partners;
