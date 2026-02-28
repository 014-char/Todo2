import ProductCard from "./ProductCard";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products'); 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ProductPage() {
  
  const products: ProductItem[] = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">รายการสินค้าทั้งหมด</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}