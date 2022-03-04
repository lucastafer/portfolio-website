import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "../../assets/Projects/shape-bg.png";
import tafernotes from "../../assets/Projects/tafernotes.png";
import todolist from "../../assets/Projects/to-do-list.png";
import "./Projects.css";

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
            <div className="carousel-wrapper">
              <Carousel infiniteLoop showArrows={true}>
                <div>
                  <img src={tafernotes} />
                </div>
                <div>
                  <img src={tafernotes} />
                </div>
                <div>
                  <img src={todolist} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Photo not responding" />
      </div>
    </div>
  );
}
