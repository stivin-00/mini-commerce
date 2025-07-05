"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                primary: "w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors mt-auto cursor-pointer",
                secondary: "w-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors mt-auto cursor-pointer",
                danger: "w-full bg-red-600 text-white hover:bg-red-700 transition-colors mt-auto cursor-pointer",
            },
            size: {
                sm: "text-sm px-4 py-2",
                md: "text-base px-6 py-3",
                lg: "text-lg px-8 py-4",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean; // allow for <Link> or other wrappers
    href?: string; // allow for links
}

export function Button({ className, variant, size, asChild, href, ...props }: ButtonProps) {
    const Comp: React.ElementType = asChild || href ? Link : "button";
    const componentProps = href ? { href } : {};

    return (
        <Comp
            className={cn(buttonVariants({ variant, size }), className)}
            {...componentProps}
            {...props}
        />
    );
}
