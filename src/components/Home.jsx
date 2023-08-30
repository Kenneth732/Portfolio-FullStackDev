import React, { useState } from 'react'
import './Home.css'
import axios from 'axios';

function Home() {
    const [activeTab, setActiveTab] = useState('Skills');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/send-email', formData);
            console.log(response.data); // Success message
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='landing'>
                <div className="header-content">
                    <div className="header-text">
                        <p>Experienced Full Stack Developer</p>
                        <h2 className='h2'>Hello, I'm <span>Ken't</span> <br /> Software Engineer</h2>
                        <p>Welcome to my portfolio! I'm passionate about crafting digital solutions that make a difference. With a strong foundation in full stack development, I bring innovation and efficiency to every project I work on. From concept to deployment, I'm dedicated to creating seamless user experiences and robust applications.</p>
                        <div className="buttons">
                            <button className="view-more-button">VIEW MORE</button>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src='https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/3be4b90c-4f4f-45bd-951a-eb646970dbd5/DreamShaper_v7_beautiful_dark_skin_A_young_individual_in_their_0.jpg' alt="Portrait of Ken't" className="image-user" />
                    </div>
                </div>
                {/*  */}
            </div>

            <section className="about">
                <div className="about-container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/3be4b90c-4f4f-45bd-951a-eb646970dbd5/DreamShaper_v7_beautiful_dark_skin_A_young_individual_in_their_1.jpg" alt="user" className='about-img' />
                        </div>
                        <div className="about-col-2">
                            <p className="self-description">
                                With a strong passion for innovation and problem-solving, I am a dedicated Full Stack Developer who thrives on creating meaningful and impactful digital solutions. My journey in the world of technology began with a curiosity-driven exploration of various programming languages and frameworks, leading me to pursue a career that blends creativity and technical prowess.
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
                </div>
            </section>

            {/* Services */}

            <section className="services">
                <div className="container">
                    <div className="sub-title">My Services</div>
                    <div className="services-list">
                        <div>
                            <i class="fas fa-code"></i>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit recusandae inventore ea eligendi commodi labore ipsam quis vitae repellendus nobis, necessitatibus similique facilis. Quam optio sit voluptates temporibus quaerat harum.</p>
                            <a href="">Learn More</a>
                        </div>

                        <div>
                            <i class="fas fa-crop"></i>
                            <h2>UI/UX</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit recusandae inventore ea eligendi commodi labore ipsam quis vitae repellendus nobis, necessitatibus similique facilis. Quam optio sit voluptates temporibus quaerat harum.</p>
                            <a href="">Learn More</a>
                        </div>

                        <div>
                            <i class="fab fa-app-store-ios"></i>
                            <h2>App Developer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit recusandae inventore ea eligendi commodi labore ipsam quis vitae repellendus nobis, necessitatibus similique facilis. Quam optio sit voluptates temporibus quaerat harum.</p>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* port */}
            <section className="portfolio">
                <div className="container">
                    <div className="sub-title">My Work</div>

                    <div className="work-list">
                        <div className="work">
                            <img src="https://i.pinimg.com/564x/97/0b/7e/970b7ecf95d370c6a300d4b8372bb8e7.jpg" alt="School Web App Screenshot" />

                            <div className="layer">
                                <h3>School Web App</h3>
                                <p>Experience my creative process through the development of this School Web App. Seamlessly designed and meticulously crafted, this project showcases my commitment to intuitive user experiences and elegant code architecture.</p>
                                <a href="/"><i className="fas fa-link"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src="https://i.pinimg.com/564x/bc/9a/3e/bc9a3effc2bc60ecab3797c7f240a6c1.jpg" alt="Humming Birds App Screenshot" />

                            <div className="layer">
                                <h3>Humming Birds App</h3>
                                <p>Explore the world of nature with the Humming Birds App. This project showcases my ability to create visually appealing and interactive applications that capture users' attention and provide valuable content.</p>
                                <a href="/"><i className="fas fa-link"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src="https://i.pinimg.com/564x/e6/67/c3/e667c343a6533c5ac0c82ffd4dda1fd6.jpg" alt="Travel App Screenshot" />
                            <div className="layer">
                                <h3>Travel App</h3>
                                <p>Embark on a journey with the Travel App. This project reflects my ability to combine design and functionality, resulting in an immersive experience for users looking to plan their next adventure.</p>
                                <a href="/"><i className="fas fa-link"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src="https://i.pinimg.com/564x/f5/0e/f0/f50ef0ac808b069e15a072a04179bcd6.jpg" alt="Learn How To: App Screenshot" />

                            <div className="layer">
                                <h3>Learn How To: App</h3>
                                <p>Expand your horizons with the Learn How To: App. This project exemplifies my dedication to creating informative and engaging applications that empower users to acquire new skills and knowledge.</p>
                                <a href="/"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="" className='scroll-btn'> <i className="fas fa-angle-double-down"></i> </a>
                </div>
            </section>

            {/* contact */}
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className='sub-title'>Contact Me</h1>
                            <p><i className='fas fa-paper-plane'></i> kenabdi21@gmail.com</p>
                            <p><i className='fas fa-phone-square-alt'></i> +254 742164615</p>

                            <div className="social-icons">
                                <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1654945421&extra_1=s%7Cc%7C318719743645%7Ce%7Cfacebook%27%7C&placement=&creative=318719743645&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1654945421%26adgroupid%3D69104018368%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1009825%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA-dCcBhBQEiwAeWidte5nKYqTkiCLFkU5hn3Ssp-VqPuAXXpwSbhWWmjl-H47I4Vx-WwyYRoCc_4QAvD_BwE"><i class="fab fa-facebook"></i></a>

                                <a href="/"><i class="fab fa-twitter-square"></i></a>
                                <a href="/"><i class="fab fa-instergram"></i></a>
                                <a href="/"><i class="fab fa-linkedin"></i></a>
                            </div>
                            <a href="/" download className='btn2'>Download Cv</a>
                        </div>
                        <div className="contact-right">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="btn2">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home