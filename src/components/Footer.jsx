import React, { useEffect } from 'react'
import './Style/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>

            <div class="footer">
                <div class="footer-inner">
                    <ul>
                        <h2>Menu</h2>
                        <a href="index.html">  <li>Home</li> </a>
                        <a href="#about-us"> <li>About us</li> </a>
                        <li>Services</li>
                        <li>Our Work</li>
                    </ul>
                    <ul>
                        <h2>Services</h2>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Marketing</li>
                        <li>Social Media Management</li>
                        <li>Content Creation</li>
                    </ul>

                    <ul>
                        <h2>Contact</h2>
                        <li>Let's Shedule A Call ⬇</li>
                        <li><i class="fa-solid fa-phone"></i>+91 9380734507</li>
                        <li className='g-mail'> <i class="fa-solid fa-envelope"></i>connectandcollabs@gmail.com</li>
                    </ul>
                    <ul >
                        {/* <h2>Connect With Social Media</h2> */}
                        <h2>Our Social Links</h2>
                        <a href="https://instagram.com/connectandcollabs.in">
                            <li><i class="fa-brands fa-instagram"></i> Instagram</li></a>
                        <a href="https://www.linkedin.com/company/connectandcollabs/">
                            <li className='link-den'><i class="fa-brands fa-linkedin"></i>Linkedin</li></a>
                    </ul>

                </div>
            </div>
                <div class="f-copyright"><p>© Copyright Connect And Collabs. All Rights Reserved 2024</p>
                <div className="conditions">
                    <span>shipping & delivery </span>
                <a href="/privacypolicy"><span>Privacy Policy</span></a>
                 <a href="/termsconditions">   <span>Terms & conditions</span></a>
                  <a href="/returnrefund">  <span>Return & Refunds</span> </a>
                   <a href="/Contact">  <span>Contact Us</span> </a> 
                </div>
                </div>
        {/* <a href="https://wa.me/919380734507" target='_blank'>
            <div class="message"><i class="fa-brands fa-whatsapp"></i></div>
        </a> */}


        </>
    )
}

export default Footer
