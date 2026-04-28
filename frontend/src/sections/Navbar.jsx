import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { SITE } from "../data/content";

const LINKS = [
    { id: "about", label: "About" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 24);
        handler();
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollTo = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-brand-bone/90 backdrop-blur-md border-b border-brand-clay"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between py-4">
                <button
                    onClick={() => scrollTo("hero")}
                    data-testid="nav-link-home"
                    className="flex items-baseline gap-2 group"
                >
                    <span className="font-display text-2xl font-semibold tracking-tight text-brand-ink">
                        Chef Boy
                    </span>
                    <span className="font-script text-3xl text-brand-ember leading-none">Ali</span>
                </button>

                <nav className="hidden md:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            data-testid={`nav-link-${l.id}`}
                            className="eyebrow text-brand-inkSoft hover:text-brand-ember transition-colors"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        href={SITE.instagram}
                        target="_blank"
                        rel="noreferrer noopener"
                        data-testid="nav-instagram-link"
                        className="text-brand-inkSoft hover:text-brand-ember transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                </nav>

                <button
                    className="md:hidden text-brand-ink"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    data-testid="nav-mobile-toggle"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-brand-bone border-t border-brand-clay overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {LINKS.map((l) => (
                                <button
                                    key={l.id}
                                    onClick={() => scrollTo(l.id)}
                                    data-testid={`nav-mobile-${l.id}`}
                                    className="eyebrow text-brand-inkSoft hover:text-brand-ember transition-colors text-left"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <a
                                href={SITE.instagram}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="eyebrow text-brand-inkSoft hover:text-brand-ember flex items-center gap-2"
                            >
                                <Instagram size={16} /> Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
