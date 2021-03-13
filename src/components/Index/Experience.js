import React from "react"

const Experience = () => {
  return (
    <div className="experience-area three border-bottom-two ptb-100" id='experience'>
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">WORK EXPERIENCE</span>
        </div>

        <div className="experience-content">
          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>Summer 2021</span>
              </li>
              <li>
                <span>Software Engineer Intern at DeveloperTown</span>
              </li>
              <li>
                <p>I will be working on the front-end engineering team.</p>
              </li>
            </ul>
          </div>

          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>2016-2021</span>
              </li>
              <li>
                <span>Video Editor at Titan Investigative Alliance</span>
              </li>
              <li>
                <p>
                  Responsible for editing investigator video to be utilized in
                  court proceedings for all matters of workers' compensation
                  fraud, disability insurance fraud, and other special
                  investigative purposes.
                </p>
              </li>
            </ul>
          </div>

          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>2018-2020</span>
              </li>
              <li>
                <span>
                  Crew Member at Morgan's Canoe and Outdoor Adventures
                </span>
              </li>
              <li>
                <p>
                  Helped manage day-to-day operations for a 20-member team.
                  Responsible for driving equpiment and customers to and from
                  certain locations.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-title three">
          <span className="sub-title">EDUCATION</span>
        </div>

        <div className="experience-content">
          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>Fall 2018 - Current</span>
              </li>
              <li>
                <span>Bachelor of Science: Computer Science</span>
              </li>
              <li>
                <p>Ball State University - Muncie, IN</p>
              </li>
            </ul>
          </div>
          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>2014 - 2018</span>
              </li>
              <li>
                <span>High School</span>
              </li>
              <li>
                <p>Eaton High School - Eaton, OH</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
