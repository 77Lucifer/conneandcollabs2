import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../firebase-config";
import "./Style/Freelancer.css";
import { Link } from "react-router-dom";

const Freelancer = () => {
  const [creators, setCreators] = useState([]);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    skill: "",
    socialMediaLink: "",
    profileImg: null,
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const creatorsCollection = collection(firestore, "profiles");
        const snapshot = await getDocs(creatorsCollection);
        const creatorsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCreators(creatorsData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchCreators();
  }, []);

  const checkAuthentication = () => {
    const user = getAuth().currentUser;
    return user !== null;
  };

  const showForm = () => {
    const isSignedIn = checkAuthentication();

    if (isSignedIn) {
      setShowProfileForm(true);
    } else {
      notify();
    }
  };

  const notify = () => {
    toast.error("Please Sign Up or Login First!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const hideForm = () => {
    setShowProfileForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectImgClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setFormData({
          ...formData,
          profileImg: file,
          imageUrl: imageUrl,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const createProfile = async () => {
    const user = getAuth().currentUser;

    if (!user) {
      notify();
      return;
    }

    if (!formData.fullName || !formData.skill || !formData.socialMediaLink || !formData.profileImg) {
      toast.error("Please fill in all the fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      await setDoc(doc(firestore, 'profiles', user.uid), {
        fullName: formData.fullName,
        skill: formData.skill,
        socialMediaLink: formData.socialMediaLink,
        imageUrl: formData.imageUrl,
      });

      setShowProfileForm(false);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <>
      <Nav />
      <div className="Freelance-page">
        <div className="Freelance-top">
          <h1>
            Work With <span> Right Freelancers</span>
          </h1>
          <button className='profile-btn' onClick={showForm}><span>Create Profile</span></button>
        </div>
        {showProfileForm && (
          <div className='profile-form'>
            <div className="profile-inner">
              <div className="p-left">
                <div className="select-img" onClick={handleSelectImgClick}>
                  <label htmlFor="file">Upload img
                    <img src={formData.imageUrl} alt="" />
                  </label>
                  <input
                    type="file"
                    name='file'
                    onChange={handleFileChange}
                    accept="image/*"
                    ref={fileInputRef}
                    required
                  />
                </div>
              </div>
              <div className="p-right">
                <div className='form'>
                  <input
                    type="text"
                    autoComplete='off'
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    autoComplete='off'
                    name='skill'
                    value={formData.skill}
                    onChange={handleInputChange}
                    placeholder='Enter Your Skill'
                    required
                  />
                  <input
                    type="text"
                    autoComplete='off'
                    name='socialMediaLink'
                    value={formData.socialMediaLink}
                    onChange={handleInputChange}
                    placeholder='Social Media Link'
                    required
                  />
                  <button onClick={createProfile} className='profile-btn'><span>Create Profile</span></button>
                </div>
              </div>
            </div>
            <div onClick={hideForm} className="r-icon">
              <i className="fa-solid fa-x"></i>
            </div>
          </div>
        )}
        <div className="freelancer">
          <div className="freelance-card">
            {creators.map((item, index) => (
              <Link to={`/Freelancer/${item.id}`} key={index}>
                <div className="user-card">
                  <div className="img">
                    {/* code */}
                    <img
                      src={item.imageUrl}
                      alt="Uploaded Profile"
                    />
                  </div>
                  <h3>{item.username}</h3>
                  <p>{item.skill}</p>
                  <a
                    href="#"
                    target="_blank"
                    className="profile-btn let-talk-btn"
                  >
                    <span>Connect</span>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Freelancer;
