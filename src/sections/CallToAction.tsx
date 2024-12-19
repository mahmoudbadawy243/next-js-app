"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex gap-16 items-center">
                            <span className="text-lime-400">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
