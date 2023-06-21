import React from 'react'
import "./serv.css"
import Card from '../Card/Card'
import calm from "../../img/cvcvcv.png";
// import shi from "../../img/zxzx.png"
import tong from "../../img/tong.png"
import imoj from "../../img/azazaz.png"
import cv from "../../Componants/Serv/CV_SAraDArwish_Front_2023_v6.pdf"

function Serv() {
  return (
      <div className='serv'>
          
          {/* left side */}
          <div className='aesom'>
              <span>My Awesome</span>
              <span>Services</span>
              <span>Lorem, ipsum dolor sit amet consecteturdolor sit 
                  amet consturdolor sit amet consectetur elit. 
              <br></br>
                  Lorem ipsum dolor sit.</span>
              <a href={cv} download >
                  <button className='s-btn'>Downlaod My CV</button>
              </a>
              <div className="blur  " > </div>
          </div>

          {/* right side */}
          <div className="cards">
               <div className='cards-small-box' style={ {left:"16rem" , top:"0rem" } } >
                    <Card emoji={calm} heading={'design'}
                        detail= {'Figma , Adobe , photoshop '}
                    />
                </div>  
               <div className='cards-small-box' style={ {left:"10rem" , top:"21rem" } } >
                        <Card emoji={tong} heading={'Developer'}
                        detail= {'HTML , CSS , JS , REACT JS , BOOTSTRAP '}
                        /> 
                </div>  
                <div className='cards-small-box' style={ {left:"-9rem" , top:"13rem"  } } >
                    <Card emoji={imoj} heading={'UI/UX'}
                        detail= {' lorem4 '}
                    />
              </div> 
              <div className="blur3"   > </div>

          </div>
        
      
    </div>
  )
}

export default Serv
