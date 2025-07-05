"use client";

import { useParams, notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useCartStore } from "@/lib/zustandStore";
import { Product } from "@/types";
import { Button } from "@/components/Button";
import SuspenseElement from "@/components/SuspenseElement";
import ErrorElement from "@/components/ErrorElement";

export default function ProductPage() {
    const { slug } = useParams() as { slug: string };
    const addItem = useCartStore((s) => s.addItem);
    const cartItems = useCartStore((s) => s.cartItems);

    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: () => axios.get("/products.json").then((res) => res.data),
    });

    const product = data?.find((p) => p.slug === slug);



    const isInCart = cartItems.some((item) => item.id === product?.id);

    if (isLoading) return <SuspenseElement isPageLoader />;
    if (error) return <ErrorElement message="Failed to load product." />;
    if (!product) notFound();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-3xl p-6 flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-md h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
                    <p className="text-purple-600 text-2xl font-semibold mb-6">₦{product.price}</p>
                    <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
                    <Button
                        onClick={() => addItem({ ...product, quantity: 1 })}
                        disabled={isInCart}
                    >
                        {isInCart ? "Added to Cart ✅" : "Add to Cart"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
