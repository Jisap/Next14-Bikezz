'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CloudCog } from 'lucide-react';
import Bike from './Bike';

const PopularBikesCarousel = ({ bikes }) => {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
    >
      {bikes.map((bike, index) => {
       
        return (
          <SwiperSlide key={bike._id}>
            <Bike bike={bike} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default PopularBikesCarousel