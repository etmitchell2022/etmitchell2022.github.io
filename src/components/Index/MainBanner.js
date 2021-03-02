import React from "react"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MainBanner = () => {
  return (
    <div id="home" className="banner-area border-bottom-two three">
      <div className="common-right-text-two">
        <span>
          Evan <br /> Mitchell <br /> Student <br /> Developer <br />
        </span>
      </div>

      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <h1>
                <span>Evan</span> Mitchell
              </h1>
              <p>
                Hello, I am a{" "}
                <span>
                  Senior Computer Science
                </span>{" "}
                student at Ball State University.
              </p>

              <div className="banner-btn-area">
                <AnchorLink href="#contact" className="common-btn three">
                  Contact Me
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
