// App.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Loader from './components/Loader';
// import Nav from './components/Nav';
// import Topbanner from './components/Topbanner';
// import Leftswipe from './components/Leftswipe';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import Workleftswipe from './components/Workleftswipe';
// import Page4 from './components/Page4';
// import Partners from './components/Partners';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Freelancer from './components/Freelancer';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsConditions from './components/TermsConditions';
// import ReturnRefund from './components/ReturnRefund';
// import FreelancerProfile from './components/FreelancerProfile';

const App = () => {
  // useEffect(() => {
  //  
  //   const servicesSection = document.getElementById('services-section');
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   window[['CHIPBOT','DOMAIN','ID'].join('_')] = 'dom_fMzJDBSskPF-';
  //       !function(c,h,i,p,b,o,t){o=h.createElement(i),t=h.getElementsByTagName(i)[0],
  //         o.async=1,o.src="https://static.getchipbot.com/edge/p/chipbot.js",
  //       t.parentNode.insertBefore(o,t)}(window,document,"script");
  // }, []);

  return (
    <>
      {/* <Loader />
      <Nav />
      <Topbanner />
      <Leftswipe />
      <Page2 />
      <Page3 />
      <Workleftswipe />
      <Page4 />
      <Partners />
      <Footer /> */}

      <Routes>
        {/* <Route path="/Freelancer" element={<Freelancer />} />
        <Route path="/Freelancer/:username" element={<FreelancerProfile />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/returnrefund" element={<ReturnRefund />} /> */}
      </Routes>
      <div className="temp-div">
      <h1>Talk To me about my salary </h1>
        <h2>Then This website will work . . . . . . . .</h2>
      </div>
    </>
  );
};

export default App;
