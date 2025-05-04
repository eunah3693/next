"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
    <div>
      {/* <div>
        <h1>Count: {count}</h1>
        <div  onClick={() => increment(count)}>increment</div>
        <div  onClick={() => decrement(count)}>decrement</div>
      </div> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={viewNumber}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideData.map((item: BannerData, index: number) => (
          <SwiperSlide key={index}>
            <img 
              src={item.img} 
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
