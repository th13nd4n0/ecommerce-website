import myGif from "../../assets/about.gif";
import AboutImg from "../../assets/about-img.png";
import AboutImg2 from "../../assets/abt-img2.png";
import AboutImg3 from "../../assets/abt-img3.png";
import AboutImg4 from "../../assets/abt-img4.png";
import "./About.scss";

const About = () => {
    return (
        <div className="main-content">
            <div className="content">

                <div className="title-banner">
                    <div className="section-title">
                        <p>About</p>
                        <h1>Profile</h1>
                    </div>
                    <div className="section-img">
                        <img src={AboutImg} alt=""/>
                    </div>
                </div>

                <div className="first-sec">
                    <p>At Slipper, we believe that fashion and sustainability can coexist harmoniously. We are a dedicated team of passionate individuals committed to providing environmentally sustainable and trendy shoes for conscious consumers who value both style and ethical practices.</p>
                </div>

                <div className="sections">
                    <div className="title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="body-sec">
                        <div className="body">
                            <p>Our mission is to redefine the fashion industry by offering footwear that not only keeps up with the latest trends but also minimizes its impact on the planet. We believe that every step towards a sustainable future matters, and that's why we have carefully curated a collection of shoes that are not only fashionable but also eco-friendly.</p>
                        </div>
                        <div className="img-sec">
                            <img src={AboutImg3} alt=""/>
                        </div>
                    </div>

                    <div className="title">
                        <h1>Our Purpose</h1>
                    </div>
                    <div className="body-sec">
                        <div className="img-sec">
                                <img src={AboutImg2} alt=""/>
                        </div>
                        <div className="body">
                            <p>What sets us apart is our unwavering commitment to sustainability throughout every aspect of our business. From sourcing materials to production and packaging, we prioritize environmentally friendly practices. We meticulously select high-quality, sustainable materials such as recycled plastics, organic cotton, and plant-based alternatives, ensuring that each shoe is made with the utmost care for our planet.</p>
                            <p>Our design philosophy is rooted in creating timeless and versatile styles that transcend fleeting trends. We believe in crafting shoes that can be worn for years to come, reducing the need for constant consumption and promoting a more conscious approach to fashion.</p>
                        </div>
                    </div>

                    <div className="title">
                        <h1>Our Attitude</h1>
                    </div>
                    <div className="body-sec">
                        <div className="body">
                            <p>In addition to our dedication to sustainability, we prioritize fair labor practices and work closely with ethical manufacturing partners. We believe in fostering long-term relationships built on trust, respect, and the mutual goal of creating a positive impact within the fashion industry.</p>
                            <p>Join us on our journey towards a more sustainable and stylish future. Explore our collection and experience the joy of wearing shoes that not only make you look good but also make you feel good about the choices you make. Together, we can stride towards a greener and more fashionable world.</p>
                        </div>
                        <div className="img-sec">
                                <img src={AboutImg4} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="gif-content">
                    <img src={myGif} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default About;