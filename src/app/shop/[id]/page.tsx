import ProductDetail from "../../../component/shop/productDetail";

interface ShoppingDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ShoppingDetail({ params }: ShoppingDetailProps) {
  const { id } = await params;

  return (
    <div className="w-full lg:max-w-7xl mx-auto">
      <h5 className="ps-10 py-10 pb-5 text-lg">상품상세</h5>
      <div className="pb-10">
        <ProductDetail id={id} />
      </div>
    </div>
  );
}
