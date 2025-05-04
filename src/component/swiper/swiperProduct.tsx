"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

interface ProductData {
  img: string;
  name: string;
}

interface SwiperProductProps {
  slideData: ProductData[];
  viewNumber: number;
}

export default function SwiperProduct({ slideData, viewNumber }: SwiperProductProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={viewNumber}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      allowTouchMove={false}
    >
      {slideData.map((item: ProductData, index: number) => (
        <SwiperSlide key={index}>
          <div className="relative w-full aspect-square">
            <Image 
              src={item.img} 
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <span className="block text-center mt-2">{item.name}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
