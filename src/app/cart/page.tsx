"use client";

import { Button } from "@/components/Button";
import CartItem from "@/components/CartItem";
import { useCartStore } from "@/lib/zustandStore";
import Link from "next/link";

export default function CartPage() {
    const cartItems = useCartStore((s) => s.cartItems);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
                <p className="text-gray-500 mb-6">
                    Looks like you haven&apos;t added anything yet.
                </p>
                <Link
                    href="/catalogue"
                    className="inline-block bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors font-semibold text-lg"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-purple-600 text-center md:text-left">Your Cart</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {/* Subtotal & Checkout */}
                <div className="w-full md:w-1/3 bg-gray-50 rounded-2xl shadow p-6 h-fit">
                    <p className="text-2xl font-bold text-gray-900 mb-6">
                        Subtotal: ₦{subtotal.toFixed(2)}
                    </p>
                    <Link href="/checkout" className="w-full">
                        <Button>
                            Proceed to Checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
