import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                    <p>
                        "Hi, I'm Emmanuel! I am a graduate student in Computer Science at Loyola University Chicago.
                        I am a full-stack developer graduating in May 2021. Over the past couple of years I have
                        focused on Java Spring applications as well as LAMP, MERN and MEAN stacks. I am passionate
                        about all things tech and I love to learn new technologies and improve my skills. I aspire to
                        join an organization that values continued learning as much as I do, values diversity in all its
                        forms, and provides services that make the world a better place."

                    </p>
                </div>
            </div>
        </div>
    )
};
export default AboutMe
