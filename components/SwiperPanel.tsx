"use client"
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCard from './SwiperCard';
import { Navigation, A11y } from 'swiper';
import { FunctionComponent, HTMLAttributes } from 'react';
import { useSwiper } from 'swiper/react';
 


interface Props extends HTMLAttributes<HTMLDivElement> {

  
   
}

const SwiperPanel: FunctionComponent<Props> = ({className }) => {
  
  
  
  return (
    <Swiper   className={className}
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
      <SwiperSlide><SwiperCard></SwiperCard></SwiperSlide>
    </Swiper>
  );
}

export default SwiperPanel;