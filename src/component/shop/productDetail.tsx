interface ProductDetailProps {
  id: string | number;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">상품 상세</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">{id}</p>
      </div>
    </div>
  );
}


