import React, { useState } from "react";
import accurate from "../images/acclogo.png";
import pentgon from "../images/pentagonlogo.jpg";

function Experience() {
  const [details, setDetails] = useState({
    title: "Select a Card",
    description:
      'The details will appear here once you click "View Details" from the left side.',
  });

  const [animate, setAnimate] = useState(false);

  const showDetails = (section, title, description) => {
    if (section === "experience") {
      setAnimate(true); 
      setDetails({ title, description });

      // remove animation after it runs
      setTimeout(() => setAnimate(false), 500);

      // ✅ scroll to details section (important for mobile view)
      setTimeout(() => {
        const detailsBox = document.getElementById("detailsPanel");
        if (detailsBox) {
          detailsBox.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const style = {
    color: "#2b121dff",
    fontSize: "18px",
    textAlign: "justify",
  };

  return (
    <>
      {/* Experience Section */}
      <section id="experience">
        <h1 className="techstack-title">Internship</h1>
        <div className="main-container">
          <div className="card-list">
            {/* Card 1 */}
            <div className="card-item">
              <img src={pentgon} alt="Pentagon Space" />
              <h2>Full-Stack Python Developer</h2>
              <p style={style}>
                Pentagon Space empowers professionals with upskilling and
                reskilling in cutting-edge technologies at affordable prices.
                With innovative trainers and industry-relevant courses, it
                simplifies complex concepts and prepares learners for the
                future. Backed by strong placement support, Pentagon Space
                bridges the gap between knowledge and career growth.
              </p>
              <button
                onClick={() =>
                  showDetails(
                    "experience",
                    "Full Stack Python Developer Intern",
                    `<ul>
                      <li><b>Company:</b> Pentagon Space, Bengaluru, India</li>
                      <li><b>Duration:</b> Jan 2025 – Aug 2025</li>
                      <li><b>Type:</b> On-Site Internship (Training + Real-Time Projects)</li>
                      
                      <h2><b><u>About</u></b></h2>
                      <li>Pentagon Space is a Bengaluru-based IT Training & Consulting company founded in 2020, specializing in Full Stack Development, Software Testing, Data Science, AI/ML, and Cloud Computing.</li>
                      <li>The internship provided hands-on exposure to real-time industry projects, strengthening both front-end and back-end development skills.</li>
                      <li><b>Company:</b> <a href="https://pentagonspace.in" target="_blank">Pentagon Space Website</a></li>

                      <h2><b><u>Role And Responsibilities</u></b></h2>
                      <li>Built and deployed full-stack web applications using Python (Django) and SQL databases.</li>
                      <li>Designed and implemented REST APIs for seamless communication between front-end and back-end.</li>
                      <li>Created interactive user interfaces with HTML, CSS, JavaScript, and React.</li>
                      <li>Gained experience in database design, query optimization, and CRUD operations.</li>
                      <li>Worked on real-time team projects, applying Agile practices like standups and code reviews.</li>
                      <li><b>Tech Stack:</b> Python, Django, REST APIs, HTML, CSS, JavaScript, React, SQL, Git</li>
                      <li><b>Soft Skills:</b> Team Collaboration · Problem-Solving · Adaptability · Communication · Time Management</li>
                    </ul>`
                  )
                }
              >
                View Details
              </button>
            </div>

            {/* Card 2 */}
            <div className="card-item">
              <img src={accurate} alt="Accurate Info Solution" />
              <h2>Web Development Using Python</h2>
              <p style={style}>
                Accurate Info Solution specializes in AI/ML, web development,
                robotics, and embedded systems, delivering transformative
                technology solutions. Our training programs equip learners with
                practical skills to thrive in the digital future.
              </p>
              <button
                onClick={() =>
                  showDetails(
                    "experience",
                    "Web Development Intern",
                    `<ul>
                      <li><b>Company:</b> Accurate Info Solution, Nagarbhavi, Bengaluru, India</li>
                      <li><b>Duration:</b> Jun 2025 – Aug 2025</li>
                      <li><b>Type:</b> On-Site Internship</li>
                      <b><u>About</u></b>
                      <li>Accurate Info Solution is a Bengaluru-based IT service company located in Nagarbhavi, specializing in web and software development solutions.</li>
                      <li>The internship provided hands-on experience in full-stack development with Python & Django, covering both front-end and back-end implementation.</li>
                      <b><u>Role And Responsibilities</u></b>
                      <li>Developed and tested web application modules using Python & Django, improving backend efficiency and user experience.</li>
                      <li>Designed and optimized SQL queries for client data retrieval, reducing query response time by ~15%.</li>
                      <li>Created and maintained front-end components with HTML, CSS, and JavaScript for interactive UI.</li>
                      <li>Collaborated with senior developers to fix bugs, conduct code reviews, and ensure scalable solutions.</li>
                      <li>Prepared documentation and generated reports using Excel for project tracking and team coordination.</li>
                      <li><b>Tech Stack:</b> Python, Django, HTML, CSS, JavaScript, SQL, Git, Excel</li>
                      <li><b>Soft Skills:</b> Team Collaboration · Problem-Solving · Time Management · Communication</li>
                    </ul>`
                  )
                }
              >
                View Details
              </button>
            </div>
          </div>

          {/* Details Panel */}
          <div
            className={`details-panel ${animate ? "fade-in" : ""}`}
            id="detailsPanel"
          >
            <h2>{details.title}</h2>
            <div
              style={{ textAlign: "justify", fontSize: "16px" }}
              dangerouslySetInnerHTML={{ __html: details.description }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
