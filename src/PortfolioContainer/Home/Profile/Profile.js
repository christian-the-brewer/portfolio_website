import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://www.facebook.com/christian.brewer2/">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/christianbrewer/">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href="https://github.com/christian-the-brewer">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        </div>
                        
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            I'm <span className="highlighted-text">Christian</span>, welcome to my portfolio
                        </span>
                    </div>
                    <div className="profile-details-role">
                    <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Full-Stack Web Developer",
                                    2000,
                                    "Passionate about Python 🐍",
                                    2000,
                                    "Rustacean 🦀",
                                    2000,
                                    "Full-Stack Web Developer",
                                    2000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Highly motivated software engineer with skill in web development and python programming
                            </span>
                        </span> 
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="christian_brewer_cv_09_22-1.pdf" download="Christian Brewer Resume">
                            <button className="btn highlighted-btn">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}