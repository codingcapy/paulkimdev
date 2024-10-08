import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import Article1Page from "./pages/Article1Page";
import Portfolio6Page from "./pages/Portfolio6Page";
import Portfolio7Page from "./pages/Portfolio7Page";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/articles/1" element={<Article1Page />} />
                <Route path="/portfolio/6" element={<Portfolio6Page />} />
                <Route path="/portfolio/7" element={<Portfolio7Page />} />
            </Route>
        )
    )
    return router
}

