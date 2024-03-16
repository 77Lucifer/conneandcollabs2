import React, { useState } from 'react';
import './Style/Page4.css';
import cafe from './images/cafe.jpg';
import sg from './images/sg project.png';
import goldrock from './images/gold rock.png';
import naveen from './images/nveen.png';
import divaynshao from './images/divaynshao2.png';
import dhivansh from './images/dhivansh.png';
import kriya from './images/kriya-app.png';

const Page4 = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const projects = [
        { id: 1, image: cafe, title: 'aesthetics cafe', category: 'Web Development', link: 'https://aesthetics.cafe/' },
        { id: 2, image: sg, title: 'SG Projects is a leading construction company', category: 'Web Development', link: 'https://thesgprojects.com/' },
        { id: 3, image: goldrock, title: 'A Leading Brick Manufacturing Company', category: 'Web Development', link: 'https://goldrockbricks.com/' },
        { id: 4, image: naveen, title: 'Naveen Photographer', category: 'Web Development', link: 'https://naveengandla.com/' },
        { id: 5, image: divaynshao, title: 'Abhinav Singh', category: 'Web Development', link: 'https://abhinavsingh.xyz/' },
        { id: 6, image: dhivansh, title: 'Dhivish Dasari', category: 'Web Development', link: 'https://dhivishdasari.com/' },
        { id: 7, image: kriya, title: 'Kriya The Creators App', category: 'App Development', link: 'https://creatorsapp.in/' }
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Filter projects based on selected category
    const filteredProjects = selectedCategory ? projects.filter(project => project.category.includes(selectedCategory)) : projects;

    return (
        <>
            <div className="page-4" id="work">
                <div className="categerios">
                    <span onClick={() => handleCategoryClick(null)}>All</span>
                    <span onClick={() => handleCategoryClick('Web Development')}>Web Development</span>
                    <span onClick={() => handleCategoryClick('App Development')}>App Development</span>
                    <span onClick={() => handleCategoryClick('Ui/Ux Development')}>Ui/Ux Development</span>
                    <span onClick={() => handleCategoryClick('Content Creation')}>Content Creation</span>
                    <span onClick={() => handleCategoryClick('Graphic Designing')}>Graphic Designing</span>
                </div>
                <div className="page4-inner">
                    <div className="page4-row1">
                        {filteredProjects.map(project => (
                            <div id='p-hover' className={`project fade-in`} key={project.id} data-title={project.title} data-category={project.category}>
                                <img src={project.image} alt={project.title} />
                                <h4>{project.title}</h4>
                                <a href={project.link} target="_blank">
                                    <div className="page3-button">
                                        <button className="button-64" role="button">
                                            <span className="text">View Website</span>
                                        </button>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page4;
