interface CommunityDetailProps {
  id: number;
}

export default function CommunityDetail({ id }: CommunityDetailProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">커뮤니티 상세</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">{id}</p>
      </div>
    </div>
  );
}
