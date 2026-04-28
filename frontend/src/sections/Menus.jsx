import React from "react";
import { motion } from "framer-motion";
import { SAMPLE_MENUS } from "../data/content";

export const Menus = () => {
    return (
        <section
            id="menus"
            data-testid="menus-section"
            className="relative bg-brand-bone py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-10 bg-brand-ember" />
                        <span className="eyebrow text-brand-ember">Sample Menus</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-ink">
                        Three tables to <span className="italic font-light">pull up to.</span>
                    </h2>
                    <p className="mt-6 font-body text-brand-inkSoft text-base sm:text-lg max-w-xl leading-relaxed">
                        Each menu is a starting point. Tell Ali what you love and he'll re-write it
                        for your evening.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                    {SAMPLE_MENUS.map((menu, i) => (
                        <motion.div
                            key={menu.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            data-testid={`menu-card-${i}`}
                            className="bg-brand-bone border-t-2 border-brand-ember pt-8 px-1"
                        >
                            <div className="font-script text-3xl text-brand-ember leading-none">
                                Menu {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl text-brand-ink mt-3 leading-tight">
                                {menu.title}
                            </h3>
                            <p className="eyebrow text-brand-smoke mt-2">{menu.subtitle}</p>

                            <ul className="mt-8 space-y-6">
                                {menu.courses.map((c) => (
                                    <li key={c.name}>
                                        <div className="flex items-baseline gap-3">
                                            <span className="eyebrow text-brand-ember">{c.name}</span>
                                            <span className="flex-1 border-b border-dashed border-brand-clay" />
                                        </div>
                                        <p className="mt-2 font-display italic text-brand-inkSoft text-lg leading-snug">
                                            {c.items}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-20 hr-rustic max-w-md mx-auto" />
                <p className="text-center mt-8 font-script text-2xl text-brand-ember">
                    pricing scales with party size & menu — quotes within 24 hours
                </p>
            </div>
        </section>
    );
};
