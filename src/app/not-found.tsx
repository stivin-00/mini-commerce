import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <Link href="/catalogue">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                    Back to Catalogue
                </button>
            </Link>
        </div>
    );
}
