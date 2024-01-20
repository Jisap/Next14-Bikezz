'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CloudCog } from 'lucide-react';
import Bike from './Bike';

const PopularBikesCarousel = ({ bikes }) => {
  return (
    <Swiper>
      {bikes.map((bike, index) => {
        {/* console.log( bike.images[0].asset ) */}
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