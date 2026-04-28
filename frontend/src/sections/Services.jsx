import React from "react";
import { motion } from "framer-motion";
import { Flame, Trees, ChefHat, Truck } from "lucide-react";
import { SERVICES } from "../data/content";

const ICONS = [Flame, Trees, ChefHat, Truck];

export const Services = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative bg-brand-moss py-24 sm:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 grain pointer-events-none opacity-40" />
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-10 bg-brand-bone/60" />
                        <span className="eyebrow text-brand-bone/80">How He Works</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-bone">
                        Four ways to <span className="italic font-light">eat well.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {SERVICES.map((s, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                data-testid={`service-card-${i}`}
                                className="border-t border-brand-bone/30 pt-8 group"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="font-script text-2xl text-brand-bone/70 mb-2">
                                            0{i + 1}
                                        </div>
                                        <h3 className="font-display text-3xl sm:text-4xl text-brand-bone leading-tight">
                                            {s.title}
                                        </h3>
                                        <p className="mt-4 font-body text-brand-bone/75 text-base leading-relaxed max-w-md">
                                            {s.description}
                                        </p>
                                    </div>
                                    <Icon
                                        size={36}
                                        strokeWidth={1.25}
                                        className="text-brand-bone/60 group-hover:text-brand-ember transition-colors flex-shrink-0"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
