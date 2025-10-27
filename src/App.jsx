import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MgrProduct from "./pages/MgrProduct.jsx";
import MgrStore from "./pages/MgrStore.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/list", element: <ProductList /> },
      { path: "product/detail/:id", element: <ProductDetail /> },
      { path: "mgr/product", element: <MgrProduct /> },
      { path: "mgr/store", element: <MgrStore /> },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
