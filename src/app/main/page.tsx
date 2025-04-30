
import Swiper_Component from "../../component/swiper/swiper";
import Swiper_Product_Component from "../../component/swiper/swiper_product";
import Community_table_Component from "../../component/table/community_table";
import Footer_Component from "../../component/footer";

// todo : data type 지정, props 추가 
// todo : tailwind.css 사용해서 수정
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


export default async function Main() {
    return (
        <div>
            <div className="w-full lg:max-w-7xl mx-auto">
                {/* banner */}
                <Swiper_Component slideData={bannerData} viewNumber={1} count={1}></Swiper_Component>
                <h5 className="ps-10 py-10 pb-5 text-lg">추천상품</h5>
                <Swiper_Product_Component slideData={recommendData} viewNumber={5}></Swiper_Product_Component>
                <h5 className="ps-10 py-10 pb-5 text-lg">인기상품</h5>
                <Swiper_Product_Component slideData={recommendData} viewNumber={5}></Swiper_Product_Component>
                <div className="flex justify-between pb-10">
                    <div className="flex-1">
                        <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
                        <Community_table_Component tableData={tableData}></Community_table_Component>
                    </div>
                    <div className="flex-1">
                        <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
                        <Community_table_Component tableData={tableData}></Community_table_Component>
                    </div>
                </div>
            </div>
        </div>

    );
}