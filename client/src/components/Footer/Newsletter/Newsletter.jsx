import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Join the Slipper community!</span>
                <span className="big-text">Sign up for the latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="john.doe@email.com"/>
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Poilcy</div>
                <div className="social-icons">
                    <div className="icon">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaFacebookF size={16} color='white'/></a>
                    </div>
                    <div className="icon">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaTwitter size={16} color='white'/></a>
                    </div>
                    <div className="icon">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaInstagram size={16} color='white'/></a>
                    </div>
                    <div className="icon">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaLinkedinIn size={16} color='white'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;