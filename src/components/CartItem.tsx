"use client";

import { CartItem as CartItemType, useCartStore } from "@/lib/zustandStore";
import Image from "next/image";

export default function CartItem({ item }: { item: CartItemType }) {
    const removeItem = useCartStore((s) => s.removeItem);
    const updateQuantity = useCartStore((s) => s.updateQuantity);

    const increaseQuantity = () => updateQuantity(item.id, item.quantity + 1);
    const decreaseQuantity = () =>
        updateQuantity(item.id, Math.max(1, item.quantity - 1));

    return (
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow p-4 gap-4">
            <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                />
            </div>

            <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <button
                            onClick={decreaseQuantity}
                            className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
                        >
                            -
                        </button>
                        <span className="min-w-6 text-center">{item.quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-between sm:items-center gap-2 sm:gap-0">
                    <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                        ₦{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium transition"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
