import Image from 'next/image';

interface ProductItem {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductProps {
    product: ProductItem;
}

const ProductCard = ({ product }: ProductProps) => {
    return (
        
        <div className="flex flex-col w-64 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            
           <div className="flex justify-center items-center h-48 mb-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={150} 
                    height={180}
                    className="object-contain"
                />
            </div>

            <div className="flex flex-col items-start gap-2">
                <h2 className="text-sm font-bold text-gray-800 truncate w-full">
                    {product.title}
                </h2>

                <div className="flex justify-between items-center w-full mt-2">
                    <span className="text-blue-900 font-extrabold text-lg">
                        {product.price.toFixed(2)}
                    </span>
                    
                    <button className="bg-indigo-600 text-white text-xs px-4 py-1.5 rounded-full hover:bg-indigo-700 transition-colors">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;