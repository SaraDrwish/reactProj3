import React from 'react';
import "./portofolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgSlid1 from "../../img/r5.jpg";
import imgSlid2 from "../../img/r3.jpg";
import imgSlid3 from "../../img/circlll.png";

import { useContext } from 'react';
import { themeContext } from '../../Context';
 

function Portofolio() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className='portofolio' id='Portofolio'>
          <span className="recntProjs"  style={ {color: darkMode ? "white" : " "      } } > recent projects</span>
          <span className="porto"> Portofolio</span>

          {/* <div className="slideer-container"> */}
            
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='portofolio-slider' >
                    
                    <SwiperSlide className='SwiperSlide' >
                        <img src={imgSlid1} alt="imgSlid1" />
                    </SwiperSlide >
                        <SwiperSlide   className='SwiperSlide' >
                        <img src={imgSlid3} alt="imgSlid1" />
                    </SwiperSlide>
                    <SwiperSlide  className='SwiperSlide' >
                        <img src={imgSlid2} alt="imgSlid1" />
                    </SwiperSlide>
                    
                </Swiper>
          {/* </div> */}
          
    </div>
  )
}

export default Portofolio
