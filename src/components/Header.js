import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiCalculator, BiBookOpen } from "react-icons/bi"

function Header() {
  return (
    <div id="header">
      <div className="inner">
        <Parallax className="scrolling-section" y={[60, -50]}>
        <img
              className="logoImg"
              src="the-health-lab-wordmark.svg"
              alt="The Health Lab wordmark"
            />
           </Parallax>
        <Parallax className="scrolling-section" y={[-50, 100]}>
          <h3>Your health made easy</h3>
        </Parallax>
        <Parallax className="scrolling-section" y={[-50, 100]}>
        <a href="#your-health" className="button mainBtn rightBtn">
          <BiCalculator className="btnIcon" />
          Calculate Your Health
        </a>
        <a href="#articles" className="button leftBtn">
          <BiBookOpen className="btnIcon" />
          Read Helpful Articles
        </a>
        </Parallax>
      </div>
    </div>
  )
}

export default Header
