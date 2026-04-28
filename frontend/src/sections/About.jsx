import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Calendar as CalIcon } from "lucide-react";
import { ABOUT_IMAGE, COOKOUT_GALLERY, SITE } from "../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SIGNATURE_MENU = [
    { name: "Grilled Chicken", note: "marinated, charred, juicy" },
    { name: "Smoked Sausage", note: "hot links, pepper-snapped" },
    { name: "Ribs", note: "low and slow" },
    { name: "Shoestring Fries", note: "with every plate" },
    { name: "Hand-Cut Jerky", note: "the fundraiser — cured & smoked" },
];

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative bg-brand-bone py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-7 lg:order-2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-brand-ember" />
                            <span className="eyebrow text-brand-ember">The Cook</span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-ink">
                            Trained classically. <br />
                            <span className="italic font-light">Cooks like family.</span>
                        </h2>

                        <div className="mt-8 space-y-5 font-body text-brand-inkSoft text-base sm:text-lg leading-relaxed max-w-2xl">
                            <p>
                                Angel Ali is a chef based out of San Antonio and Converse, Texas. Friends call him <em>Chef Boy Ali</em>; the porch calls him <em>the Cook of Converse</em>. He earned his culinary education at the <span className="text-brand-ink font-medium">Auguste Escoffier School of Culinary Arts</span>, then took the craft straight to the streets.
                            </p>
                            <p>
                                Ali doesn't run a restaurant. He cooks <span className="text-brand-ink font-medium">in public</span> — at lunch drops for local employees and at community events for inmates and the indigent on the first Friday of the month. The food is <span className="text-brand-ink font-medium">free</span>. The next cookout lands at The Thursty Turtle in San Antonio.
                            </p>
                            <p>
                                Hand-cut jerky, smoked low and slow, is the one thing he sells — and every dollar goes back into the fundraiser that pays for the next free cookout.
                            </p>
                            <p>Show up hungry. Stay for a story. Leave full.</p>
                        </div>

                        {/* Signature menu */}
                        <div className="mt-12 border-t-2 border-brand-ember pt-8 max-w-2xl">
                            <div className="font-script text-3xl text-brand-ember leading-none">
                                What he cooks
                            </div>
                            <h3 className="font-display text-2xl sm:text-3xl text-brand-ink mt-2">
                                The Cookout Spread
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {SIGNATURE_MENU.map((item) => (
                                    <li key={item.name} className="flex items-baseline gap-3">
                                        <span className="font-display text-lg text-brand-ink">
                                            {item.name}
                                        </span>
                                        <span className="flex-1 border-b border-dashed border-brand-clay" />
                                        <span className="font-body italic text-sm text-brand-smoke">
                                            {item.note}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Where & When */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                            <div className="border-l-2 border-brand-ember pl-4">
                                <div className="flex items-center gap-2 eyebrow text-brand-smoke mb-2">
                                    <MapPin size={14} /> Next Event · May 2
                                </div>
                                <div className="font-display text-lg text-brand-ink leading-snug">
                                    The Thursty Turtle
                                </div>
                                <div className="font-body text-sm text-brand-inkSoft mt-1">
                                    1626 NE Interstate 410 Loop
                                    <br />
                                    San Antonio, TX
                                </div>
                            </div>
                            <div className="border-l-2 border-brand-ember pl-4">
                                <div className="flex items-center gap-2 eyebrow text-brand-smoke mb-2">
                                    <CalIcon size={14} /> Outreach
                                </div>
                                <div className="font-display text-lg text-brand-ink leading-snug">
                                    First Friday of the Month
                                </div>
                                <div className="font-body text-sm text-brand-inkSoft mt-1">
                                    Meals for inmates, the indigent, and anyone needing a plate.
                                </div>
                            </div>
                        </div>

                        {/* Social CTAs */}
                        <div className="mt-12 flex flex-wrap items-center gap-4">
                            <a
                                href={SITE.instagram}
                                target="_blank"
                                rel="noreferrer noopener"
                                data-testid="about-instagram"
                                className="inline-flex items-center gap-3 border border-brand-ink text-brand-ink px-6 py-3 eyebrow hover:bg-brand-ink hover:text-brand-bone transition-colors"
                            >
                                <Instagram size={16} /> {SITE.instagramHandle}
                            </a>
                            <a
                                href={SITE.facebook}
                                target="_blank"
                                rel="noreferrer noopener"
                                data-testid="about-facebook"
                                className="inline-flex items-center gap-3 border border-brand-ink text-brand-ink px-6 py-3 eyebrow hover:bg-brand-ink hover:text-brand-bone transition-colors"
                            >
                                <Facebook size={16} /> {SITE.facebookHandle}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-5 lg:order-1"
                    >
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden bg-brand-clay">
                                <img
                                    src={ABOUT_IMAGE}
                                    alt="Spice-rubbed chicken on the grill"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-4 bg-brand-bone border border-brand-clay px-6 py-4 max-w-[280px] hidden sm:block">
                                <p className="font-script text-2xl text-brand-ember leading-tight">
                                    "Cook for the block. Charge nothing. Feed everybody."
                                </p>
                                <p className="eyebrow text-brand-smoke mt-2">— Ali's rule no. 1</p>
                            </div>
                        </div>

                        {/* Cookout gallery */}
                        <div className="mt-12">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="h-px w-8 bg-brand-ember" />
                                <span className="eyebrow text-brand-ember">From the Cookouts</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {COOKOUT_GALLERY.map((g, i) => (
                                    <figure
                                        key={i}
                                        data-testid={`cookout-photo-${i}`}
                                        className="group"
                                    >
                                        <div className="aspect-square overflow-hidden bg-brand-clay">
                                            <img
                                                src={g.url}
                                                alt={g.alt}
                                                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                                style={
                                                    g.crop
                                                        ? {
                                                              transform: `scale(${g.crop.scale})`,
                                                              transformOrigin: `${g.crop.originX}% ${g.crop.originY}%`,
                                                          }
                                                        : undefined
                                                }
                                            />
                                        </div>
                                        <figcaption className="eyebrow text-brand-smoke mt-2 text-[0.65rem]">
                                            {g.caption}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
