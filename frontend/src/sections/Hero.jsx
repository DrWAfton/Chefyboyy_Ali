import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { HERO_IMAGE, SITE } from "../data/content";

export const Hero = () => {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative min-h-screen flex items-end overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    src={HERO_IMAGE}
                    alt="Chef Ali in his kitchen"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/70 to-brand-ink/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grain" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6 text-brand-bone/90">
                        <span className="h-px w-10 bg-brand-bone/60" />
                        <span className="eyebrow">Community Cookouts · {SITE.location}</span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-brand-bone leading-[0.95] tracking-tight">
                        Smoke, fire,
                        <br />
                        <span className="italic font-light">and a plate</span>
                        <br />
                        on the house.
                    </h1>

                    <div className="mt-8 max-w-xl">
                        <p className="font-body text-base sm:text-lg text-brand-bone/85 leading-relaxed">
                            I'm <span className="font-script text-2xl text-brand-bone">Angel Ali</span>, known locally as <span className="italic">Chef Boy Ali</span>, the Cook of Converse. I host monthly pop-up cookouts around San Antonio where I serve free meals to anyone in need — or anyone who just wants to come eat and connect. I also make jerky for fundraisers to help cover event costs like food, fuel, and supplies. Donations and tips are accepted, with the option to stay anonymous or be recognized.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollTo("about")}
                            data-testid="hero-about-button"
                            className="bg-brand-ember text-brand-bone px-8 py-4 eyebrow hover:bg-brand-emberDark transition-colors group inline-flex items-center justify-center gap-3"
                        >
                            Meet the Chef
                            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <a
                            href={SITE.instagram}
                            target="_blank"
                            rel="noreferrer noopener"
                            data-testid="hero-instagram-button"
                            className="border border-brand-bone/60 text-brand-bone px-8 py-4 eyebrow hover:bg-brand-bone hover:text-brand-ink transition-colors text-center"
                        >
                            Follow on Instagram
                        </a>
                    </div>

                    <div className="mt-14 flex items-center gap-6 text-brand-bone/70">
                        <MapPin size={16} strokeWidth={1.5} />
                        <span className="eyebrow">Next event · May 2 · {SITE.venue}</span>
                    </div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollTo("about")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2.4 } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-brand-bone/80 hover:text-brand-bone"
                aria-label="Scroll down"
            >
                <ArrowDown size={20} strokeWidth={1.5} />
            </motion.button>
        </section>
    );
};
