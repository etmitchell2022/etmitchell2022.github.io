import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/Index/Navbar"
import MainBanner from "../components/Index/MainBanner"
import About from "../components/Index/About"
import Experience from "../components/Index/Experience"
import Skills from "../components/Index/Skills"
import Projects from "../components/Index/Projects"
import ContactForm from "../components/Index/ContactForm"
import Footer from "../components/Index/Footer"

const IndexPage = () => (
  <Layout>
    <div className="body-bg-five">
      <div className="main-area two">
        <Navbar />
        <SEO title="Evan Mitchell | Portfolio" />
        <div className="main-content two">
          <MainBanner />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
