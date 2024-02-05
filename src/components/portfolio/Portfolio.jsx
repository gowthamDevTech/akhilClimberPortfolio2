import "./portfolio.css";

import IMG1 from "../../assets/TATA steel adventure foundation logo.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/EQUILIBRIUM CLIMBING STATION logo.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import RouteSetter1 from "../../assets/RouteSetter/asian games.jpg";
import RouteSetter2 from "../../assets/RouteSetter/darjeeling.jpg";
import RouteSetter4 from "../../assets/RouteSetter/judges and route setter.jpg";
import React from "react";

//Portfolio function 
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "TATA STEEL ADVENTURE FOUNDATION",
      img: IMG1,
      description:
        "I AM WORKING IN TATA STEEL ADVENTURE FOUNDATION IN JAMSHADPUR.",
      technologies: "",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "EQUILIBRIUM CLIMBING STATION",
      img: IMG4,
      description:
        "I am Working in Equilibrium CLIMBING STATION in Bengaluru.",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
  ];

  const soloProjects2 = [
    {
      id: 1,
      title: "EAST ZONE COMPETITION - 1 November 2016",
      img: IMG1,
      description:
        " ",
      technologies: "Bronze Medal",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "NATIONAL COMPETITION - 2016(Bengaluru)",
      img: IMG4,
      description:
        "",
      technologies: "6th Rank",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 3,
      title: "NATIONAL COMPETITION - 25 December 2017(Indore)",
      img: IMG4,
      description:
        "",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 4,
      title: "OPEN NATIONAL COMPETITION - 19 june 2018(Jammu Kashmir)",
      img: IMG4,
      description:
        "",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
  
    {
      id: 5,
      title: "Open Zonal Sport Climbing Championship - 20 March 2018 - 23 March 2018(West Bengal)",
      img: IMG4,
      description:
        "Open Zonal Sport Climbing Championship organised by West Bengal Mounterring and Adventure Sport Foundation(WBMASF).",
      technologies: "2 x Bronze Medal",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
  ];

  const routeSetterContent = [
    {
      id: 1,
      title: "Asian Kids Championship - 2022(Jamshadpur)",
      img: RouteSetter1,
      description:
        "I am Worked as a route setter.",
      technologies: "",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "TSAF Climbing Championship - 2023(Jamshedpur)",
      img: IMG4,
      description:
        "I am Worked as a route setter.",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 3,
      title: "25th IMF-EAST ZONE Sports Climbing Championship - 2023(Darjeeling)",
      img: RouteSetter2,
      description:
        "Competetion held at Himalayan Mounteering Institute(HMI).",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 4,
      title: "JUDGES AND ROUTE SETTING COURSE",
      img: RouteSetter4,
      description:
        "Route setting Course held on october,2022",
      technologies: "",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
  ];

  return (
    <>
    <section id="portfolio">
      <h5>My Recent Work</h5> 
      <h2>Climbing Coaching</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="portfolioImg"/>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>

   

    <section id="portfolio">
      <h5>Route Setting</h5> 
      <h2>Route Setting</h2>

      <div className="container portfolio__container">
        {routeSetterContent.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="portfolioImg"/>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>

    <section id="portfolio">
      <h5>My Sport Matches</h5> 
      <h2>PLAYING</h2>

      <div className="container portfolio__container">
        {soloProjects2.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="portfolioImg"/>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>

    </>
    
  );
};

export default Portfolio;
