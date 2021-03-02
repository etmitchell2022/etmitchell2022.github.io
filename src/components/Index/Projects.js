import React from "react"
import { Link } from "gatsby"
import project1 from "../../components/App/assets/images/projects/project1.jpg"
import project2 from "../../components/App/assets/images/projects/project2.jpg"
import project3 from "../../components/App/assets/images/projects/project3.jpg"
import project4 from "../../components/App/assets/images/projects/project4.jpg"

const Projects = () => {
  return (
    <div id="portfolio" className="projects-area border-bottom-two ptb-100">
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">PROJECTS</span>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-7">
            <div className="projects-item">
              <img src={project1} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/work-details">Furniture Website</Link>
                  </h3>
                  <span>Logo</span>
                </div>
              </div>
            </div>

            <div className="projects-item">
              <img src={project2} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/work-details">Travel App Logo Design</Link>
                  </h3>
                  <span>App</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-5">
            <div className="projects-item two">
              <img src={project3} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/work-details">ERP Design</Link>
                  </h3>
                  <span>Design</span>
                </div>
              </div>
            </div>

            <div className="projects-item two">
              <img src={project4} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/work-details">Restaurant Design</Link>
                  </h3>
                  <span>Restaurant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
