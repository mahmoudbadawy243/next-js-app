"use client";
import Image from "next/image";
import logoImage from "../assets/images/logo.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="fixed w-full top-0 z-50 ">
                <div className="container py-4 lg:py-8 max-w-3xl lg:max-w-5xl  ">
                    <div className="border border-white/15  rounded-[25px] md:rounded-[50px] bg-neutral-900/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4   ">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="logo image"
                                    className="h-9 md:h-auto w-auto"
                                />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium ">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-menu md:hidden "
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "origin-left",
                                            isOpen &&
                                                "rotate-45 -translate-y-2 translate-x-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                                <button className="btn white-btn hidden md:block ">
                                    Log In
                                </button>
                                <button className="btn green-btn hidden md:block">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className=" overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="py-2"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <button className="btn white-btn ">
                                            Log In
                                        </button>
                                        <button className="btn green-btn ">
                                            Sign Up
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <div className="pb-[60px] md:mb-[60px] lg:mb-[60px]"></div>
        </>
    );
}
