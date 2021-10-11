import "./about.css";
import Groot from "../../images/groot.JPG";
import Ball from "../../images/ball.jpg";
import Test2 from "../../images/test2.jpg";
import Logo from "../../images/logo.jpg";

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Test2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Being able to help customers and industries realizing something new and something usefull for helping
          growth is a tremendous source of motivation. Every single day, we are trying to get better for making
          an impact...!
        </p>
        <p className="a-desc">
          I'm currently a student engineer at Thies polytechnic especially in computer science and telecom.
          I have a solid basics in most common tools for using new technologies with a hight level of efficiency.
          From Data Analysis for machine learning to web development with angular/react and nodejs/springboot/django,
          i have develop a lot of project arround those technologies.
        </p>
        <div className="a-award">
          <img src={Logo} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Polytech hack</h4>
            <p className="a-award-desc">
              I have participed in a lot of hackatons with mostly in the top3 at the end.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About
