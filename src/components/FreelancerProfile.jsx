import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <>
      <Nav />
      <div className='f-profile-main'>
        {loading ? (
          <p>Loading...</p> // Render loading indicator while fetching data
        ) : (
          <div className="f-user-detail">
            <div className="f-user-container">
              <div className="f-top-img">
                <img src={profileData && profileData.imageUrl} alt={profileData?.fullName || 'Freelancer'} />
                <div className="f-name-profession">
                  <h3>{profileData && profileData.fullName}</h3>
                  <h4>{profileData?.skill || 'Profession Not Available'}</h4>
                </div>
                {/* Continue rendering other profile details */}
              </div>
              <div className="f-soical-id">
                <p>Telegram Id :  @jupitersoftdev</p>
                <p>SkypeID : live:.cid.adfc4ae155d1cd22</p>
              </div>
              <div className="f-social-a">
                <i className="fab fa-github"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <div className="f-work">
                <span>7 <h4>Year of <br />Work</h4></span>
                <span>+124<h4>Completed <br />projects</h4></span>
                <span>96<h4>Satisfied <br />customers</h4></span>
              </div>
              <div className="f-cv">
                <button className="n-button log-btn">
                  <span>Download CV <i className="fas fa-arrow-down"></i></span>
                </button>
                <div className="f-e-c">
                  <span><i className="fab fa-skype"></i></span>
                  <span><i className="far fa-envelope"></i></span>
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
