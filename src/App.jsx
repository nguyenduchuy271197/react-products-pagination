import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Pagination from "./components/Pagination";
import ProductGrid from "./components/ProductsGrid";

export default function App() {
  const [products, setProducts] = useState(null);
  const [pageNum, setPageNum] = useState(null);
  const [skip, setSkip] = useState(0);
  const perPage = 12;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setPageNum(Math.ceil(data.total / perPage));
      });
  }, [skip]);

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <Banner />
      <div className="space-y-8">
        <ProductGrid products={products} />
        <Pagination pageNum={pageNum} onSkipChange={setSkip} skip={skip} />
      </div>
    </div>
  );
}
