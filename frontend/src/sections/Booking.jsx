import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon, Instagram, MapPin, Mail } from "lucide-react";
import { toast } from "sonner";

import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { SITE, EVENT_TYPES } from "../data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialState = {
    name: "",
    email: "",
    phone: "",
    event_type: "",
    guest_count: "",
    message: "",
};

export const Booking = () => {
    const [form, setForm] = useState(initialState);
    const [date, setDate] = useState(undefined);
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);

    const update = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please share your name, email, and a short note.");
            return;
        }
        setSubmitting(true);
        try {
            const payload = {
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim() || null,
                event_date: date ? format(date, "yyyy-MM-dd") : null,
                event_type: form.event_type || null,
                guest_count: form.guest_count ? parseInt(form.guest_count, 10) : null,
                message: form.message.trim(),
            };
            await axios.post(`${API}/bookings`, payload);
            toast.success("Your inquiry is in. Ali will be in touch within 24 hours.");
            setDone(true);
            setForm(initialState);
            setDate(undefined);
        } catch (err) {
            console.error(err);
            const msg =
                err?.response?.data?.detail?.[0]?.msg ||
                err?.response?.data?.detail ||
                "Something went sideways. Try again or DM Ali on Instagram.";
            toast.error(typeof msg === "string" ? msg : "Submission failed. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="book"
            data-testid="booking-section"
            className="relative bg-brand-bone py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-brand-ember" />
                            <span className="eyebrow text-brand-ember">Book a Date</span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-ink">
                            Pick a night. <br />
                            <span className="italic font-light">He'll bring the fire.</span>
                        </h2>
                        <p className="mt-6 font-body text-brand-inkSoft text-base sm:text-lg leading-relaxed max-w-md">
                            Tell Ali a little about your gathering. He responds within 24 hours
                            with a custom menu and a quote.
                        </p>

                        <div className="mt-12 space-y-5">
                            <ContactRow
                                icon={MapPin}
                                label="Based in"
                                value="Converse, Texas · Greater San Antonio"
                            />
                            <ContactRow
                                icon={Instagram}
                                label="Instagram"
                                value={SITE.instagramHandle}
                                href={SITE.instagram}
                                testid="contact-instagram"
                            />
                            <ContactRow
                                icon={Mail}
                                label="Email"
                                value={SITE.email}
                                href={`mailto:${SITE.email}`}
                            />
                        </div>

                        <a
                            href={SITE.instagram}
                            target="_blank"
                            rel="noreferrer noopener"
                            data-testid="booking-instagram-cta"
                            className="mt-10 inline-flex items-center gap-3 border border-brand-ink text-brand-ink px-6 py-3 eyebrow hover:bg-brand-ink hover:text-brand-bone transition-colors"
                        >
                            <Instagram size={16} />
                            Follow on Instagram
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-7"
                    >
                        {done ? (
                            <div
                                data-testid="booking-success"
                                className="bg-brand-sand border border-brand-clay p-10 sm:p-12"
                            >
                                <div className="font-script text-4xl text-brand-ember">Thank you.</div>
                                <h3 className="mt-3 font-display text-3xl text-brand-ink leading-tight">
                                    Your inquiry is on its way.
                                </h3>
                                <p className="mt-4 font-body text-brand-inkSoft leading-relaxed max-w-md">
                                    Ali will reach out within 24 hours with a custom proposal.
                                    Meanwhile, take a peek at the kitchen on Instagram.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setDone(false)}
                                    data-testid="booking-reset"
                                    className="mt-8 eyebrow text-brand-ember hover:text-brand-emberDark"
                                >
                                    ← Send another inquiry
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                data-testid="booking-form"
                                className="bg-brand-bone border border-brand-clay p-8 sm:p-10 space-y-6"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Field
                                        label="Your Name"
                                        name="name"
                                        value={form.name}
                                        onChange={update("name")}
                                        required
                                        testid="booking-input-name"
                                    />
                                    <Field
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={update("email")}
                                        required
                                        testid="booking-input-email"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Field
                                        label="Phone (optional)"
                                        name="phone"
                                        value={form.phone}
                                        onChange={update("phone")}
                                        testid="booking-input-phone"
                                    />
                                    <Field
                                        label="Guest Count"
                                        type="number"
                                        name="guest_count"
                                        value={form.guest_count}
                                        onChange={update("guest_count")}
                                        min="1"
                                        testid="booking-input-guests"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="eyebrow text-brand-smoke block mb-3">
                                            Event Date
                                        </label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button
                                                    type="button"
                                                    data-testid="booking-date-picker"
                                                    className="w-full flex items-center justify-between border-b border-brand-clay py-3 text-left font-body text-brand-ink hover:border-brand-ember transition-colors"
                                                >
                                                    <span className={date ? "" : "text-brand-smoke"}>
                                                        {date ? format(date, "MMMM d, yyyy") : "Pick a date"}
                                                    </span>
                                                    <CalendarIcon size={16} className="text-brand-ember" />
                                                </button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                align="start"
                                                className="w-auto p-0 bg-brand-bone border border-brand-clay rounded-sm"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                                                    initialFocus
                                                    data-testid="booking-calendar"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div>
                                        <label className="eyebrow text-brand-smoke block mb-3">
                                            Event Type
                                        </label>
                                        <Select
                                            value={form.event_type}
                                            onValueChange={(v) => setForm((f) => ({ ...f, event_type: v }))}
                                        >
                                            <SelectTrigger
                                                data-testid="booking-event-type"
                                                className="w-full border-0 border-b border-brand-clay rounded-none px-0 focus:ring-0 focus:border-brand-ember bg-transparent text-brand-ink h-auto py-3"
                                            >
                                                <SelectValue placeholder="Select an occasion" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-brand-bone border border-brand-clay rounded-sm">
                                                {EVENT_TYPES.map((t) => (
                                                    <SelectItem key={t} value={t} className="font-body">
                                                        {t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <label className="eyebrow text-brand-smoke block mb-3">
                                        Tell Ali about your gathering
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={update("message")}
                                        placeholder="What are you celebrating? Any cuisine you're craving? Allergies?"
                                        data-testid="booking-input-message"
                                        className="w-full bg-transparent border-b border-brand-clay py-3 font-body text-brand-ink placeholder:text-brand-smoke focus:outline-none focus:border-brand-ember transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    data-testid="booking-submit"
                                    className="w-full sm:w-auto bg-brand-ember text-brand-bone px-10 py-4 eyebrow hover:bg-brand-emberDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting ? "Sending…" : "Send Inquiry"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Field = ({ label, testid, ...rest }) => (
    <div>
        <label className="eyebrow text-brand-smoke block mb-3">{label}</label>
        <input
            data-testid={testid}
            {...rest}
            className="w-full bg-transparent border-b border-brand-clay py-3 font-body text-brand-ink placeholder:text-brand-smoke focus:outline-none focus:border-brand-ember transition-colors"
        />
    </div>
);

const ContactRow = ({ icon: Icon, label, value, href, testid }) => {
    const content = (
        <>
            <Icon size={18} strokeWidth={1.5} className="text-brand-ember flex-shrink-0 mt-1" />
            <div>
                <div className="eyebrow text-brand-smoke">{label}</div>
                <div className="font-body text-brand-ink mt-1">{value}</div>
            </div>
        </>
    );
    if (href) {
        return (
            <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                data-testid={testid}
                className="flex items-start gap-4 group hover:text-brand-ember transition-colors"
            >
                {content}
            </a>
        );
    }
    return <div className="flex items-start gap-4">{content}</div>;
};
