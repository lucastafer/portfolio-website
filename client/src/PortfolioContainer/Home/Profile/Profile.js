import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-whatsapp fa-2x"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              <a href="#">
                <i className="fa fa-stack-overflow fa-2x"></i>
              </a>
              <a href="#">
                <i className="fa fa-github fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Lucas</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 🖥️",
                    1000,
                    "React/React Native ⚛️",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <a onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
            <button className="btn primary-btn">
              {" "}Hire Me{" "}
            </button>
            </a> 
            <a href="lucas.pdf" download="Lucas-Fernandes.pdf">
              <button className="btn primary-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
