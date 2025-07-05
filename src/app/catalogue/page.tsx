"use client";

import ErrorElement from "@/components/ErrorElement";
import ProductCard from "@/components/ProductCard";
import SuspenseElement from "@/components/SuspenseElement";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export default function CataloguePage() {
    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: () => axios.get("/products.json").then((res) => res.data),
    });

    if (isLoading) return <SuspenseElement isPageLoader />;
    if (error) return <ErrorElement message="Failed to load products." />;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Catalogue</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
