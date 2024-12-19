"use client";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import Tag from "../components/Tags";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    const [currentWord, setCurrentWord] = useState(0);
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);
    return (
        <section>
            <div className="container py-24 lg:py-40">
                <div className="sticky top-20 md:top-32">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better. </span>

                        <span>
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{` ${word}`}</span>
                            ))}
                        </span>

                        <span className="text-lime-400 block">
                            that is why we built layers
                        </span>
                    </div>
                </div>
                <div className="h-[100vh] lg:h-[50vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
