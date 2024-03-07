import React from 'react'
import './Style/Page4.css'
import cafe from './images/cafe.jpg'
import sg from './images/sg project.png'
import goldrock from './images/gold rock.png'
import naveen from './images/nveen.png'
import divaynshao from './images/divaynshao2.png'
import dhivansh from './images/dhivansh.png'

const Page4 = () => {
    return (
        <>
            <div class="page-4" id="work">
                <div class="page4-inner">
                    <div class="page4-row1">
                        <div class="project">
                            <img src={cafe} alt="Cafe website" />
                            <h4>aesthetics cafe website</h4>
                            <a href="https://aesthetics.cafe/" target="_blank">
                                <div class="page3-button"> <button class="button-64" role="button">
                                    <span class="text">View Website</span>
                                </button>
                                </div>
                            </a>
                        </div>
                        <div class="project">
                            <img src={sg} alt="sg construction website" />
                            <a href="https://thesgprojects.com/" target="_blank">
                                <h4>SG Projects is a leading construction company </h4>
                                <div class="page3-button"> <button class="button-64" role="button">
                                    <span class="text">View Website</span>
                                </button>
                                </div>
                            </a>
                        </div>
                        <div class="project">
                            <img src={goldrock} alt="" />
                            <h4>A Leading Brick Manufacturing Company </h4>
                            <a href="https://goldrockbricks.com/" target="_blank">
                                <div class="page3-button"> <button class="button-64" role="button">
                                    <span class="text">View Website</span>
                                </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="page4-row2">
                        <div class="project">
                            <img src={naveen} alt="Photographer" />
                            <a target='_blank' href="https://naveengandla.com/">
                            <h4>NaveenPhotographer Website</h4>
                            <div class="page3-button"> <button class="button-64" role="button">
                                <span class="text">View Website</span>
                            </button>
                            </div>
                            </a>
                        </div>
                        <div class="project">
                            <img src={divaynshao} alt="Portfolio website" />
                            <a href="https://abhinavsingh.xyz/">
                            <h4>Abhinav Singh Portfolio website</h4>
                            <div class="page3-button"> <button class="button-64" role="button">
                                <span class="text">View Website</span>
                            </button>
                            </div>
                            </a>
                        </div>
                        <div class="project">
                            <img src={dhivansh} alt="" />
                            <a href="https://dhivishdasari.com/">
                            <h4>Dhivish Dasari
                                Photographer</h4>
                            <div class="page3-button"> <button class="button-64" role="button">
                                <span class="text">View Website</span>
                            </button>
                            </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Page4