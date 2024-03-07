import React, { useEffect, useState } from 'react';
import './Style/Contact.css';
import Nav from './Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  let name, value;
  const postuserdata = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const Submitdata = async (e) => {
    e.preventDefault();
    const { Name, Email, Phone, Message } = userData;
    if (Name && Email && Phone && Message) {
      const res = await fetch(
        'https://connect-and-collabs-prod-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name,
            Email,
            Phone,
            Message,
          }),
        }
      );

      if (res) {
        setUserData({
          Name: '',
          Email: '',
          Phone: '',
          Message: '',
        });
        const notify = () =>
          toast.success('Submit Successfully', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        notify();
      }
    } else {
      toast.error(' Please Fill the form correctly!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const loadVismeForm = () => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (isFormVisible) {
      loadVismeForm();
    } else {
      // Cleanup script on hiding the form
      const existingScript = document.querySelector(
        'script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    }
  }, [isFormVisible]);

  return (
    <>
      <Nav />
      <div className="Contact-page">
        <button
          className="n-button"
          onClick={() => {
            setIsFormVisible(true);
            loadVismeForm();
          }}
        >
          <span>Show Form</span>
        </button>
        {isFormVisible && (
          <div
            className="visme_d"
            data-title="Website Contact Form"
            data-url="mxgpr6md-website-contact-form?fullPage=true"
            data-domain="forms"
            data-full-page="true"
            data-min-height="100vh"
            data-form-id="17821"
          ></div>
        )}
      </div>
    </>
  );
};

export default Contact;
