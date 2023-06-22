import React from 'react'
import "./works.css"
import img1 from "../../img/rolx.png"
import img2 from "../../img/subway.png"
import img3 from "../../img/payappl.png"
import img4 from "../../img/play.png"
import img5 from "../../img/suzuki.png"


function Works() {
  return (
      <div className='works'>
          <div className="left-works">
              <span>My Work</span>
              <span>Brands & Clints</span>
              <span>Lorem, ipsum dolor sit amet consecteturdolor sit 
                  amet consturdolor sit amet consectetur elit. 
              <br></br>
                  Lorem ipsum dolor sit.
             <br></br>
                 amet consturdolor sit amet consectetur sit amet elit. 
              </span>
                   <button className='s-btn'>Hire Me</button>
             <div className="blur" > </div>
          </div>

          <div className="right-works">
              
              <div className="works-mainCircl">
                  
                  <div className="works-secndCircl">
                      <img src={img1} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img2} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img3} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img4} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img5} alt="" />
                  </div>
                  
              </div>
              <div className="works-backCicl bluCircl"></div>
              <div className="works-backCicl orngCircl"></div>
              
          </div>
     
    </div>
  )
}

export default Works
