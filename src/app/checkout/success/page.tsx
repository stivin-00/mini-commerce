import { Suspense } from "react";
import SuccessPage from "./SuccessPage";
import SuspenseElement from "@/components/SuspenseElement";

export default function SuccessPageWrapper() {
    return (
        <Suspense fallback={<SuspenseElement isPageLoader />}>
            <SuccessPage />
        </Suspense>
    );
}
