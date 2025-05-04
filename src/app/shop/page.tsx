import SwiperProduct from "../../component/swiper/swiperProduct";

interface ProductData {
  name: string;
  img: string;
}

const productData: ProductData[] = [
  {"name":"1","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"2","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"3","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"4","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"5","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"6","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
];

export default function Shopping() {
  return (
    <div>
      <div className="w-full lg:max-w-7xl mx-auto">
        <h5 className="ps-10 py-10 pb-5 text-lg">상품리스트</h5>
        <div className="pb-10">
          <SwiperProduct 
            slideData={productData} 
            viewNumber={5} 
          />
        </div>
      </div>
    </div>
  );
}
