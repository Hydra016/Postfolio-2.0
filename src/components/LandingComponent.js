import Link from "next/link";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "./Navbar";
import CustomAnimation from "./CustomAnimation";
import Menu from "./Menu";
import { Fade } from "react-reveal";

function LandingComponent() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <Menu />
      <div className="landing-page-text mobile-padding">
        <div className="real-content">
          <div className="typewriter-container">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(25)
                  .typeString("Hi There, <br>")
                  .pauseFor(500)
                  .typeString("I am Haider<br>")
                  .pauseFor(500)
                  .typeString("Nice to meet you! <br>")
                  .start()
                  .pauseFor(500)
                  .callFunction(() => setShow(true));
              }}
            />
          </div>
          {show ? (
            <Fade>
              <div className="content">
                I'm a frontend web developer with a passion for creating
                visually stunning and user-friendly websites. My goal is to help
                clients achieve their online objectives by delivering
                high-quality, custom solutions that stand out from the crowd.
                Let's work together to create something amazing!
              </div>
              <div className="btn-container">
                <Link className="btn hvr-sweep-to-right contact-btn contact-me" href="#contact-page">
                  <span className="contact-text">Contact Me</span> <ArrowForwardIosIcon className="btn-icon" />
                </Link>
                <Link className="btn btn-outlined hvr-fade contact-btn cv-btn" href={'https://drive.google.com/file/d/1gw-skZjEX97d9Valcnt2d0505IqjhWkJ/view?usp=share_link'} target="_blank">
                <span className="contact-text">Download CV</span> <ArrowForwardIosIcon className="btn-icon" />
                </Link>
              </div>
            </Fade>
          ) : null}
        </div>
        <div>
          {show ?
          <CustomAnimation name={'95714-hello-orange.json'} customClass={'container'} />
          : null}
        </div>
      </div>
    </>
  );
}

export default LandingComponent;
