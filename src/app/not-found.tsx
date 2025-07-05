import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center mt-20 ">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <Link href="/catalogue" >
                <Button className="max-w-[400px]">
                    Back to Catalogue
                </Button>
            </Link>
        </div>
    );
}
