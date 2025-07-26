import "./styles.css";

export default function App() {
  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fs-4" href="#">
            Vaishnavi H. Kawale
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 text-center text-md-start">
              <h1 className="display-4">I'm Vaishnavi Kawale</h1>
              <p className="lead text-muted">Full Stack Developer</p>
            </div>
            <div className="col-md-6 order-md-2 d-flex justify-content-center justify-content-md-end">
              <div className="hero-img">
                <img
                  className="img-fluid"
                  style={{
                    border: "1px solid black",
                    margin: "2px",
                    padding: "3px",
                  }}
                  src="img/15c65d6e-0664-4901-95f7-9ba56cbadb2b-1.jpg"
                  alt="Vaishnavi Kawale"
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </header>

      {/* About + Education */}
      <main>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h2 className="card-title mb-3">About Me</h2>
                    <p className="card-text text-muted">
                      I am a B.Sc. student with a strong interest in web
                      development. I enjoy building responsive applications
                      using HTML, CSS, JavaScript, and React. I’m eager to
                      learn, grow, and contribute to meaningful projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h2 className="card-title mb-3">Education</h2>
                    <p className="card-text text-muted">
                      I recently appeared for my B.Sc. 3rd year examinations in
                      April 2025 at Rajarshi Shahu Arts, Science, and Commerce
                      College, Pathri Phulambri, Chhatrapati Sambhajinagar
                      Maharashtra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-5">
          <div className="container">
            <h2 className="mb-3">Skills</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Frontend: HTML, CSS, JavaScript
              </li>
              <li className="list-group-item">Backend: Node.js, Express.js</li>
              <li className="list-group-item">Database: MongoDB</li>
              <li className="list-group-item">Version Control: Git, GitHub</li>
              <li className="list-group-item">
                Tools: VS Code, Postman, Chrome DevTools
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-5">
          <div className="container">
            <h2 className="mb-4">Projects</h2>
            <div className="row g-4">
              {/* Project 1 */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src="\img\Screenshot 2025-07-26 140937.png"
                    alt="MyStyleSpot"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">MyStyleSpot</h5>
                    <div className="card-text text-muted">
                      <strong>Features:</strong>
                      <ul>
                        <li>Product browsing, filtering and sorting</li>
                        <li>
                          Wishlist and shopping cart with quantity controls
                        </li>
                        <li>Order placement and management</li>
                        <li>Address management with default selection</li>
                        <li>
                          Payment method selection and detailed order summaries
                        </li>
                      </ul>
                      <em>
                        Demonstrates frontend, backend, and full integration
                        skills.
                      </em>
                    </div>
                    <div className="mb-2">
                      <span className="badge bg-secondary">React</span>
                      <span className="badge bg-secondary">Redux Toolkit</span>
                      <span className="badge bg-secondary">Node.js</span>
                      <span className="badge bg-secondary">MongoDB</span>
                      <span className="badge bg-secondary">Bootstrap</span>
                    </div>
                    <a
                      href="https://ecom-project-jade.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2"
                      target="_blank"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/ecom-project"
                      className="btn btn-outline-secondary btn-sm"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/vais2004/mystylespot-backend"
                      className="btn btn-outline-secondary btn-sm"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src="\img\Screenshot 2025-06-25 182211.png"
                    alt="LeadFlowByAnvaya"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">LeadFlowByAnvaya</h5>
                    <div className="card-text text-muted">
                      <strong>Features:</strong>
                      <ul>
                        <li>
                          Lead Dashboard with filtering, sorting, and status
                          tracking
                        </li>
                        <li>Editable Lead Details and Commenting section</li>
                        <li>Sales Agent Management with add/remove agents</li>
                        <li>
                          Visual reports with Pie and Bar Charts using Recharts
                        </li>
                        <li>Intuitive navigation with route-based filtering</li>
                      </ul>
                      <em>
                        Focuses on admin tools, data handling and visual
                        insights.
                      </em>
                    </div>
                    <div className="mb-2">
                      <span className="badge bg-secondary">React</span>
                      <span className="badge bg-secondary">Node.js</span>
                      <span className="badge bg-secondary">MongoDB</span>
                      <span className="badge bg-secondary">Recharts</span>
                    </div>
                    <a
                      href="https://lead-flow-by-anvaya.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2"
                      target="_blank"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/LeadFlowByAnvaya"
                      className="btn btn-outline-secondary btn-sm"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/vais2004/LeadFlowByAnvaya-backend"
                      className="btn btn-outline-secondary btn-sm"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <div className="p-4 mx-auto" style={{ maxWidth: "250px" }}>
              <h3 className="text-center mb-4">📬 Contact Me</h3>

              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill text-danger fs-4 me-3"></i>
                <a
                  href="mailto:vkawale2004@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  vkawale2004@gmail.com
                </a>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <i
                  className="bi bi-github fs-4 me-3"
                  style={{ color: "black" }}
                ></i>
                <a
                  href="https://github.com/vais2004"
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  github.com/vais2004
                </a>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <i
                  className="bi bi-linkedin fs-4 me-3"
                  style={{ color: "#0077b5" }}
                ></i>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-kawale-2753a034a"
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill text-danger fs-4 me-3"></i>
                <span className="text-dark">
                  Chhatrapati Sambhajinagar, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <div className="container">
          <p className="mb-0">
            &copy; 2025 Vaishnavi H. Kawale | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
