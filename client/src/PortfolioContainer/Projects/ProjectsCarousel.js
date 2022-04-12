import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tafernotes from "../../assets/Projects/tafernotes.png";
import taferstocks from "../../assets/Projects/taferstocks.png";
import todolist from "../../assets/Projects/to-do-list.png";
import taferdevs from "../../assets/Projects/taferdevs.png";

export default function ProjectsCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop showArrows={true} autoPlay={true}>
        <div>
          <img src={tafernotes} />
          <p className="legend" id="project-name">
            Tafernotes
            <br />
            <i>
              Evernotes clone project, using Node.js, React.js, Bulma and
              MongoDB.
              <br />
              Available on:{" "}
              <a
                target="_blank"
                href="https://tafernotes-client.herokuapp.com/"
              >
                https://tafernotes-client.herokuapp.com/
              </a>
            </i>
          </p>
        </div>
        <div>
          <img src={taferstocks} />
          <p className="legend" id="project-name">
            TaferStocks
            <br />
            <i>
              On building stocks/financial dashboard, using Node.js, React.js
              and MongoDB.
              <br />
              Available on:{" "}
              <a
                target="_blank"
                href="https://github.com/lucastafer/taferstocks"
              >
                https://github.com/lucastafer/taferstocks
              </a>
            </i>
          </p>
        </div>
        <div>
          <img src={todolist} />
          <p className="legend" id="project-name">
            Node.js ToDo List
            <br />
            <i>
              To-do list using Node.js, EJS, Mongo DB and Bulma.
              <br />
              Available on:{" "}
              <a
                target="_blank"
                href="https://github.com/lucastafer/to-do-list"
              >
                https://github.com/lucastafer/to-do-list
              </a>
            </i>
          </p>
        </div>
        <div>
          <img src={taferdevs} />
          <p className="legend" id="project-name">
            Commercial Website
            <br />
            <i>
              Simple website, using only HTML and CSS.
              <br />
              Available on:{" "}
              <a
                target="_blank"
                href="https://github.com/lucastafer/TaferDevs_Website"
              >
                https://github.com/lucastafer/TaferDevs_Website
              </a>
            </i>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
