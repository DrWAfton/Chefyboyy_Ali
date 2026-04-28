import React from "react";
import { motion } from "framer-motion";
import { SPECIALTIES } from "../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: i * 0.08 },
    }),
};

export const Specialties = () => {
    return (
        <section
            id="specialties"
            data-testid="specialties-section"
            className="relative bg-brand-sand py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-10 bg-brand-ember" />
                        <span className="eyebrow text-brand-ember">What He Cooks</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-ink">
                        Five kitchens, <span className="italic font-light">one chef.</span>
                    </h2>
                    <p className="mt-6 font-body text-brand-inkSoft text-base sm:text-lg max-w-xl leading-relaxed">
                        Pick one for your event, or build a custom menu that pulls from a few. Ali
                        treats every cuisine with the same respect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
                    {SPECIALTIES.map((s, i) => {
                        const span =
                            i === 0
                                ? "md:col-span-3"
                                : i === 1
                                    ? "md:col-span-3"
                                    : "md:col-span-2";
                        return (
                            <motion.article
                                key={s.title}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                                data-testid={`specialty-card-${i}`}
                                className={`group relative ${span}`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-brand-clay">
                                    <img
                                        src={s.image}
                                        alt={s.alt || s.title}
                                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                                        <span className="eyebrow text-brand-bone/80">{s.kicker}</span>
                                        <h3 className="font-display text-3xl sm:text-4xl text-brand-bone leading-tight mt-1">
                                            {s.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-5">
                                    <p className="font-body text-brand-inkSoft text-sm sm:text-base leading-relaxed">
                                        {s.description}
                                    </p>
                                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                                        {s.items.map((it) => (
                                            <li
                                                key={it}
                                                className="eyebrow text-brand-smoke before:content-['·'] before:mr-3 before:text-brand-ember first:before:content-['']"
                                            >
                                                {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
