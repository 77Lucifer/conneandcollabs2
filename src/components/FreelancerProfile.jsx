import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Nav from "./Nav";
import "./Style/Freelancepro.css";
import { db } from "../firebase-config";

const FreelancerProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "profiles", id);
        const docSnap = await getDoc(docRef);
        setProfileData(docSnap.data()); // Assuming docSnap contains data object
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const extractDomain = (url) => {
    try {
      const fullURL = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
      const urlObject = new URL(fullURL);
      urlObject.pathname = '/';
      urlObject.search = '';
      urlObject.hash = '';
      return urlObject.href;
    } catch (error) {
      console.error('Invalid URL:', url);
      return url;
    }
  };

  const downloadCV = async () => {
    const cvFilePath = profileData?.cvfile;
  
    if (cvFilePath) {
      const storageRef = ref(storage, cvFilePath);
  
      try {
        const url = await getDownloadURL(storageRef);
  
        // Use JavaScript to trigger a download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CVFile'); // You can set the desired file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error fetching CV file:", error);
      }
    } else {
      console.error("CV file path not available.");
      // You can also provide feedback to the user that the CV file is not available.
    }
  };
  

  return (
    <>
      <Nav />
      <div className='f-profile-main'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="f-user-detail">
            <div className="f-user-container">
              <div className="f-top-img">
                <img src={profileData && profileData.imageUrl} alt={profileData?.fullName || 'Freelancer'} />
                <div className="f-name-profession">
                  <h3>{profileData && profileData.fullName}</h3>
                  <h4>{profileData?.skill || 'Profession Not Available'}</h4>
                </div>
              </div>
              <div className="f-soical-id">
                {profileData?.telegram && <p>Telegram Id: @{profileData.telegram}</p>}
                {profileData?.skype && <p>SkypeID: {profileData.skype}</p>}
              </div>
              <div className="f-social-a">
                {profileData?.github && (
                  <a href={extractDomain(profileData.github)} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {profileData?.instagram && (
                  <a href={extractDomain(profileData.instagram)} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {profileData?.linkedin && (
                  <a href={extractDomain(profileData.linkedin)} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {profileData?.youtube && (
                  <a href={extractDomain(profileData.youtube)} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                )}
                {profileData?.twitter && (
                  <a href={extractDomain(profileData.twitter)} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
              <div className="f-work">
                <span>{profileData?.numberofwork !== undefined ? profileData.numberofwork : 'N/A'} <h4>Year of <br />Work</h4></span>
                <span>{profileData?.completedproject !== undefined ? profileData.completedproject : 'N/A'}<h4>Completed <br />projects</h4></span>
                <span>{profileData?.satisfiedcustomers !== undefined ? profileData.satisfiedcustomers : 'N/A'}<h4>Satisfied <br />customers</h4></span>
              </div>
              <div className="f-cv">
                <button className="n-button log-btn" onClick={downloadCV}>
                  <span>Download CV <i className="fas fa-arrow-down"></i></span>
                </button>
                <div className="f-e-c n-button">
                  <span><i className="far fa-envelope"></i></span>
                  {/* <span><i className="fab fa-skype"></i></span> */}
                </div>
              </div>
              <div className="f-prj-skl">
                <div className="f-project-skil-btns">
                  {/* Button click handlers can be implemented here */}
                </div>
              </div>
              <div className="f-projects-s">
                {/* Render projects and skills here */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FreelancerProfile;
