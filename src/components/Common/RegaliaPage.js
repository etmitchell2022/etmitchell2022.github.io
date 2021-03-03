import React from "react"
import { Link } from "gatsby"
import image from "../../images/regaliaDash.png"
import logo from "../../components/App/assets/images/logo-four.png"
import Footer from "../Index/Footer"

const RegaliaPage = () => {
  return (
    <div className="projectPageContainer">
      <div className="logoContainer">
        <Link href="/" className="navbar-brand logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="projectTitle">
        <h1>Regalia Share </h1>
      </div>
      <div className="projectDescription">
        <p>
          Regalia Share is my senior capstone project. This is a project that
          was started by a capstone group the previous year but never finished.
          The app was made for Ball State faculty and gives them the ability to
          list and reserve regalia for certain Ball State events. It eliminates
          having to spend a large amount of money on regalia for new employees.
          My group and I have gone through and created a new UI to make it more
          uniform with other Ball State applications. On top of that, we have
          also implemented new features on top of the existing features like
          messaging and SSO with Ball State. I have primarily worked on creating
          a UI as a really enjoy front-end development and creating unique user
          experiences.
        </p>
      </div>
      <div className="techStack">
        <table class="stack">
          <thead>
            <tr>
              <th>Type</th>
              <th>Stack</th>
              <th>Live Site</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>School</td>
              <td>PHP</td>
              <td>
                <a href="https://regalia.community.bsu.edu" target='_blank'>View Site</a>
              </td>{" "}
              <td><a href="https://github.com/etmitchell2022/regalia-loan-app-code">View Code</a></td>
            </tr>
            <tr>
              <td></td>
              <td>CakePHP</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Docker</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>MySQL</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="projectImage">
        <img src={image} alt={image} />
      </div>
      <Footer />
    </div>
  )
}

export default RegaliaPage
