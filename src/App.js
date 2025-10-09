import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Design from "./pages/Design";
import Construction from "./pages/Construction";
import Contact from "./pages/Contact";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import FullService from "./pages/FullService";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen w-screen overflow-hidden font-noto">
                {/* Navbar */}
                <Navbar />
                <HelmetProvider>
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/giới-thiệu" element={<AboutUs />} />
                    <Route path="/dịch-vụ" element={<Services />} />
                    <Route path="/thiết-kế" element={<Design />} />
                    <Route path="/thi-công" element={<Construction />} />
                    <Route path="/trọn-gói" element={<FullService />} />

                    <Route path="/liên-hệ" element={<Contact />} />

                    <Route path="/news" element={<NewsList />} />
                    <Route path="/news/:slug" element={<NewsDetail />} />

                    <Route path="/projects" element={<ProjectList />} />
                    <Route path="/project/:slug" element={<ProjectDetail />} />

                </Routes>
                </HelmetProvider>
                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;