import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import logo from './images/logo.png';
import './Style/Nav.css';

const Nav = () => {
    const history = useNavigate();
    const location = useLocation();

    const burgerbar1 = useRef(null);
    const burgerbar2 = useRef(null);
    const burgerbar3 = useRef(null);
    const [togglebur, setToggleBur] = useState(1);
    const translate = useRef(null);

    const handleBtnClick = () => {
        if (togglebur === 1) {
            burgerbar1.current.classList.add('hamburger-animation1');
            burgerbar3.current.classList.add('hamburger-animation3');
            burgerbar2.current.style.display = 'none';
            translate.current.classList.add('translate');
            setToggleBur(0);
        } else {
            burgerbar1.current.classList.remove('hamburger-animation1');
            burgerbar3.current.classList.remove('hamburger-animation3');
            translate.current.classList.remove('translate');
            burgerbar2.current.style.display = '';
            setToggleBur(1);
        }
    };

    const [isSignedUp, setIsSignedUp] = useState(false);
    // const auth = getAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //             setIsSignedUp(true);
    //         } else {
    //             setUser(null);
    //             setIsSignedUp(false);
    //         }
    //     });
    //     return () => unsubscribe();
    // }, [auth]);

    // const handleLogout = () => {
    //     // const auth = getAuth();
    //     signOut(auth)
    //         .then(() => {
    //             setUser(null);
    //             setIsSignedUp(false);
    //             navigate.push('/'); // Redirect to home page after logout
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    const [clickedServiceLink, setClickedServiceLink] = useState(false);
    const [clickedAboutUsLink, setClickedAboutUsLink] = useState(false);
    const [clickedWork, setClickedWorkLink] = useState(false);

    const handleServiceLinkClick = () => {
        setClickedServiceLink(true);
        navigateToDefaultPage();
    };

    const handleAboutUsLinkClick = () => {
        setClickedAboutUsLink(true);
        navigateToDefaultPage();
    };

    const handleWorkLinkclick = () => {
        setClickedWorkLink(true);
        navigateToDefaultPage();
    };

    const navigateToDefaultPage = () => {
        navigate('/');
    };

    const showInfoToast = () => {
        const currentPath = location.pathname;

        if (clickedServiceLink && (currentPath === '/Freelancer' || currentPath === '/Signup' || currentPath === '/Contact')) {
            toast.info('Go to the default page and scroll down for Services', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setClickedServiceLink(false);
        }

        if (clickedAboutUsLink && (currentPath === '/Freelancer' || currentPath === '/Signup' || currentPath === '/Contact')) {
            toast.info('Go to the default page and scroll down learn more', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setClickedAboutUsLink(false);
        }

        if (clickedWork && (currentPath === '/Freelancer' || currentPath === '/Signup' || currentPath === '/Contact')) {
            toast.info('Go to the default page and scroll down learn more', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setClickedWorkLink(false);
        }
    };

    useEffect(() => {
        showInfoToast();
    }, [clickedServiceLink, clickedAboutUsLink, location.pathname]);

    return (
        <>
            <div className="nav">
                <a href="/">
                    <div className="nav-l">
                        <img className="magnet" src={logo} alt="logo" />
                    </div>
                </a>
                <div className="nav-r">
                    <div className="h-nav-h3" onClick={handleServiceLinkClick}>
                        <a href="#Service">
                        <h3>Services</h3>
                        <h3 className="s-h3">Services</h3>
                        </a>
                    </div>
                    <div className="h-nav-h3" onClick={handleAboutUsLinkClick}>
                        <a href="#about-us">
                            <h3>About us</h3>
                            <h3 className="s-h3">About us</h3>
                        </a>
                    </div>
                    <Link to="/Freelancer">
                        <div className="h-nav-h3">
                            <h3>Freelancer</h3>
                            <h3 className="s-h3">Freelancer</h3>
                        </div>
                    </Link>
                    <div className="h-nav-h3" onClick={handleServiceLinkClick}>
                        <a href="#work">
                            <h3>Work</h3>
                            <h3 className="s-h3">Work</h3>
                        </a>
                    </div>
                    <Link to="/Contact">
                        <div className="h-nav-h3">
                            <h3>Contact</h3>
                            <h3 className="s-h3">Contact</h3>
                        </div>
                    </Link>

                    {isSignedUp ? (
                        <button className="n-button log-btn" onClick={handleLogout}>
                            <span>Log Out</span>
                        </button>
                    ) : (
                        <Link to="/Signup">
                            <button className="n-button sign-in" role="button">
                                <span>Sign up</span>
                            </button>
                        </Link>
                    )}
                </div>
                <button id="hamburger-button" onClick={handleBtnClick} tabIndex="0" aria-label="Menu Button">
                    <span className="burger-bar" id="burger-bar1" ref={burgerbar1}></span>
                    <span className="burger-bar" id="burger-bar2" ref={burgerbar2}></span>
                    <span className="burger-bar" id="burger-bar3" ref={burgerbar3}></span>
                </button>
                <div className="mobiletoggle" ref={translate}>
                    <ul>
                        <li>
                            <div className="h-nav-h3" onClick={handleServiceLinkClick}>
                                <a href="#Service">
                                    <h3>Services</h3>
                                    <h3 className="s-h3">Services</h3>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="h-nav-h3" onClick={handleAboutUsLinkClick}>
                                <a href="#about-us" >
                                    <h3>About us</h3>
                                    <h3 className="s-h3">About us</h3>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="h-nav-h3">
                                <Link to="/Freelancer">
                                    <h3>Freelancer</h3>
                                    <h3 className="s-h3">Freelancer</h3>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="h-nav-h3" onClick={handleServiceLinkClick}>
                                <a href="#work">
                                    <h3>Work</h3>
                                    <h3 className="s-h3">Work</h3>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="h-nav-h3">
                                <Link to="/Contact">
                                    <h3>Contact</h3>
                                    <h3 className="s-h3">Contact</h3>
                                </Link>
                            </div>
                        </li>
                        {isSignedUp ? (
                            <button className="n-button log-btn" onClick={handleLogout}>
                                <span>Log Out</span>
                            </button>
                        ) : (
                            <Link to="/Signup">
                                <button className="n-button sign-in" role="button">
                                    <span>Sign up</span>
                                </button>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Nav;
