import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useProduct } from "@/hooks/useProduct";

// async function fetchProducts() {
//   const res = await fetch("http://localhost:4000/api/products");
//   if (!res.ok) throw new Error(`HTTP ${res.status}`);
//   return res.json();
// }

export default function MgrProduct() {
  const {
    data: products,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    // queryFn: fetchProducts,
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/products");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    // staleTime: 5_000,
    // refetchOnWindowFocus: true,
  });

  if (isPending) {
    <div>로딩중 . . .</div>;
  }

  if (isError) {
    alert("에러발생");
  }
  return (
    <div>
      MgrProduct
      <div onClick={refetch} className="border">
        데이터 갱신하기
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>category</TableHead>
            <TableHead>price</TableHead>
            <TableHead>sizes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.category}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>{p.sizes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
