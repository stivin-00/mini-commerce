"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/lib/zustandStore";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartItems = useCartStore((s) => s.cartItems);

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-2 lg:px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dxjprordi/image/upload/v1751667140/martiful/shopping-logo-png_l9pwye.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded"
                    />
                    <span className="text-2xl font-bold text-purple-600 hidden sm:inline">
                        Mini
                    </span>
                </Link>

                {pathname === "/catalogue" && (
                    <div className="flex-1 mx-4 hidden md:block">
                        <SearchBar />
                    </div>
                )}

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/catalogue" className="hover:text-purple-600">Catalogue</Link>
                    <Link href="/cart" className="relative hover:text-purple-600">
                        <ShoppingCart className="w-6 h-6" />

                        <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-1">
                            {totalItems}
                        </span>

                    </Link>
                </nav>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu className="w-7 h-7" />
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div
                    className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-xl font-bold text-purple-600">Menu</span>
                        <button
                            className="text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">Home</Link>
                        <Link href="/catalogue" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">Catalogue</Link>
                        <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center hover:text-purple-600">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            <span>Cart</span>

                            <span className="ml-1 bg-red-500 text-white rounded-full text-xs px-1">
                                {totalItems}
                            </span>

                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
