import React from "react"
import { Link } from "gatsby"
import regalia from "../../images/regaliaDash.png"
import stockImage from "../../images/stock.png"
import weatherImage from "../../images/weather.png"

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
              <img src={regalia} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/regalia">Regalia Share Capstone Project</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="projects-item">
              <img src={stockImage} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/stocks">Stock Tracker</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="projects-item">
              <img src={weatherImage} alt="Projects" />
              <div className="inner">
                <div className="inner">
                  <h3>
                    <Link to="/weather">Weather App</Link>
                  </h3>
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
