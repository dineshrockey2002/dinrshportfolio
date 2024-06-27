import React from 'react';
import ds1 from './ds1.jpg';
import ds2 from './ds2.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import wh from './Wh.jpeg';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={ wh } alt="Profile" className="profile-pic" />
              <span className="ms-2"> Portfolio </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id="home">
        <div className="container ass">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Hi, I'm</h2>
              <h1>Dinesh</h1>
              <p>Full Stack developer proficient in key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I have built several projects during my studies that demonstrate my ability to work on both the front-end and back-end.</p>
            </div>
            <div className="col-lg-6">
              <img src={ds1} width="100%" alt="Dinesh" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className='container'>
          <div className='About'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>About Me</h1>
                <p>Hi, I'm Dinesh, a passionate and eager full stack developer with a strong educational background and a keen interest in creating dynamic web applications. Recently graduated with a degree in B.E Electronic and Communication Engineering from Anna University, I am excited to apply my skills and knowledge to real-world projects.</p>
              </div>
              <div className='col-lg-6'>
                <img src={ds2} width="100%" alt="About Dinesh" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <div className='container'>
          <div className='pro'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>Skills</h1>
                <button type="button" className="btn btn-secondary">HTML and CSS</button>
                <button type="button" className="btn btn-secondary">BOOTSTRAP</button>
                <button type="button" className="btn btn-secondary">REACT JS</button>
                <button type="button" className="btn btn-secondary">NODE JS</button>
                <button type="button" className="btn btn-secondary">JAVASCRIPT</button>
                <button type="button" className="btn btn-secondary">MONGODB</button>
                <button type="button" className="btn btn-secondary">PYTHON</button>
              </div>
              <div className='col-lg-6'>
                <img src={pic1} width="100%" alt="Skills" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className='container'>
          <div className='project'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>Projects</h1>
                <div className="project-item">
                  <h3>Project 1: Portfolio Website</h3>
                  <p>This project showcases my ability to build a responsive and functional portfolio website using HTML, CSS, React, and Bootstrap. It includes various sections such as About, Skills, Projects, and Contact.</p>
                </div>
                <div className="project-item">
                  <h3>Project 2: Todo List App</h3>
                  <p>A full-featured Todo List application developed using React and Node.js. It allows users to add, edit, delete, and manage tasks, with persistent data storage in MongoDB.</p>
                </div>
                <div className="project-item">
                  <h3>Project 3: E-commerce Website</h3>
                  <p>An e-commerce platform created with React for the front-end and Node.js with Express for the back-end. The project includes user authentication, product listing, and a shopping cart functionality.</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <img src={ds1} className="img-fluid" alt="Projects" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className='container'>
          <div className='contact'>
            <div className='row'>
              <div className='col-lg-6 mb-4'>
                <h1>Contact Me</h1>
                <p>If you have any questions or would like to get in touch, please feel free to reach out!</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className='col-lg-6'>
                <img src={pic3} width="100%" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home" className="text-light">Home</a></li>
                <li><a href="#about" className="text-light">About</a></li>
                <li><a href="#resume" className="text-light">Resume</a></li>
                <li><a href="#projects" className="text-light">Projects</a></li>
                <li><a href="#contact" className="text-light">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Follow Me</h5>
              <div className="social-icons">
                <a href="https://www.linkedin.com" className="text-light"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.github.com" className="text-light"><i className="fab fa-github"></i></a>
                <a href="https://www.twitter.com" className="text-light"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com" className="text-light"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <h5>Contact Info</h5>
              <ul>
                <li>Email: dinesh@example.com</li>
                <li>Phone: +123 456 7890</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-4">&copy; 2024 Dinesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Header;
