import React from "react";
import { motion } from "framer-motion";
import { ABOUT_IMAGE } from "../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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
                                Angel Ali is a private chef and caterer based in Converse, Texas — a
                                ten minute drive from downtown San Antonio. Friends, regulars, and
                                neighbors know him as <em>Chef Boy Ali</em> or, when the porch
                                conversations get going, <em>the Cook of Converse</em>.
                            </p>
                            <p>
                                He earned his culinary education at the{" "}
                                <span className="text-brand-ink font-medium">
                                    Auguste Escoffier School of Culinary Arts
                                </span>
                                , and sharpened his craft in the kind of kitchens that don't allow
                                shortcuts — Texas BBQ joints with smokers older than he is, and
                                Mexican kitchens where the abuelas grade your salsa.
                            </p>
                            <p>
                                What you get is a chef who treats every gathering like it matters,
                                because it does. Whether it's a dinner for two or a backyard for
                                seventy-five, the food shows up cooked with care, served with
                                pride, and finished with something sweet.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
                            <Stat label="Cuisines" value="5+" />
                            <Stat label="Trained at" value="Escoffier" small />
                            <Stat label="Based in" value="Converse, TX" small />
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
                                    alt="Chef Ali tending to a charcoal grill"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-4 bg-brand-bone border border-brand-clay px-6 py-4 max-w-[260px] hidden sm:block">
                                <p className="font-script text-2xl text-brand-ember leading-tight">
                                    "Cook like you're feeding people you love."
                                </p>
                                <p className="eyebrow text-brand-smoke mt-2">— Ali's rule no. 1</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ label, value, small }) => (
    <div className="border-l-2 border-brand-ember pl-4">
        <div
            className={`font-display text-brand-ink leading-none ${
                small ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"
            }`}
        >
            {value}
        </div>
        <div className="eyebrow text-brand-smoke mt-2">{label}</div>
    </div>
);
