"use client";

import Image from "next/image";

interface SuspenseElementProps {
    isPageLoader?: boolean;
}

const SuspenseElement = ({ isPageLoader = true }: SuspenseElementProps) => {
    return (
        <div
            className={`w-full flex justify-center items-center ${isPageLoader ? "min-h-[96vh]" : ""
                }`}
        >
            <Image
                src="/assets/action_loading.svg"
                alt="Loading..."
                width={224}
                height={224}
                className="w-[224px] md:w-[120px] object-contain text-purple-600 animate-spin"
                priority
            />
        </div>
    );
};

export default SuspenseElement;
