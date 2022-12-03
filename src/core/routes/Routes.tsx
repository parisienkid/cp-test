import {lazy, Suspense } from "react";

import {
    Routes,
    Route,
} from "react-router-dom";

import CatalogPage from "../../pages/catalog-page/CatalogPage";
import FallbackPage from "../../pages/fallback-page/FallbackPage";
const ShoePage = lazy(() => import('../../pages/shoe-page/ShoePage'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<FallbackPage/>}>
            <Routes>
                <Route path="/" element={<CatalogPage />}/>
                <Route path="/:shoeId" element={<ShoePage />}/>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;