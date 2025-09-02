"use client"

import Header from '../Components/Header/header'
import Hero from '../Components/Hero/Hero'
import Education from '../Components/Education/Education'
import Certifications from '../Components/Certifications/Certifications'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/projects'
import GetInTouch from '../Components/Contact/GetInTouch'
import Contact from '../Components/Contact/contact'
import Footer from '../Components/Footer/footer'
import BackgroundAnimation from '../Components/BackgroundAnimation/BackgroundAnimation'

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="get-in-touch">
          <GetInTouch />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}