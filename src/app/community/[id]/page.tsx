import Community_detail from "../../../component/community/community_detail"

export default function Community({ params }: { params: {id: string}}) {
  const { id } = params;
  return (
      <div>
        <div>
            <div className="w-full lg:max-w-7xl mx-auto">
                <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티</h5>
                <div className="pb-10">
                  <Community_detail id={id}></Community_detail>
                </div>
            </div>
        </div>
      </div>
  );
}