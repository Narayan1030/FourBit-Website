import React from "react";
import "./Hero.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineAppShortcut } from "react-icons/md";
import { SiBmcsoftware } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";
import { LuScale3D } from "react-icons/lu";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { PiClockLight } from "react-icons/pi";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-description">
          <span className="topic">Think Tech, Choose Us</span>
          <span className="topic-1">
            Digital product & <br />
            marketing that grow <br />
            Nepali brands
          </span>
          <p>
            FourBit builds fast websites, useful apps and campaigns that
            convert.
            <br />
            We ship reliably and measure what matters.
          </p>

          <div className="buttons">
            <button className="btn primary">Start a Project →</button>
            <button className="btn secondary">See Our Work</button>
          </div>
          <div className="features">
            <span>🛡 Warranty 5–10 yrs</span>
            <span>
              <PiClockLight /> On-time delivery
            </span>
          </div>
        </div>

        <div className="hero-services">
          <div className="services-box">
            <div className="service">
              <FaGlobeAmericas />
              <br /> Web
            </div>
            <div className="service">
              <MdOutlineAppShortcut /> <br /> App
            </div>
            <div className="service">
              <SiBmcsoftware />
              <br />
              Software
            </div>
            <div className="service">
              <HiSpeakerphone />
              <br /> Marketing
            </div>
            <div className="service">
              <BsRocketTakeoffFill />
              <br /> Launch
            </div>
            <div className="service">
              <LuScale3D />
              <br />
              Scale
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          Swan Regency &nbsp; &nbsp; GK Piro &nbsp; &nbsp; Eye Express &nbsp;
          &nbsp; NYEF &nbsp; &nbsp; NGC
        </p>
      </div>
    </>
  );
}
