import React, { useState, useRef } from "react";
import campus from "../images/campus.jpg";
import medicine from "../images/medicine.jpg";
import Network from "../images/network.jpg";

function Project() {
  const [details, setDetails] = useState({
    title: "Select a Card",
    description:
      'The details will appear here once you click "View Details" from the left side.',
  });
  const [animate, setAnimate] = useState(false);
  const detailsRef = useRef(null);

  const style = {
    color: "#2b121dff",
    fontSize: "18px",
    textAlign: "justify",
  };

  const showDetails = (section, title, description) => {
  if (section === "project") {
    setAnimate(true);
    setDetails({ title, description });

    setTimeout(() => setAnimate(false), 500);

    // ✅ Always scroll (for both mobile & laptop)
    if (detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // delay to let animation kick in
    }
  }
};

  return (
    <>
      <section id="projects">
        <h1 className="techstack-title">Projects</h1>
        <div className="main-container">
          <div className="card-list">
            {/* Card 1 */}
            <div className="card-item">
              <img src={medicine} alt="Medical Shop System" />
              <h2>Medical Shop Management System</h2>
              <p style={style}>
                A Django-based web application with SQLite3 that manages medicines,
                stock, billing, and customer records. It supports full CRUD operations
                with inventory tracking, invoice generation, and supplier management,
                automating daily medical store operations efficiently.
              </p>
              <button
                onClick={() =>
                  showDetails(
                    "project",
                    "Medical Shop Management System",
                    '<h2>Role, Duration, Team</h2>'+
                    '<li><b>Role:</b> Full-Stack Developer</li><li><b>Duration:</b> 1 month</li><li><b>Team:</b> Solo</li>'+

                    '<h2>Tech Stack</h2>'+
                    '<li><b>Frameworks:</b> Django (Python)</li> <li><b>Database:</b> SQLite3</li> <li><b>Frontend:</b> HTML, CSS, Bootstrap</li> <li><b>Tools:</b> Git, GitHub</li>'+
                    
                    '<h2>Problem</h2>'+
                    'Medical shops often face challenges with manual billing, stock mismanagement, and tracking expired medicines. The goal was to build a simple web-based system to automate inventory and billing operations.'+
                    
                    '<h2>Solution</h2>'+
                    'Designed a role-based Django web app where admins manage medicines and suppliers, while staff handle billing. The system updates the database in real time, tracks stock levels, and generates invoices automatically.'+
                    
                    '<h2>Key Features</h2>'+
                     '<li>Dealer Management: Add, update, view, delete dealer details.</li>' +
                      '<li>Employee Management: Manage employee records.</li>' +
                      '<li>Customer Management: Maintain customer profiles.</li>' +
                      '<li>Medicine Management: Track stock, pricing, and details of medicines.</li>' +
                      '<li>Purchase Management: Record and view purchase transactions.</li><li>Dynamic Tables Forms: User-friendly CRUD operations with Django templates.</li>'
                     +
                      
                      '<h2>Architecture / Workflow</h2>'+
                      '<li><strong>Admin Login</strong> &rarr; Manage medicines, suppliers, staff</li>'+
                      '<li><strong>Staff Login</strong> &rarr; Process billing &amp; customer transactions</li>'+
                      '<li><strong>Database (SQLite3)</strong> &rarr; Stores medicines, stock, billing, and users</li>'+
                      '<li><strong>System Output</strong> &rarr; Generates invoices &amp; updates stock automatically</li>'+

                      '<h2>Highlights / Impact</h2>'+
                       '<li>Reduced billing time by automating invoice creation.</li>' +
                      '<li>Improved accuracy in tracking stock and expiry dates.</li>' +
                      '<li>Replaced manual registers with a reliable digital solution.</li>' +
                     
                      '<h2>Challenges & Learnings</h2>'+
                     '<li>Learned Django ORM and database migrations.</li>'+
                     '<li>Improved understanding of authentication and role-based access.</li>'+
                     '<li>Designed efficient CRUD operations with templates and views.</li>'
                  )
                }
              >
                View Details
              </button>
            </div>

            {/* Card 2 */}
            <div className="card-item">
              <img src={campus} alt="Campus Selection System" />
              <h2>Campus Selections System</h2>
              <p style={style}>
                A web-based platform to streamline and automate student placement
                processes, connecting students, recruiters, and administrators for smooth
                campus hiring.
              </p>
              <button
                onClick={() =>
                  showDetails(
                      "project",
                    "Campus Selections System",
                      '<h2>Role, Duration & Team</h2>' +
                      '<li><b>Role:</b> Full-Stack Developer</li>' +
                      '<li><b>Duration:</b> 2 months (Academic Project)</li>' +
                      '<li><b>Team:</b> 4 Members</li>' +

                      '<h2>Tech Stack</h2>' +
                      '<li><b>Frontend:</b> HTML, CSS, PHP</li>' +
                      '<li><b>Backend:</b> PHP</li>' +
                      '<li><b>Database:</b> MySQL (crs.sql)</li>' +

                      '<h2>Problem / Goal</h2>' +
                      '<p>Manual placement processes were inefficient, time-consuming, and prone to errors. The goal was to digitize campus recruitment by providing a centralized system for students, companies, and admins.</p>' +

                      '<h2>Solution Overview</h2>' +
                      '<li>Students can register, search, and apply for jobs.</li>' +
                      '<li>Companies can post jobs, manage applicants, and shortlist candidates.</li>' +
                      '<li>Admins can manage users, companies, and recruitment events.</li>' +

                      '<h2>Key Features</h2>' +
                      '<li>Student & company login/registration</li>' +
                      '<li>Job posting & application module</li>' +
                      '<li>Admin dashboard for monitoring companies & applicants</li>' +
                      '<li>Secure authentication & password reset system</li>' +
                      '<li>Search & filter for jobs</li>' +
                      '<li>Application status tracking</li>' +

                      '<h2>Architecture / Workflow</h2>' +
                      '<li>User Registration → Students & companies register via portal</li>' +
                      '<li>Authentication → Login with validation & role-based access</li>' +
                      '<li>Job Posting → Companies post vacancies</li>' +
                      '<li>Applications → Students apply for posted jobs</li>' +
                      '<li>Admin Oversight → Admin verifies companies, monitors jobs & applicants</li>' +

                      '<h2>Highlights / Impact</h2>' +
                      '<li>Reduced manual errors by 70% compared to traditional placement registers</li>' +
                      '<li>Improved transparency in recruitment with a centralized system</li>' +
                      '<li>Faster student shortlisting through database-driven queries</li>' +

                      '<h2>Challenges & Learnings</h2>' +
                      '<li>Learned database design & normalization for handling large user/job data</li>' +
                      '<li>Implemented role-based access control in PHP</li>' +
                      '<li>Faced challenges in session handling & password reset workflows</li>'
                  )
                }
              >
                View Details
              </button>
            </div>

            {/* Card 3 */}
            <div className="card-item">
              <img src={Network} alt="Wifi intrusion" />
              <h2>Wifi Intrusion Detection System</h2>
              <p style={style}>
                This project focuses on analyzing Wi-Fi performance metrics like signal
                strength, throughput, and latency to identify anomalies and reliability
                issues. It uses Python, SQL, and machine learning...
              </p>
              <button
                onClick={() =>
                  showDetails(
                     "project",
                        "Wi-Fi Network (Monitoring & ML)",
                        '<h2>Role, Duration & Team</h2>' +
                        '<ul>' +
                          '<li><b>Role:</b> Developer (Backend + Data/ML)</li>' +
                          '<li><b>Duration:</b> 4–6 weeks</li>' +
                          '<li><b>Team:</b> Solo (adjust if needed)</li>' +
                        '</ul>' +

                        '<h2>Tech Stack</h2>' +
                        '<ul>' +
                          '<li><b>Core:</b> Python</li>' +
                          '<li><b>Data/ML:</b> Jupyter (<code>main.ipynb</code>), <code>train.py</code>, <code>testing.py</code></li>' +
                          '<li><b>DB:</b> SQL schema in <code>wifi_db.sql</code></li>' +
                          '<li><b>Frontend (if used):</b> <code>static/</code> (css/js) + templates for dashboard pages</li>' +
                          '<li><b>Tools:</b> Git,Matplotlib/Scikit-learn</li>' +
                        '</ul>' +

                        '<h2>Problem / Goal</h2>' +
                        '<p>Provide visibility into Wi-Fi health (signal, throughput, latency) and detect anomalies (e.g., coverage gaps, sudden drops) to improve reliability.</p>' +

                        '<h2>Solution Overview</h2>' +
                        '<ol>' +
                          '<li>Collect/load Wi-Fi session & metric data into a SQL schema.</li>' +
                          '<li>Train a model (<code>train.py</code>) to classify or detect anomalies.</li>' +
                          '<li>Test/infer with <code>testing.py</code>.</li>' +
                          '<li>Optionally serve a small web dashboard (using static assets & templates) to visualize status.</li>' +
                        '</ol>' +

                        '<h2>Key Features</h2>' +
                        '<ul>' +
                          '<li><b>Data Pipeline:</b> SQL schema (<code>wifi_db.sql</code>) for storing APs/clients/metrics.</li>' +
                          '<li><b>Model Training:</b> <code>train.py</code> builds a model (classification or anomaly detection).</li>' +
                          '<li><b>Inference:</b> <code>testing.py</code> runs predictions on recent data.</li>' +
                          '<li><b>Notebook Exploration:</b> <code>main.ipynb</code> for EDA, feature engineering, and visualization.</li>' +
                          '<li><b>Dashboard (optional):</b> Read-only status UI for charts/tables.</li>' +
                        '</ul>' +

                        '<h2>Architecture / Workflow</h2>' +
                        '<ul>' +
                          '<li><b>Storage:</b> <code>wifi_db.sql</code> defines tables (e.g., access_points, clients, measurements).</li>' +
                          '<li><b>ML Flow:</b> EDA/feature engineering → training (<code>train.py</code>) saves model artifact → testing (<code>testing.py</code>) loads model & runs evaluation/predictions.</li>' +
                          '<li><b>App Layer:</b> Lightweight web app (if included) renders charts/tables from DB.</li>' +
                        '</ul>' +

                        '<h2>Highlights / Impact</h2>' +
                        '<ul>' +
                          '<li>Early detection of network issues via metrics trend analysis.</li>' +
                          '<li>Data-driven recommendations for AP placement or channel tuning.</li>' +
                          '<li>Reusable training/testing scripts enable continuous improvement.</li>' +
                        '</ul>' +

                        '<h2>Challenges & Learnings</h2>' +
                        '<ul>' +
                          '<li>Cleaning noisy RF metrics and aligning timestamps.</li>' +
                          '<li>Choosing thresholds vs. learning-based anomaly detection.</li>' +
                          '<li>Balancing precision/recall to avoid alert fatigue.</li>' +
                          '<li>Packaging the pipeline for reproducible runs.</li>' +
                        '</ul>'


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
            ref={detailsRef}
          >
            <h2>{details.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: details.description }}></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
