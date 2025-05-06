import SwiperComponent from "../component/swiper/swiper";
import SwiperProduct from "../component/swiper/swiperProduct";
import CommunityTable from "../component/table/communityTable";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";

interface BannerData {
  img: string;
}

interface ProductData {
  name: string;
  img: string;
}

interface TableData {
  title: string;
  date: string;
}
//  bannerData 배열 type 지정
const bannerData: BannerData[] = [
  {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"},
  {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"},
  {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"}
];

const recommendData: ProductData[] = [
  {"name":"1","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"2","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"3","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"4","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"5","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
  {"name":"6","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
];

const tableData: TableData[] = [
  {"title":"1","date":"2025-01-01"},
  {"title":"2","date":"2025-01-01"},
];

export default function Main() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="w-full lg:max-w-7xl mx-auto">
        {/* Banner Section */}
        <SwiperComponent 
          slideData={bannerData} 
          viewNumber={1} 
        />
        
        {/* Recommended Products Section */}
        <h5 className="ps-10 py-10 pb-5 text-lg">추천상품</h5>
        <SwiperProduct 
          slideData={recommendData} 
          viewNumber={5} 
        />
        
        {/* Popular Products Section */}
        <h5 className="ps-10 py-10 pb-5 text-lg">인기상품</h5>
        <SwiperProduct 
          slideData={recommendData} 
          viewNumber={5} 
        />
        
        {/* Community Section */}
        <div className="flex justify-between pb-10">
          <div className="flex-1">
            <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
            <CommunityTable 
              tableData={tableData} 
            />
          </div>
          <div className="flex-1">
            <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
            <CommunityTable 
              tableData={tableData} 
            />
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
