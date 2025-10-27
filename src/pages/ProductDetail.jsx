import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProduct";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, isPending } = useProduct({ id });
  //products 는 여러개 가져옴
  if (isPending) {
    <div>로딩중 . . . .!! </div>;
  }
  return (
    <div>
      상세페이지 {JSON.stringify(product)}
      <img src={product?.img} />
    </div>
  );
}
