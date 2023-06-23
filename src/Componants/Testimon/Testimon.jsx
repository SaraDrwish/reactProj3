import React from 'react';
import "./testimon.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clint1img from "../../img/carfor.png";
import clint0img from "../../img/polo.png";
import clint3img from "../../img/suzuki.png";
import clint2img from "../../img/arowLeft.png";
import { Pagination } from 'swiper';
import "swiper/css/pagination";

function Testimon() {
  const clints = [
    {
      img: clint1img ,
      rewiew: "88888orem ipsum 88 77 88 adipi888sicing elit. Sint minima veritatis autem! "
    },
     {
      img: clint0img ,
      rewiew: "4444Lorem ipsum dolor sit amet consectetur adipis444icing elit. Sint minima veritatis autem! "
    },
      {
      img: clint3img ,
      rewiew: "11Lorem ipsum dolor t consectetur adipisi1111cing elit. Siis autem! "
    },
       {
      img: clint2img ,
      rewiew: "2222Lorem ipsum dolnsectetur adipis222222icing elit. Sint minima veritatis autem! "
     } 
  ]
  
  return (
   
    <div className='testimon'>
      
      <div className="testi-container">
              <div className="testi-titles">
                  <span> Clints always get </span>
                  <span> Exceptional work </span>
                  <span> from me .. </span>
                  <div className="blur"></div>
                  <div className="blur"></div>
                  <div className="blur"></div>
          </div>
          
          <Swiper
            modules={ [Pagination] }
            slidesPerView={1}
            pagination={ {clickable:true } }
            >
            {clints.map((clnt, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="swiperslideTesti">
                     <img src={clnt.img} alt="clints" />
                     <span> {clnt.rewiew} </span>
                  </div>
                 
                </SwiperSlide>
              )
            } )}
          </Swiper>
      
        
      </div> {/* end testi-container*/}
   
      

    </div>   /* end testimon */ 
  )
}

export default Testimon
