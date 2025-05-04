import CommunityListTable from "../../component/table/communityListTable"

interface CommunityPost {
  subject: string;
  title: string;
  user: string;
  date: string;
}

const tableData: CommunityPost[] = [
  {
    subject: "공지",
    title: "공지사항입니다.",
    user: "관리자",
    date: "2024-03-01"
  },
  {
    subject: "일반",
    title: "일반 게시글입니다.",
    user: "사용자",
    date: "2024-03-02"
  }
];

export default function Community() {
  return (
    <div>
      <div className="w-full lg:max-w-7xl mx-auto">
        <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
        <div className="pb-10">
          <CommunityListTable 
            tableData={tableData} 
          />
        </div>
      </div>
    </div>
  );
}
