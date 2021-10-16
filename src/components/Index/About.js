import React from "react"
import aboutImg from "../../components/App/assets/images/about4.jpg"

const About = () => {
  return (
    <div id="about" className="about-area border-bottom-two three ptb-100">
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-three">
              <img src={aboutImg} alt="About" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title three">
                <span className="sub-title">ABOUT ME</span>
                <p>
                  I have always had a passion for technology and I am looking
                  forward to working as a software engineer. Upon graduating, I
                  will be joining the frontend team at DeveloperTown.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="left">
                    <ul>
                      <li>
                        <span>Email:</span>
                        <a href="mailto:etmitchell@bsu.edu">
                          etmitchell@bsu.edu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="right">
                    <ul>
                      <li>
                        <span>Phone:</span>
                        <a href="tel:+00932123456">937-248-4780</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
