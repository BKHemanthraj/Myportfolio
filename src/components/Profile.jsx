import React from "react";
import MyPhoto from "../images/photo.png";
 
function Profile() {
  return (
    <>
      <section className="profile-section" id="home">
        <div className="profile-text">
          <h3>Hi, I'm</h3>
          <h1>B K HEMANTH RAJ</h1>
          <p>
            I’m a developer with a passion for designing and building smart, scalable, and user-friendly 
            web applications. Skilled in Python, Django, SQL, and modern frontend frameworks, 
            I thrive on solving challenges and learning new technologies.
          </p>
        </div>
        <div className="profile-image">
          <img src={MyPhoto} alt="Hemanth Raj"/>
        </div>
      </section>
    </>
  );
}
export default Profile;