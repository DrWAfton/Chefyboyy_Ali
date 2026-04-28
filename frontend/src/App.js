import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Specialties } from "./sections/Specialties";
import { Menus } from "./sections/Menus";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";
import { Booking } from "./sections/Booking";
import { Footer } from "./sections/Footer";

const Home = () => (
    <main data-testid="home-page" className="bg-brand-bone">
        <Navbar />
        <Hero />
        <About />
        <Specialties />
        <Menus />
        <Services />
        <Testimonials />
        <Booking />
        <Footer />
    </main>
);

function App() {
    return (
        <div className="App">
            <Toaster
                position="top-center"
                richColors
                toastOptions={{
                    style: {
                        fontFamily: "'Work Sans', sans-serif",
                        borderRadius: "2px",
                    },
                }}
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
