import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

const Home = () => (
    <main data-testid="home-page" className="bg-brand-bone">
        <Navbar />
        <Hero />
        <About />
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
