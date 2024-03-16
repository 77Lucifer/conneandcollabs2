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
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from "react-router-dom";
import "./Style/Freelancer.css";


const Freelancer = () => {
  const [creators, setCreators] = useState([]);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    skill: "",
    telegram: "",
    github: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    twitter: "",
    numberofwork: "",
    completedproject: "",
    satisfiedcustomers: "",
    cvfile: "",
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

  const [freelancerPageStyle, setFreelancerPageStyle] = useState({});

  const showForm = () => {
    const isSignedIn = checkAuthentication();

    if (isSignedIn) {
      // Update the style to set min-height to 150vh
      setFreelancerPageStyle({ minHeight: '200vh' });
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
  
    if (
      !formData.fullName ||
      !formData.skill ||
      !formData.telegram ||
      !formData.profileImg ||
      !formData.cvfile
    ) {
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
      const storage = getStorage();
  
      // Upload profile image to Firebase Storage
      const profileImageRef = storageRef(storage, `profileImages/${user.uid}/${formData.profileImg.name}`);
      await uploadBytes(profileImageRef, formData.profileImg);
  
      // Get the download URL of the uploaded profile image
      const imageUrl = await getDownloadURL(profileImageRef);
  
      // Upload CV file to Firebase Storage
      const cvStorageRef = storageRef(storage, `cvFiles/${user.uid}/${formData.cvfile.name}`);
      await uploadBytes(cvStorageRef, formData.cvfile);
  
      // Get the download URL of the uploaded CV file
      const cvUrl = await getDownloadURL(cvStorageRef);
  
      const profileRef = doc(firestore, 'profiles', user.uid);
  
      // Create a FormData object to handle other text data
      const formDataForFirestore = {
        fullName: formData.fullName,
        skill: formData.skill,
        telegram: formData.telegram,
        github: formData.github,
        instagram: formData.instagram,
        linkedin: formData.linkedin,
        youtube: formData.youtube,
        twitter: formData.twitter,
        numberofwork: formData.numberofwork,
        completedproject: formData.completedproject,
        satisfiedcustomers: formData.satisfiedcustomers,
        imageUrl: imageUrl,  // Set the URL of the uploaded image
        cvUrl: cvUrl,        // Set the URL of the uploaded CV file
      };
  
      // Set the document with the FormData
      await setDoc(profileRef, formDataForFirestore);
  
      setShowProfileForm(false);
    } catch (error) {
      console.error('Error creating profile:', error);
      toast.error("Error creating profile. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  
  
  

  return (
    <>
      <Nav />
      <div className="Freelance-page" style={freelancerPageStyle}>
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
                    name='telegram'
                    value={formData.telegram}
                    onChange={handleInputChange}
                    placeholder='Enter Your Telegram Profile Link'
                    required
                  />
                  <input type="text"
                    autoComplete="off"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    placeholder="Enter Your Github Profile Link"
                  />
                  <input type="text"
                    autoComplete="off"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="Enter Your Instgram Profile Link"
                    required
                  />
                  <input type="text"
                    autoComplete="off"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="Enter Your Linkedin Profile Link"
                  />
                  <input type="text"
                    autoComplete="off"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    placeholder="Enter Your Youtube Profile Link"
                  />
                  <input type="text"
                    autoComplete="off"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    placeholder="Enter Your Twitter Profile Link"
                  />
                  <input
                    type="Number"
                    autoComplete='off'
                    name='numberofwork'
                    value={formData.numberofwork}
                    onChange={handleInputChange}
                    placeholder='Enter Number of Work'
                    required
                  />
                  <input
                    type="Number"
                    autoComplete='off'
                    name='completedproject'
                    value={formData.completedproject}
                    onChange={handleInputChange}
                    placeholder='Enter Completed Projects'
                    required
                  />
                  <input
                    type="Number"
                    autoComplete='off'
                    name='satisfiedcustomers'
                    value={formData.satisfiedcustomers}
                    onChange={handleInputChange}
                    placeholder='Enter Satisfied Customers'
                    required
                  />

                  <label htmlFor="cvfile" className="custom-file-upload">
                    {formData.cvfile ? (
                      formData.cvfile
                    ) : (
                      <span>Upload Your CV</span>
                    )}
                  </label>
                  <input
                    type="file"
                    id="cvfile"
                    autoComplete="off"
                    name="cvfile"
                    value={formData.cvfile}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                </div>
                <button onClick={createProfile} className='profile-btn'><span>Create Profile</span></button>
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

                    <img
                      src={item.imageUrl}
                      alt="Uploaded Profile"
                    />
                  </div>
                  <h3>{item.fullName}</h3>
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
