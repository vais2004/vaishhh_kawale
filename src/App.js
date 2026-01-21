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
              <p className="lead text-muted">Full Stack MERN Developer | Fresher</p>
              <a
                href={`${process.env.PUBLIC_URL}/assets/Resume%20-%20VAISHNAVI%20H.%20KAWALE.pdf`}
                download="vaishnavi_h_kawale_resume.pdf"
                className="btn btn-outline-primary mb-2"
              >
                Download Resume
              </a>
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
                      I am a B.Sc. student with a strong interest in web development, focused on building
responsive web applications using the MERN stack. As a fresher, I have gained
hands-on experience through project-based learning and personal projects. I enjoy
creating practical, user-friendly applications and continuously improving my skills.
I am eager to learn, grow as a developer, work collaboratively in team-based projects, and contribute
to meaningful real-world solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h2 className="card-title mb-3">Education</h2>
                    <p className="card-text text-muted">
  Bachelor of Science (B.Sc.) in Computer Science, 2022–2025.<br />
  Rajarshi Shahu Arts, Science & Commerce College, Chhatrapati Sambhajinagar,
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
        <strong>Frontend:</strong> React.js, JavaScript, HTML, CSS, 
        Redux Toolkit, React Router, Bootstrap, Tailwind CSS
      </li>

      <li className="list-group-item">
        <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication
      </li>

      <li className="list-group-item">
        <strong>Database:</strong> MongoDB, Mongoose
      </li>

      <li className="list-group-item">
        <strong>Tools:</strong> Git, GitHub, Postman, VS Code
      </li>

      <li className="list-group-item">
        <strong>Deployment:</strong> Vercel, Netlify, Render
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
                    src="/img/Screenshot%202026-01-15%20214814.png"
                    alt="MyStyleSpot"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Workviyo</h5>
                    <hr />
                    <div className="card-text text-muted">
                      <strong>Features:</strong>
                      <ul>
                        <li>Project and task management with status tracking</li>
          <li>Team and member assignment to projects</li>
          <li>Task priority, due dates, and progress updates</li>
          <li>Role-based access for better collaboration</li>
          <li>Centralized dashboard for managing workflows</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      {/* --- Frontend Stack --- */}
   <span className="badge bg-secondary">React</span>
        <span className="badge bg-secondary ms-1">React Router</span>
        <span className="badge bg-secondary ms-1">Redux Toolkit</span>
        <span className="badge bg-secondary ms-1">React Redux</span>
        <span className="badge bg-secondary ms-1">Bootstrap</span>
        <span className="badge bg-secondary ms-1">React Toastify</span>

                      {/* --- Backend Stack --- */}
                      <span className="badge bg-secondary ms-1">Node.js</span>
        <span className="badge bg-secondary ms-1">Express</span>
        <span className="badge bg-secondary ms-1">MongoDB</span>
        <span className="badge bg-secondary ms-1">Mongoose</span>
        <span className="badge bg-secondary ms-1">JWT</span>
        <span className="badge bg-secondary ms-1">dotenv</span>
                    </div>
                    <a
                      href="https://workviyo-frontend.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2 mb-2"
                      target="_blank"
                    >
                      🌐 View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/workviyo-frontend"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      💻 Frontend
                    </a>{" "}
                    <a
                      href="https://github.com/vais2004/Workviyo"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      ⚙️ Backend
                    </a>
                  </div>
                </div>
              </div>
          
             {/* Project MyStyleSpot */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src="\img\Screenshot 2025-10-22 195409.png"
                    alt="MyStyleSpot"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Eatzyra</h5>
                    <hr />
                    <div className="card-text text-muted">
                      <strong>Features:</strong>
                      <ul>
                        <li>Item browsing and filtering </li>
                        <li>cart with remove from cart feature</li>
                        <li>Order placement and management</li>
                        <li>Address management with default selection</li>
                        <li>
                          Payment method selection and detailed order summaries
                        </li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      {/* --- Frontend Stack --- */}
                      <span className="badge bg-secondary">React</span>
                      <span className="badge bg-secondary ms-1">
                        React Router
                      </span>
                      <span className="badge bg-secondary ms-1">Bootstrap</span>
                      <span className="badge bg-secondary ms-1">
                        React Bootstrap
                      </span>
                      <span className="badge bg-secondary ms-1">
                        Bootstrap Icons
                      </span>
                      <span className="badge bg-secondary ms-1">
                        Bootstrap Dark
                      </span>
                      <span className="badge bg-secondary ms-1">
                        React Toastify
                      </span>

                      {/* --- Backend Stack --- */}
                      <span className="badge bg-secondary ms-1">Node.js</span>
                      <span className="badge bg-secondary ms-1">Express</span>
                      <span className="badge bg-secondary ms-1">MongoDB</span>
                      <span className="badge bg-secondary ms-1">Mongoose</span>
                      <span className="badge bg-secondary ms-1">CORS</span>
                      <span className="badge bg-secondary ms-1">JWT</span>
                      <span className="badge bg-secondary ms-1">bcryptjs</span>
                      <span className="badge bg-secondary ms-1">dotenv</span>
                    </div>
                    <a
                      href="https://eatzyra-fofe.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2 mb-2"
                      target="_blank"
                    >
                      🌐 View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/Eatzyra"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      💻 Frontend
                    </a>{" "}
                    <a
                      href="https://github.com/vais2004/Eatzyra-backend"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      ⚙️ Backend
                    </a>
                  </div>
                </div>
              </div>
          
              {/* Project 2 */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src="\img\Screenshot 2025-07-26 140937.png"
                    alt="MyStyleSpot"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">MyStyleSpot</h5>
                    <hr />
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
                    </div>
                    <div className="mb-2">
                      {/* --- Frontend Stack --- */}
                      <span className="badge bg-secondary">React</span>
                      <span className="badge bg-secondary ms-1">
                        React Router
                      </span>
                      <span className="badge bg-secondary ms-1">
                        Redux Toolkit
                      </span>
                      <span className="badge bg-secondary ms-1">
                        React Redux
                      </span>
                      <span className="badge bg-secondary ms-1">
                        Redux Thunk
                      </span>
                      <span className="badge bg-secondary ms-1">
                        Redux Persist
                      </span>

                      <span className="badge bg-secondary ms-1">Bootstrap</span>
                      <span className="badge bg-secondary ms-1">
                        Bootstrap Icons
                      </span>
                      <span className="badge bg-secondary ms-1">
                        React Toastify
                      </span>

                      {/* --- Backend Stack --- */}
                      <span className="badge bg-secondary ms-1">Node.js</span>
                      <span className="badge bg-secondary ms-1">Express</span>
                      <span className="badge bg-secondary ms-1">MongoDB</span>
                      <span className="badge bg-secondary ms-1">Mongoose</span>
                      <span className="badge bg-secondary ms-1">CORS</span>
                      <span className="badge bg-secondary ms-1">dotenv</span>
                    </div>
                    <a
                      href="https://ecom-project-jade.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2 mb-2"
                      target="_blank"
                    >
                      🌐 View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/ecom-project"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      💻 Frontend
                    </a>{" "}
                    <a
                      href="https://github.com/vais2004/mystylespot-backend"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      ⚙️ Backend
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src="\img\Screenshot 2025-06-25 182211.png"
                    alt="LeadFlowByAnvaya"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">LeadFlowByAnvaya</h5>
                    <hr />
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
                    </div>
                    <div className="mb-2">
                      {/* --- Frontend Stack --- */}
                      <span className="badge bg-secondary">React</span>
                      <span className="badge bg-secondary ms-1">
                        React Router
                      </span>
                      <span className="badge bg-secondary ms-1">Axios</span>
                      <span className="badge bg-secondary ms-1">Bootstrap</span>
                      <span className="badge bg-secondary ms-1">
                        Bootstrap Icons
                      </span>
                      <span className="badge bg-secondary ms-1">
                        React Toastify
                      </span>
                      <span className="badge bg-secondary ms-1">Recharts</span>

                      {/* --- Backend Stack --- */}
                      <span className="badge bg-secondary ms-1">Node.js</span>
                      <span className="badge bg-secondary ms-1">Express</span>
                      <span className="badge bg-secondary ms-1">MongoDB</span>
                      <span className="badge bg-secondary ms-1">Mongoose</span>
                      <span className="badge bg-secondary ms-1">CORS</span>
                      <span className="badge bg-secondary ms-1">dotenv</span>
                    </div>
                    <a
                      href="https://lead-flow-by-anvaya.vercel.app/"
                      className="btn btn-outline-success btn-sm me-2 mb-2"
                      target="_blank"
                    >
                      🌐 View Demo
                    </a>
                    <a
                      href="https://github.com/vais2004/LeadFlowByAnvaya"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      💻 Frontend
                    </a>{" "}
                    <a
                      href="https://github.com/vais2004/LeadFlowByAnvaya-backend"
                      className="btn btn-outline-secondary btn-sm mb-2"
                      target="_blank"
                    >
                      ⚙️ Backend
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
