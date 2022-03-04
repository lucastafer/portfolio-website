import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.png" },
    { label: "Work History", logoSrc: "work-history.png" },
    { label: "Programming Skills", logoSrc: "programming-skills.png" },
    { label: "Additional Courses", logoSrc: "book.png" },
    { label: "Interests", logoSrc: "interests.png" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS | Bootstrap", ratingPercentage: 80 },
    { skill: "Javascript", ratingPercentage: 70 },
    { skill: "React.js", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 30 },
    { skill: "Node.js", ratingPercentage: 70 },
    { skill: "Express.js", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 35 },
    { skill: "MongoDb", ratingPercentage: 70 },
    { skill: "MySQL", ratingPercentage: 30 },
  ];

  const coursesDetails = [
    {
      title: "Node.js Formation",
      duration: { fromDate: "Udemy ", toDate: " 2022" },
      description:"An complete Node.js formation, including real projects development, test and deploy.",
      subHeading: "Technologies: Node.js, Express.js, Vue.js, MySQL, MongoDB.",
    },
    {
      title: "React - Complete Guide",
      duration: { fromDate: "Udemy ", toDate: " 2022" },
      description:"An complete React.js course, learning about React.js, Hooks, Redux, React Routing, Next.js and more.  ",
      subHeading:
        "Technologies:  React, Typescript.",
    },
    {
      title: "Python 3 Introduction",
      duration: { fromDate: "CeV ", toDate: " 2021" },
      description: "Basic introdutory Python Course, reaching until Python POO.",
      subHeading:
        "Technologies: Python.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"PUCC University, Brazil"}
        subHeading={"Bachelor of Business Administration - BBA"}
        fromDate={"2019"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"OneBitCode, Brazil"}
        subHeading={"Certificated Specialization in Full Stack JavaScript Development"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Campinas Objetivo College"}
        fromDate={"2016"}
        toDate={"2018"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Agis Brazil"}
          subHeading={"TP-Link Product/Technical Analyst"}
          fromDate={"2021 "}
          toDate={" Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Big IT hardware distributor company (3rd in Brazilian market).
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Carrying out activities related to the routine of the
            administrative part of the company.
          </span>
          <br />
          <span className="resume-description-text">
            - TP-Link technical responsible, assisting with technical issues and
            projects for network infrastructure.
          </span>
          <br />
          <span className="resume-description-text">
            - Responsible for monthly brand sales, capillarity performance,
            marketing monitoring and development of actions and strategies.
          </span>
          <br/>
          <span className="resume-description-text">
            - Daily relationship with suppliers, customers and sales team.
          </span>
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {coursesDetails.map((coursesDetails, index) => (
        <ResumeHeading
          key={index}
          heading={coursesDetails.title}
          subHeading={coursesDetails.subHeading}
          description={coursesDetails.description}
          fromDate={coursesDetails.duration.fromDate}
          toDate={coursesDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
