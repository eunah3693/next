"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
// import useStore from '../../store/useMainBanner';

interface BannerData {
  img: string;
}

interface SwiperProps {
  slideData: BannerData[];
  viewNumber: number;
}

export default function SwiperComponent({ slideData, viewNumber }: SwiperProps) {
  // const {count,increment,decrement} = useStore();
  
  return (
    <div className="w-full">
      {/* <div>
        <h1>Count: {count}</h1>
        <div  onClick={() => increment(count)}>increment</div>
        <div  onClick={() => decrement(count)}>decrement</div>
      </div> */}
      <Swiper
        spaceBetween={30}
        slidesPerView={viewNumber}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        wrapperClass="swiper-wrapper"
        slideClass="swiper-slide"
      >
        {slideData.map((item: BannerData, index: number) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="relative w-full h-full">
              <Image 
                src={item.img} 
                alt={`Banner ${index + 1}`}
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
