

function Techstack() {
  return (
    <>
      {/* Tech Stack Section */}
      <section id="techstack" className="tech-section">
       <h1 className="techstack-title">TechStack</h1> 
        <div className="tech-container">
          <div className="tech-stack">
            <div className="tech-group">
              <div className="section-title">Programming Language</div>
              <div className="stack-row">
                <div className="tech-pill">Python</div>
              </div>
            </div>

            <div className="tech-group">
              <div className="section-title">Front-End Technologies</div>
              <div className="stack-row">
                <div className="tech-pill">HTML5</div>
                <div className="tech-pill">CSS3</div>
                <div className="tech-pill">JavaScript</div>
                <div className="tech-pill">React JS</div>
              </div>
            </div>

            <div className="tech-group">
              <div className="section-title">Backend Frameworks</div>
              <div className="stack-row">
                <div className="tech-pill">Django</div>
                <div className="tech-pill">Django REST Framework</div>
              </div>
            </div>

            <div className="tech-group">
              <div className="section-title">Database</div>
              <div className="stack-row">
                <div className="tech-pill">MySQL</div>
                <div className="tech-pill">SQL</div>
              </div>
            </div>

            <div className="tech-group">
              <div className="section-title">Development Tools</div>
              <div className="stack-row">
                <div className="tech-pill">Git</div>
                <div className="tech-pill">GitHub</div>
                <div className="tech-pill">VS Code</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Techstack;
