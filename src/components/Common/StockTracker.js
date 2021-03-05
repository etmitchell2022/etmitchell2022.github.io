import React from "react"
import { Link } from "gatsby"
import image from "../../images/stock.png"
import logo from "../../components/App/assets/images/logo-four.png"
import Footer from "../Index/Footer"

const StockTracker = () => {
  return (
    <div className="projectPageContainer">
      <div className="logoContainer">
        <Link href="/" className="navbar-brand logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="projectTitle">
        <h1>Stock Tracker</h1>
      </div>
      <div className="projectDescription">
        <p>
          This app is a simple stock tracker. I build this as a starter project
          for Node JS after learning the basics. The user can search for any
          stock ticker and data specific to that stock will be displayed. In the
          future, I would like to add companies that had increased the most over
          the last week to the homepage as a featured section. I have the layout
          setup however, the data is not dynamic.
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
              <td>Personal</td>
              <td>Node JS</td>
              <td></td>
              <td>
                <a href="https://github.com/etmitchell2022/stockTracker">
                  View Code
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>HandleBars</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>API</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Bootstrap</td>
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

export default StockTracker
