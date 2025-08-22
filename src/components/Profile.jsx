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
            I’m a versatile and detail-oriented Full-Stack Web Developer skilled in building
            scalable and responsive web applications using technologies like Python, Django,
            HTML, CSS, JavaScript, and SQL. <br />
            Proven Ability To Work Collaboratively In Team Settings And Adapt To Dynamic
            Environments To Develop Strong analytical skills and a passion for problem-solving.
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