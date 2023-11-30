import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { getProducts } from "@/helpers";
import { Product } from "../../types";

export default async function Home() {
  const products: Product[] = await getProducts();
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={products} />
        </div>
      </div>
    </main>
  );
}
