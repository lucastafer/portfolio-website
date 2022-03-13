import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Some of my done projects."}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <ProjectsCarousel />
          </div>
        </div>
        <div className="footer-wave">
          <svg
            viewBox="0 -20 700 110"
            width="100%"
            height="110"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
              fill="#000"
            />
          </svg>
        </div>
      </section>

    </div>
  );
}
