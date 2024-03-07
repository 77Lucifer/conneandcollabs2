import React from 'react'
import webdesign from './images/webdesign2.jpg'
import marketing from './images/marketing2.jpg'
import development from './images/webdev2.jpg'
import Socialmedia from './images/Socialmedia.webp'
import content from './images/contentcreation.png'
// import { HashLink as Link } from 'react-router-hash-link';
import appdev from './images/appdev.webp'
import './Style/Page3.css'

const Page3 = () => {
    return (
        <>
            <div id='Service' class="page-3">
                <h1>What <span>We Provide</span></h1>
                <div class="page3-inner">
                    <div class="card-row1">
                        <a href="">
                            <div class="cards c-1">
                                <div class="on-card">
                                    <h3>Stunning And Creative
                                        <br /> Web Design
                                    </h3>
                                    <p>We analyze your business to design a website which increases conversion rates and
                                        produces positive results.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={webdesign} alt="de.defaultsigning" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="cards c-2">
                                <div class="on-card">
                                    <h3>Marketing</h3>
                                    <p>Our digital marketing strategy aims <br /> for one thing: results. We use an omni-channel
                                        approach to drive repeat traffic and increase customer loyalty.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={marketing} alt="ma.defaultrketing" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="cards c-5">
                                <div class="on-card">
                                    <h3>Content Creation</h3>
                                    <p>Evoke emotions through your content to create a stronger connection with your
                                        audience your brand's tone, values, and the preferences of your target audience.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={content} alt="" />
                            </div>
                        </a>
                    </div>
                    <div class="card-row2">
                        <a href="#">
                            <div class="cards c-4">
                                <div class="on-card">
                                    <h3>Social Media Management</h3>
                                    <p>We're more than just a marketing agency our mission is to amplify your brand's voice,
                                        captivate audiences, and drive unparalleled growth in the dynamic world of social
                                        media.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={Socialmedia} alt="" />
                            </div>
                        </a>
                        <a href="#">

                            <div class="cards c-3">
                                <div class="on-card">
                                    <h3>Web Development</h3>
                                    <p>We are dedicated to transforming <br /> your digital vision into a captivating reality.  As
                                        seasoned web development experts, websites that elevate your online presence and
                                        drive success.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={development} alt="" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="cards c-6">
                                <div class="on-card">
                                    <h3>App Development</h3>
                                    <p>Our dedicated team of developers specializes in turning ideas into sleek designs with seamless functionality user-friendly applications.</p>
                                    {/* <h4>Learn more</h4> */}
                                </div>
                                <img src={appdev} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="page3-button">
                    {/* <button class="button-64" role="button">
                        <span class="text">Read More</span>
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default Page3
