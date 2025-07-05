"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function SuccessPage() {
    const params = useSearchParams();
    const orderId = params.get("order");

    return (
        <div className="max-w-3xl mx-auto px-4 py-20 text-center bg-white rounded-3xl shadow">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Thank you for your purchase!</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
                Your order ID is{" "}
                <span className="font-mono text-purple-700">{orderId}</span>
            </p>
            <Link href="/catalogue" className="inline-block">
                <Button>
                    Continue Shopping
                </Button>
            </Link>
        </div>
    );
}
