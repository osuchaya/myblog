import React from "react";
import Project from "./Project";
import "../../style/style.css";
import jamfolio from "../../assets/jamfoliopage.png";
import barista from "../../assets/baristaproject.png";
import firstportfolio from "../../assets/first-portfolio.png";
import workdayscheduler from "../../assets/workdayscheduler.png";
import techblog from "../../assets/techblog.png";
import actio from "../../assets/actio.gif";
//titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
export default function Portfolio() {
  const projectdata = [
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "Group Project1: app that helps you find coffee shop in any city",
      image: barista
    },
    {
      name: "Jamfolio",
      link: "https://jeppjeppjepp0.github.io/jamfolio",
      github: "https://github.com/jeppjeppjepp0/jamfolio",
      description: "Group Project2: share your musical pieces with fellow musicians",
      image: jamfolio
    },
    {
      name: "Actio",
      link: "https://actio-app.herokuapp.com/",
      github: "https://github.com/eschindev/activity-planner",
      description: "Group Project3: get your activity on",
      image: actio
    },
    {
      name: "First portfolio",
      link: "https://osuchaya.github.io/challenge2",
      github: "https://github.com/osuchaya/challenge2",
      description: "First HTML/CSS assignment to create own portfolio",
      image: firstportfolio,
    },
    {
      name: "Workday scheduler",
      link: "https://osuchaya.github.io/workdayscheduler",
      github: "https://github.com/osuchaya/workdayscheduler",
      description: "A project using Third Party API",
      image: workdayscheduler,
    },
    {
      name: "Tech blog",
      link: "https://osuchaya.github.io/techblog",
      github: "https://github.com/osuchaya/techblog",
      description: "A Model View Controller (MVC) tech blog",
      image: techblog ,
    },
  
  ];

  const firsthalf = projectdata.slice(0,3);
  const secondhalf = projectdata.slice(3,6);

  return (
    <div className="portfol">
      <h1>Portfolio</h1>
      <div className="projectcontainer">
        <div className="row">
          <div className="col d-flex justify-content-center">
            { 
            firsthalf.map( p => {
              return <Project name={p.name} link={p.link} github={p.github} description={p.description} image={p.image}/>
            })
          }
          </div>
          <div className="col d-flex justify-content-center">
            { secondhalf.map( p => {
              return <Project name={p.name} link={p.link} github={p.github} description={p.description} image={p.image}/>
            })
          }
          </div>
        </div>  
      </div> 
    </div>
  );
}
