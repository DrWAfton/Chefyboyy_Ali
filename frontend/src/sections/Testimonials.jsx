import React from "react";
import Marquee from "react-fast-marquee";
import { TESTIMONIALS } from "../data/content";

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative bg-brand-sand py-24 sm:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl mb-12 sm:mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-10 bg-brand-ember" />
                        <span className="eyebrow text-brand-ember">Praise</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-ink">
                        Said around the table.
                    </h2>
                </div>
            </div>

            <Marquee gradient gradientColor="#EAE4D9" gradientWidth={120} speed={28} pauseOnHover>
                {TESTIMONIALS.map((t, i) => (
                    <figure
                        key={i}
                        data-testid={`testimonial-${i}`}
                        className="mx-6 max-w-md py-2"
                    >
                        <blockquote className="font-display italic text-2xl sm:text-3xl text-brand-ink leading-snug">
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-4 flex items-center gap-3">
                            <span className="h-px w-6 bg-brand-ember" />
                            <span className="eyebrow text-brand-inkSoft">
                                {t.author} · {t.role}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </Marquee>
        </section>
    );
};
