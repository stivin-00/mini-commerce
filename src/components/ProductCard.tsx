import Link from "next/link";
import { Product } from "@/types";
import Image from "next/image";
import { useCartStore } from "../lib/zustandStore";
import { Button } from "./Button";

export default function ProductCard({ product }: { product: Product }) {
    const cartItems = useCartStore((s) => s.cartItems);
    const addItem = useCartStore((s) => s.addItem);

    const isInCart = cartItems.some((item) => item.id === product.id);



    return (
        <div className="border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col bg-white hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
            <Link
                href={`/product/${product.slug}`}
                className="block w-full mb-4 overflow-hidden rounded-xl relative"
            >
                <div className="w-full h-80 relative">
                    <Image
                        loading="lazy"
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </Link>

            <h2 className="text-lg font-bold mb-1 text-gray-900 line-clamp-2">{product.name}</h2>

            {product.description && (
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                    {product.description.toString().slice(0, 200) + "..."}
                </p>
            )}

            <p className="text-purple-600 font-bold text-lg mb-4">₦{product.price}</p>

            <Button
                onClick={() => addItem({ ...product, quantity: 1 })}
                disabled={isInCart}
            >
                {isInCart ? "Item Added to Cart" : "Add to Cart"}
            </Button>
        </div>
    );
}
