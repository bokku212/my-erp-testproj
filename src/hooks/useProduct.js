import { useQuery } from "@tanstack/react-query";

export function useProduct(options = {}) {
  const { id } = options || {};
  const {
    data: products,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/products");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });
  const product = id ? products?.find((p) => String(p.id) === String(id)) : {};

  return { products, product, isPending, isError, error, refetch };
}
