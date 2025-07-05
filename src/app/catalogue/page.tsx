"use client";

import ErrorElement from "@/components/ErrorElement";
import ProductCard from "@/components/ProductCard";
import SuspenseElement from "@/components/SuspenseElement";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalStore } from "@/lib/globalStore";
import SearchBar from "@/components/SearchBar";

export default function CataloguePage() {
    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: () => axios.get("/products.json").then((res) => res.data),
    });

    const searchQuery = useGlobalStore((s) => s.searchQuery);

    const filteredProducts = data?.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) return <SuspenseElement isPageLoader />;
    if (error) return <ErrorElement message={error.message || "Failed to load products"} />;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Catalogue</h1>
            <div className="py-4 w-full flex md:hidden">
                <SearchBar />
            </div>
            {filteredProducts?.length === 0 ? (
                <div className="text-center mt-20">
                    <p className="text-gray-500 font-bold text-lg">No products found for &quot;{searchQuery}&quot;.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
