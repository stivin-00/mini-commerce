"use client";

import Link from "next/link";
import { Button } from "./Button";

interface ErrorElementProps {
    message?: string;
}

const ErrorElement = ({ message = "Something went wrong." }: ErrorElementProps) => {
    return (
        <div className="w-full min-h-[96vh] flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Oops!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
                {message}
            </p>
            <Link href="/" className="inline-block">
                <Button>
                    Return to Home
                </Button>
            </Link>
        </div>
    );
};

export default ErrorElement;
