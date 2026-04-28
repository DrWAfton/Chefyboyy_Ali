import React from "react";
import { Instagram, MapPin } from "lucide-react";
import { SITE } from "../data/content";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-brand-ink text-brand-bone py-16 sm:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-6">
                        <div className="flex items-baseline gap-2">
                            <span className="font-display text-3xl font-semibold">Chef Boy</span>
                            <span className="font-script text-4xl text-brand-ember">Ali</span>
                        </div>
                        <p className="mt-4 font-body text-brand-bone/70 max-w-md leading-relaxed">
                            Private chef &amp; caterer based in Converse, Texas. Bringing Texas BBQ,
                            Tex-Mex, Italian Sundays, and serious desserts to tables across South
                            Texas.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <div className="eyebrow text-brand-bone/60 mb-4">Find Him</div>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={SITE.instagram}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    data-testid="footer-instagram"
                                    className="inline-flex items-center gap-2 hover:text-brand-ember transition-colors"
                                >
                                    <Instagram size={16} />
                                    {SITE.instagramHandle}
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-2 text-brand-bone/80">
                                <MapPin size={16} />
                                {SITE.location}
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <div className="eyebrow text-brand-bone/60 mb-4">Cuisines</div>
                        <ul className="space-y-2 font-body text-brand-bone/80 text-sm">
                            <li>Texas BBQ</li>
                            <li>Comfort Food</li>
                            <li>Mexican &amp; Tex-Mex</li>
                            <li>Rustic Italian</li>
                            <li>Decadent Desserts</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-brand-bone/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="eyebrow text-brand-bone/50">
                        © {new Date().getFullYear()} Angel Ali · The Cook of Converse
                    </p>
                    <p className="font-script text-2xl text-brand-ember">
                        cooked with fire & care
                    </p>
                </div>
            </div>
        </footer>
    );
};
