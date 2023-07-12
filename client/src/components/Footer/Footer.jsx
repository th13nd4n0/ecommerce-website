import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">At Slipper, we believe that fashion and sustainability can coexist harmoniously. We are a dedicated team of passionate individuals committed to providing environmentally sustainable and trendy shoes for conscious consumers who value both style and ethical practices.</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Green St, Toronto, Ontario, Canada, N7M 9J8</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +1 123 456 7890</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: support@slipper.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Boots</span>
                    <span className="text">Sandals</span>
                    <span className="text">Sneakers</span>
                    <span className="text">Slippers</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Poilcy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        SLIPPER 2023 CREATED BY TD
                    </div>
                    <img src={Payment} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;