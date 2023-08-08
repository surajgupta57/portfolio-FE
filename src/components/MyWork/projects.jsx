import { useGetProjectsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import config from '../config.js';
const Projects = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();
  const img_300 = "https://drive.google.com/uc?id=";

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3.7,
      },
      1440: {
        items: 3.7,
      },
    },
  };
  const [projectsDetails, setProjectsDetails] = useState(projects);
  useEffect(() => {
    setProjectsDetails(projects);
  }, [projectsDetails, projects]);
  if (isFetching) return "loading";

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>My Work</h2>
        <h3>Check Out My Django Projects</h3>
      </div>
      <div className="project-row">
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsDetails?.map((details) => (
              <div className="project" data-aos="fade-up" key={details.id}>
                <div className="project-img">
                  <img
                    src={`${config.BASEURL.split("/api")[0]}${details.logo}`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.technology}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.description}</p>
                  <div className="project-links">
                    <a
                      href={details.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href={details.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
