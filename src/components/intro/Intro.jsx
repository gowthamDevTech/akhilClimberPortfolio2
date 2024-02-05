import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="akhil photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 year(Climbing Coaching), 4 years(Playing), 2 years Route setting experience</small>
            </article>
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article> */}
          </div>
          <p>
          Hi, I from in jamshedpur,jarkhand. After finishing my studies i complete my basic mounteering course in HMI(Himalayan Mounteering Institute) 
          Darjeeling in 10 April 2017.
          I also do climbing in TSAF(TATA Steel Adventure Foundation). Joined TSAF on 17th March 2016 till January 2023.
          </p>
          <p>
          Then I started working in Equilibrium Climbing Station in Bangalore from 9 Feburary 2023.
          </p>
          <p>
            I completed Route Setting Course in Sikkim on 29 October 2022 and worked as Route Setter on various Competition.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
