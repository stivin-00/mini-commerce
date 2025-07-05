"use client";

import { Button } from "@/components/Button";
import { useCartStore } from "@/lib/zustandStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const cartItems = useCartStore((s) => s.cartItems);
    const clearCart = useCartStore((s) => s.clearCart);
    const router = useRouter();

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const placeOrder = () => {
        clearCart();
        router.push(`/checkout/success?order=₦{Math.floor(Math.random() * 1000000)}`);
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-20 text-lg">
                Your cart is empty.
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-purple-600 text-center">Checkout</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-1 bg-white rounded-2xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Items</h2>
                    <div className="divide-y">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-4">
                                <div className="flex-1">
                                    <p className="text-gray-900 font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <div className="text-gray-800 font-bold whitespace-nowrap">
                                    ₦{(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total Summary */}
                <div className="w-full md:w-1/3 bg-gray-50 rounded-2xl shadow p-6 h-fit">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Summary</h2>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-700 font-medium">Subtotal:</span>
                        <span className="text-gray-900 font-bold text-lg">₦{subtotal.toFixed(2)}</span>
                    </div>
                    <Button
                        onClick={placeOrder}
                    >
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
}
