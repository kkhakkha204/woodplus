import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Design from "./pages/Design";
import Construction from "./pages/Construction";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";




const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen w-screen overflow-hidden font-noto">
                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/giới-thiệu" element={<AboutUs />} />
                    <Route path="/dịch-vụ" element={<Services />} />
                    <Route path="/thiết-kế" element={<Design />} />
                    <Route path="/thi-công" element={<Construction />} />
                    <Route path="/dự-án" element={<Project />} />
                    <Route path="/liên-hệ" element={<Contact />} />

                    <Route path="/news" element={<NewsList />} />
                    <Route path="/news/:slug" element={<NewsDetail />} />

                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
//375
//678
//768
//1200
//1280
//1440
//1920