"use client"
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCard from './SwiperCard';
import { Navigation, A11y, Autoplay } from 'swiper';
import { FunctionComponent, HTMLAttributes } from 'react';
 


interface Props extends HTMLAttributes<HTMLDivElement> {

  
   
}

const SwiperPanel: FunctionComponent<Props> = ({className }) => {
 
  
  
  return (
    <Swiper   className={className}
      modules={[Navigation,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      
      loop={true}
      pagination={{ clickable: true }}
     

    >
      
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
    </Swiper>
  );
}

export default SwiperPanel;