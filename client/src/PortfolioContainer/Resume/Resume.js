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
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS & Frameworks", ratingPercentage: 80 },
    { skill: "Javascript", ratingPercentage: 75 },
    { skill: "TypeScript", ratingPercentage: 60 },
    { skill: "React.js", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 30 },
    { skill: "Node.js & Express.js", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 35 },
    { skill: "MongoDb", ratingPercentage: 60 },
    { skill: "MySQL", ratingPercentage: 25 },
  ];

  const coursesDetails = [
    {
      title: "TypeScript from Basic to Advanced",
      duration: { fromDate: "Udemy ", toDate: " 2022" },
      description:
        "An complete TypeScript webcourse, including projects development with React and Express.js.",
      subHeading: "Technologies: TypeScript, React, Express.js.",
    },
    {
      title: "React - Complete Guide",
      duration: { fromDate: "Udemy ", toDate: " 2022" },
      description:
        "An complete React.js course, learning about React.js, Hooks, Redux, React Routing, Next.js and more.  ",
      subHeading: "Technologies:  React, TypeScript.",
    },
    {
      title: "Python 3 Introduction & Logic Programming",
      duration: { fromDate: "CeV ", toDate: " 2021" },
      description:
        "Basic introdutory Python Course, reaching until Python POO.",
      subHeading: "Technologies: Python.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"OneBitCode, Brazil"}
        subHeading={
          "Certificated Specialization in Full Stack JavaScript Development"
        }
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Pontifical Catholic University of Campinas, Brazil"}
        subHeading={"Bachelor of Business Administration - BBA"}
        fromDate={"2019"}
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
          heading={"Mitfokus Financial Solutions"}
          subHeading={"Full Stack Developer"}
          fromDate={"Apr. 2022 "}
          toDate={" Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Brazilian company who provides financial solutions in web/mobile
            applications for healthcare professionals.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Front and back end development of web applications with the team,
            using React and TypeScript stack.
          </span>
        </div>
        <br />
        <ResumeHeading
          heading={"Agis Brazil"}
          subHeading={"TP-Link Product/Technical Analyst"}
          fromDate={" Jun. 2019 "}
          toDate={" Apr. 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Big IT hardware distributor (3rd in Brazilian market).
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - TP-Link technical responsible, assisting with technical issues and
            projects for network infrastructure.
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
