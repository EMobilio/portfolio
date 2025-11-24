"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";

export default function Header() {
    const [activeSection, setActiveSection] = useState("hero")
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "hero" },
        { name: "About", href: "about" },
        { name: "Projects", href: "projects" },
        { name: "Skills", href: "skills" },
        { name: "Contact", href: "contact" },
    ];

    const handleScroll = (id: string) => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth", block: "start"});
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        links.forEach((l) => {
            const section = document.getElementById(l.href);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeLink = document.querySelector(
            `a[data-link='${activeSection}']`
        ) as HTMLAnchorElement | null;
        
        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setUnderlineStyle({ left: offsetLeft - 6, width: offsetWidth + 12 });
        }
    }, [activeSection]);

    return (
        <header 
            className={
                    "h-16 backdrop-blur-md bg-surface/80 border-b border-border text-text-primary flex flex-wrap items-center justify-between \
                    px-6 sm:px-[10%] py-4 sticky top-0 z-[9999]"
                }
            >
            <div className="flex gap-0 items-center h-full">
                <div className="relative w-20 h-20">
                    <Image src="/favicon.svg" alt="logo" fill className="object-contain" />
                </div>

                <h1 className="hidden sm:block text-3xl font-bold whitespace-nowrap">Eytan Mobilio</h1>
            </div>

            {/* Hamburger menu button only visible on small screens */}
            <button
                className="md:hidden text-3xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <HamburgerIcon isOpen={menuOpen}/>
            </button>
            
            <nav className="relative w-full md:w-auto">
                {/* Desktop menu */}
                <ul className="hidden md:flex gap-5 lg:gap-10 text-base relative">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                data-link={link.href}
                                className="cursor-pointer transition-colors hover:text-primary-hover active:text-primary-hover"
                                onClick={() => handleScroll(link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile dropdown */}
                <div
                    className={
                        `md:hidden absolute left-0 right-0 top-full mt-4 bg-surface/95 backdrop-blur-md border border-border rounded-b-xl \
                        overflow-hidden shadow-md transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
                    }
                    style={{ transitionProperty: "max-height, opacity" }}
                >
                    <ul className="flex flex-col w-full">
                        {links.map((link) => (
                            <li key={link.name} className="w-full">
                                <a
                                    data-link={link.href}
                                    className={
                                        `block w-full text-lg px-8 py-4 cursor-pointer transition ${activeSection === link.href && "text-accent"}\
                                        hover:bg-accent/10 hover:text-primary-hover active:bg-accent/10 active:text-primary-hover`
                                    }
                                    onClick={() => handleScroll(link.href)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Active link underline */}
                <span 
                    className="absolute -bottom-4 h-1 bg-primary rounded-full transition-all duration-300 hidden md:block" 
                    style={{ left: underlineStyle.left, width: underlineStyle.width }}
                />
            </nav>
        </header>
    );
};