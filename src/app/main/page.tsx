import Swiper_Component from "../../component/swiper/swiper";
import Swiper_Product_Component from "../../component/swiper/swiper_product";
import Community_table_Component from "../../component/table/community_table";
import Footer_Component from "../../component/footer";

const bannerData=[
    {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"},
    {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"},
    {"img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/banner/2025022817143917407304793703.png"}
]
const recommendData=[
    {"name":"1","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
    {"name":"2","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
    {"name":"3","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
    {"name":"4","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
    {"name":"5","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
    {"name":"6","img":"https://blackcircles-data.s3.ap-northeast-2.amazonaws.com/data/item/1659301921/64uk7J2064KY7ZSE66GcHPX.jpg"},
]
const tableData=[
    {"title":"1","date":"2025-01-01"},
    {"title":"2","date":"2025-01-01"},
]
const footerData={"name":"eunah","address":"dd","phone":"010"}
export default async function Main() {

    return (
        <div>
            {/* banner */}
            <Swiper_Component slideData={bannerData} viewNumber={1}></Swiper_Component>
            <span>추천상품</span>
            <Swiper_Product_Component slideData={recommendData} viewNumber={5}></Swiper_Product_Component>
            <span>인기상품</span>
            <Swiper_Product_Component slideData={recommendData} viewNumber={5}></Swiper_Product_Component>
            <span>커뮤니티</span>
            <Community_table_Component tableData={tableData}></Community_table_Component>
            <Footer_Component footerData={footerData}></Footer_Component>
        </div>

    );
}