import React from "react"
import image from "../../images/weather.png"
import { Link } from "gatsby"
import logo from "../../components/App/assets/images/logo-four.png"
import Footer from "../Index/Footer"

const Weather = () => {
  return (
    <div className="projectPageContainer">
      <div className="logoContainer">
        <Link href="/" className="navbar-brand logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="projectTitle">
        <h1>Weather App</h1>
      </div>
      <div className="projectDescription">
        <p>
          This was my first project working with React. I used this app to
          practice working with an API. The app is very simple as you just enter
          a city and the app will display the weather. In the future, I would
          like to create a five day forecast and display this below the current
          weather.
        </p>
      </div>
      <div className="techStack">
        <table class="stack">
          <thead>
            <tr>
              <th>Type</th>
              <th>Stack</th>
              <th>Live Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal</td>
              <td>React JS</td>
              <td>
                <a href="https://relaxed-ardinghelli-2fd4e7.netlify.app/" target="_blank">
                  View Site
                </a>
              </td>{" "}
            </tr>
            <tr>
              <td></td>
              <td>API</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
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

export default Weather
