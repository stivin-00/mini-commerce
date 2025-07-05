"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // Implement search functionality here
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] focus-within:border-purple-500 transition"
        >
            <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="bg-purple-600 text-white p-2 flex items-center justify-center hover:bg-purple-700 transition-colors"
                aria-label="Search"
            >
                <Search className="w-5 h-5" />
            </button>
        </form>
    );
}
