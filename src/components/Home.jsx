import React from 'react'
import './Home.css'
import UserProfileBord from './assets/Kenne.jpg'
import BackgroundProfile from './assets/ken-brown.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="left-sidebar">
                    <div className="profile-box">
                        <img src="https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/3be4b90c-4f4f-45bd-951a-eb646970dbd5/DreamShaper_v7_beautiful_dark_skin_A_young_individual_in_their_1.jpg?w=512" alt="" className='profile-img' />
                        <div className="sidebar-profile-info">
                            <img src={UserProfileBord} alt="" />
                            <h1>Dean Wichester</h1>
                            <h3>Movie Actor</h3>
                            <ul>
                                <li>Your Profile views <span>45</span> </li>
                                <li>Your  views <span>756</span> </li>
                                <li>Your connecttion <span>340</span> </li>
                            </ul>
                        </div>
                        <div className="sidebar-profile-link">
                            <Link className="a" to="/"> My items
                                <img src="" alt="" />
                            </Link>
                            <Link className="a" to="/">
                                <img src="" alt="" /> Try Premium
                            </Link>
                        </div>
                    </div>

                    <div className="sidebar-activity">
                        <h3>RECENT</h3>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Web Development
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> User Interface
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Online Learning
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Learn Online
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Code Better
                        </Link>
                        <h3>Groups</h3>
                        <Link className="a" to="/">
                            <img src="" alt="" /> C++ Game Designer
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Python & Javascript
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> JavaScript & TensorFlow
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> C# DATABASE Managment
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> Code ReactJs Client Side
                        </Link>
                        <h3>HASHTAG</h3>
                        <Link className="a" to="/">
                            <img src="" alt="" /> userinterface
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> ddatabase managnent
                        </Link>
                        <Link className="a" to="/">
                            <img src="" alt="" /> onlinelearning
                        </Link>
                        <div className="discover-more-link">
                            <Link className="a" to="/">
                                Discover more
                            </Link>
                        </div>
                    </div>
                </div>

                {/*  */}
                {/*  */}

                <div className="content-middle">
                    <div className="create-post">
                        <div className="create-post-input">
                            <img src={UserProfileBord} alt="user-name" />
                            <textarea placeholder='Write a post' rows="10"></textarea>
                        </div>
                        <div className="create-post-links">
                            <li><img src="" alt="" />Photo</li>
                            <li><img src="" alt="" />Video</li>
                            <li><img src="" alt="" />Event</li>
                            <li>Post</li>
                        </div>
                    </div>

                    <div className="sort-by">
                        <hr />
                        <p>Sort by:  <span>top <img src="" alt="" /></span></p>
                    </div>

                    <div className="post">
                        <div className="post-author">
                            <img src="" alt="" />
                            <div>
                                <h1>Dean Doe</h1>
                                <small>Creator of A-speed WebApplication</small>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut possimus cupiditate, est minus quod fuga aliquid nobis mollitia eum modi magni numquam exercitationem sit culpa. Suscipit voluptates animi ullam minus magnam voluptatum quidem, nostrum explicabo nemo totam aperiam sunt consequatur? Similique ducimus ea nulla reprehenderit non rem voluptas eius fuga?</p>
                         <img src="" alt="" className=''/>
                    </div>
                </div>
                {/*  */}
                {/*  */}

                <div className="right-sidebar">
                    <div className="sidebar-news">
                        <img src="https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/3be4b90c-4f4f-45bd-951a-eb646970dbd5/DreamShaper_v7_beautiful_dark_skin_A_young_individual_in_their_1.jpg?w=512" alt="" className='inforIcon' />
                        <h3>Tranding News</h3>
                        <Link className="a" to="/">
                            High demand for skilled manpower
                        </Link>
                        <span>1 ag0&middot; 10,978 reader</span>

                        <Link className="a" to="/">
                            Carrers grwing horizonrally too
                        </Link>
                        <span>19h ago&middot; 34,568 reader</span>

                        <Link className="a" to="/">
                            More hiring = highet cinfidence
                        </Link>
                        <span>10h ag0&middot; 10,978 reader</span>
                        <Link className="a" to="/">
                            Gautam Adani is worl's third richest
                        </Link>
                        <span>20 ag0&middot; 13,978 reader</span>

                        <Link className="read-more-link" to="/">
                            Read More
                        </Link>
                    </div>

                    <div className="sidebar-ad">
                        <span>Ad</span>
                        <p>Master the 5 principles of web ddevelopment</p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <p>Brand and Demand in Xiaoni</p>
                        <Link className="ad-link" to="/">
                            Learn More
                        </Link>
                    </div>

                    <div className="sidebar-useful-links">
                    <Link className="ad-links" to="/">
                            About
                        </Link>
                        <Link className="ad-links" to="/">
                            Accessibbility
                        </Link>
                        <Link className="ad-links" to="/">
                            Help Center
                        </Link>
                        <Link className="ad-links" to="/">
                            Privacy Policy
                        </Link>
                        <Link className="ad-links" to="/">
                            Advertising
                        </Link>
                        <Link className="ad-links" to="/">
                            Get the App
                        </Link>
                        <Link className="ad-links" to="/">
                            More
                        </Link>


                        <div className="copyright-msg">
                            <img src="" alt="" />
                            <p>Linkedup 8#169; 2023. All right reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home