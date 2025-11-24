"use client";

import Link from "next/link";

export default function Button({
    children,
    variant = "primary",
    sectionId,
    href,
}: {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "accent";
    sectionId?: string,
    href?: string;
}) {
    const base = 
        "relative inline-flex items-center justify-center rounded-full w-42 px-6 py-3 text-lg font-semibold transition duration-400 \
        hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_6px_18px_rgba(16,185,129,0.35)] active:shadow-[0_6px_18px_rgba(16,185,129,0.35)] \
        overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 \
        hover:before:scale-x-100 active:before:scale-x-100 cursor-pointer";

        const styles = {
            primary: "bg-primary text-background before:bg-primary-hover",
            outline: "border border-primary text-primary before:bg-primary/10",
            accent: "bg-accent/20 text-accent before:bg-accent/30",
        };

    const handleClick = () => {
        if (sectionId) {
            const elem = document.getElementById(sectionId);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    const btn = (
        <button onClick={handleClick} className={`${base} ${styles[variant]}`}>
            <span className="relative z-10">{children}</span>
        </button>
    );

    return href ? <Link href={href} target="_blank">{btn}</Link> : btn;
}