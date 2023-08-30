import React, { useState } from 'react'
import './About.css'

function About() {
  const [activeTab, setActiveTab] = useState('Skills');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='container'>
      <div className="about-containerX">
        <h1 className='sub-title'>About Me</h1>
      </div>

      <div className="about-col-2">
        <p className="self-description">
          With a strong passion for innovation and problem-solving, I am a dedicated Full Stack Developer who thrives on creating meaningful and impactful digital solutions. My journey in the world of technology began with a curiosity-driven exploration of various programming languages and frameworks, leading me to pursue a career that blends creativity and technical prowess.

          I am deeply committed to crafting exceptional user experiences by marrying my expertise in front-end design with my proficiency in back-end development. My ability to bridge the gap between aesthetics and functionality allows me to bring ideas to life in a way that resonates with users and meets their evolving needs.

          Over the years, I have honed my skills in designing captivating interfaces that captivate users' attention and keep them engaged. My proficiency extends beyond the user interface, as I specialize in building robust back-end systems that power dynamic applications, ensuring data integrity, security, and seamless functionality.

          As a lifelong learner, I actively seek opportunities to stay at the forefront of emerging technologies. I am committed to continually expanding my skill set and staying adaptable in an ever-evolving digital landscape. Whether collaborating within a team or leading projects, I am driven by the desire to contribute my expertise and passion to create solutions that drive positive change.

          Beyond coding, I am a proactive communicator, adept at translating technical concepts into accessible terms, fostering effective collaboration between cross-functional teams. With a keen eye for detail, a relentless pursuit of excellence, and a dedication to continuous improvement, I am poised to make a lasting impact as a developer and contribute to the advancement of innovative digital experiences.
        </p>


        <div className="tab-titles">
          <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('Skills')}>Skills</p>
          <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('Experience')}>Experience</p>
          <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => handleTabClick('Education')}>Education</p>
        </div>
        <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`}>
          <ul>
            <li>
              <span className="detail">UI/UX Designer</span>
              Crafting intuitive and visually appealing user interfaces for both web and mobile applications, ensuring seamless user interactions and exceptional user experiences.
            </li>
            <li>
              <span className="detail">Front-End Developer</span>
              Developing elegant and responsive web applications with a strong focus on user-centric design, ensuring optimal performance across various devices and browsers.
            </li>
            <li>
              <span className="detail">Mobile App Developer</span>
              Creating feature-rich Android and iOS applications that provide innovative solutions and delightful user experiences through thoughtful design and efficient functionality.
            </li>
            <li>
              <span className="detail">Back-End Developer</span>
              Building the foundation of applications by implementing scalable and efficient back-end solutions that handle data manipulation, authentication, and API integrations.
            </li>
            <li>
              <span className="detail">Database Specialist</span>
              Designing and managing databases using technologies like SQL, SQLite, and MongoDB to ensure secure and efficient storage, retrieval, and management of critical application data.
            </li>
          </ul>

        </div>

        <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`}>
          <ul>
            <li>
              <span className="detail">2018 - 2019</span>
              <p className="experience-title">UI/UX Design Internship</p>
              <p className="experience-subtitle">Tech Solver</p>
              As an intern at Tech Solver, I had the valuable opportunity to contribute to the design team, participating in the creation of user-friendly interfaces for web and mobile applications. This experience honed my skills in user-centered design and enhanced my ability to transform concepts into visually appealing and functional interfaces.
            </li>
            <li>
              <span className="detail">2020 - 2021</span>
              <p className="experience-title">UI/UX Designer</p>
              <p className="experience-subtitle">Independent Contractor</p>
              During this period, I worked as an independent UI/UX designer, collaborating with clients to deliver captivating user interfaces that aligned with their branding and user needs. This role allowed me to further refine my design sensibilities and communication skills, ensuring seamless collaboration and successful project outcomes.
            </li>
            <li>
              <span className="detail">2021 - 2022</span>
              <p className="experience-title">Team Lead</p>
              <p className="experience-subtitle">Global Tech</p>
              As the Team Lead at Global Tech, I led a team of talented developers in executing complex projects and delivering high-quality solutions. This role not only deepened my technical expertise but also honed my leadership and project management skills. I facilitated efficient collaboration, fostered innovation, and ensured that our team consistently met and exceeded client expectations.
            </li>
          </ul>

        </div>

        <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`}>
          <ul>
            <li>
              <span className="detail">B.Sc. in Computer Science</span>
              <p className="education-subtitle">University of Techville</p>
              My formal education in Computer Science equipped me with a strong foundation in software development and programming concepts. Throughout my studies, I engaged in a range of coursework that included both theoretical and practical aspects of computer science, laying the groundwork for my career as a developer.
            </li>
            <li>
              <span className="detail">Specialization in Front-End Development</span>
              <p className="education-subtitle">Online Learning Platform</p>
              Through an intensive specialization program, I immersed myself in the world of front-end development, mastering technologies such as React.js, Angular, Tailwind CSS, Bootstrap, and Canvas. This experience enabled me to create dynamic and visually appealing user interfaces that enhance user engagement and satisfaction.
            </li>
            <li>
              <span className="detail">Back-End Development Proficiency</span>
              <p className="education-subtitle">MORINGA / FLATIRON</p>
              Complementing my front-end skills, I pursued in-depth training in back-end development. I gained expertise in frameworks like Python's Flask, Django, and Ruby on Rails, enabling me to build powerful and efficient server-side applications with robust functionalities.
            </li>
            <li>
              <span className="detail">Database Management Expertise</span>
              <p className="education-subtitle">DataTech Institute</p>
              My education also encompassed comprehensive knowledge of databases, including SQL and MongoDB. I learned to design, manage, and optimize databases, ensuring seamless data storage, retrieval, and manipulation for various applications.
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default About