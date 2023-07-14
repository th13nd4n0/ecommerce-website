import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    const navigate = useNavigate();
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Better ingredients.</h1>
                <h1>Better Slippers.</h1>
                <div className="ctas">
                    <div 
                        className="banner-cta v1" 
                        onClick={() => {
                            document.getElementsByTagName('img')[1].scrollIntoView();
                            window.scrollBy(0,-100);
                        }}
                    >Shop</div>
                    <div 
                        className="banner-cta v2"
                        onClick={() => navigate("/About")}
                    >or...learn more</div>
                    <FaArrowRight className="banner-cta v3"/>
                </div>
            </div>
            <img class="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>;
};

export default Banner;