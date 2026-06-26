import React from 'react'
import assets from '../assets/assets'
import Skills from '../components/Skills'

const About = () => {
  return (
    <section id='about'>
      <div className='gird grid-cols-2 flex  gap-20 mt-20 justify-center'>
        <div className=""><img src={assets.about_img} className='w-800 h-100' alt="about-img" /></div>
        <div>
          <h2 className='text-6xl text-dark font-semibold mb-3 font-display'>About me</h2>
          <p className='text-gray-500 font-body text-justify'>I believe great software sits at the intersection of functionality and experience. As a Full-Stack Developer, I enjoy crafting fast, intuitive, and visually appealing applications that solve real-world problems. Whether I'm building a responsive frontend, designing APIs, or exploring AI technologies, I'm always looking for ways to learn, improve, and create work that people genuinely enjoy using. Every project is an opportunity to turn ideas into experiences that feel seamless and purposeful.</p>
          <Skills/>
        </div>
      </div>
    </section>
  )
}

export default About