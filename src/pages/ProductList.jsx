import { useQuery } from "@tanstack/react-query";
import { useProduct } from "@/hooks/useProduct";

function ProductCard({ product }) {
  const { img, id, title, price, sizes, category } = product;
  return (
    <div>
      <div className="border m-2 p-2">
        <div>
          <img src={img} />
        </div>
        <div>
          {id}. {title}
        </div>
        <div>{category}</div>
        <div>{price}</div>
        <div>{sizes}</div>
      </div>
    </div>
  );
}
export default function ProductList() {
  const { products, isPending, isError, error, refetch } = useProduct();
  //   const {
  //     data: products,
  //     isPending,
  //     isError,
  //     error,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["products"],
  //     queryFn: async () => {
  //       const res = await fetch("http://localhost:4000/api/products");
  //       if (!res.ok) throw new Error(`HTTP ${res.status}`);
  //       return res.json();
  //     },
  //   });

  if (isPending) {
    <div>로딩중 . . . .!! </div>;
  }
  return (
    <div>
      <div>ProductList</div>
      <div className="grid grid-cols-4 ">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
