// index.js or App.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createBrowserRouter and RouterProvider
import App from './App.jsx';
// import Freelancer from './components/Freelancer.jsx';
// import Contact from './components/Contact.jsx';
// import Signup from './components/Signup.jsx';
// import Login from './components/Login.jsx';
// import PrivacyPolicy from './components/PrivacyPolicy.jsx';
// import TermsConditions from './components/TermsConditions.jsx';
// import ReturnRefund from './components/ReturnRefund.jsx';
// import './index.css'
// import FreelancerProfile from './components/FreelancerProfile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // {
  //   path: '/Freelancer',
  //   element: <Freelancer />,
  // },
  // {
  //   path: '/Freelancer/:id',
  //   element: <FreelancerProfile />,
  // },

  // {
  //   path: '/Contact',
  //   element: <Contact />,
  // },
  // {
  //   path: '/Signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '/Login',
  //   element: <Login />,
  // },
  // {
  //   path: '/privacypolicy',
  //   element: <PrivacyPolicy />,
  // },
  // {
  //   path: '/termsconditions',
  //   element: <TermsConditions />,
  // },
  // {
  //   path: '/returnrefund',
  //   element: <ReturnRefund />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/Freelancer" element={<Freelancer />} />
          <Route path="/Freelancer/:username" component={FreelancerProfile} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/returnrefund" element={<ReturnRefund />} /> */}

        </Routes>
      </RouterProvider>
  </React.StrictMode>
);
