import React from 'react'
import "./intro.css";
import FlootingDiv from '../FlootingDiv/FlootingDiv';
import git from "../../img/orange soical icons/light-orng-git-icon.png";
import insta from "../../img/orange soical icons/ooooinss.png";
import linkdin from "../../img/orange soical icons/ornglightlinkediniconrext.webp";
import imoji1 from "../../img/ccnn.png";
import imoji2 from "../../img/lvvvvvo.png";
import imoji4 from "../../img/clclcl.png";

import img1 from "../../img/r2.jpg"


function Intro() {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-name'>
          <span> Hi! I Am </span>
          <span> Sara Darwish </span>
          <span> ..  A web developer with high level of experience , producting the quality work  ... ... </span>
        </div> {/* end iintro-name*/}
        <button className='intro-button'>Learn More</button>

        <div className='intro-social'>
          <a href="https://github.com/SaraDrwish" target="_blank">  <img src={git} alt="git" /> </a>
          <a href="https://www.linkedin.com/in/sara-darwish-921341178/" target="blank"> <img src={linkdin} alt="linked" /></a>
          <a href="https://www.instagram.com/so.gado/" target="blank"> <img src={insta} alt="insta" /></a>
        </div> {/* end intro-social */}

       </div>  {/* end intro-left */}

      <div className='intro-right'>

        <div></div>
        <div></div>

        <img className='mainImg' src={img1} alt="img1" />
        
         <img src={imoji4} alt="img1" />
         {/* <img src={imoji4} alt="img1" /> */}
        {/* <img src={imoji5} alt="img1" /> */}
        
        <div className='floott'> 
          <FlootingDiv image={imoji2}  txt1="web"  txt2="developer"  />
        </div>
         <div className='floott2'> 
          <FlootingDiv image={imoji1}  txt1="best design"  txt2="award"  />
        </div>
        <div className='blur1'  ></div>
        <div className=' blur2'  ></div>
         
      </div> {/* end intro-right */}
    
    </div>  /*end intro */ 
  )
}

export default Intro