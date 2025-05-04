import CommunityDetail from "../../../component/community/communityDetail"

interface PageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function Community({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <div>
      <div className="w-full lg:max-w-7xl mx-auto">
        <h5 className="ps-10 py-10 pb-5 text-lg">커뮤니티 상세</h5>
        <div className="pb-10">
          <CommunityDetail id={id} />
        </div>
      </div>
    </div>
  );
}
