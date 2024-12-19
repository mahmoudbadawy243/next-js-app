"use client";
import { motion, useAnimate } from "framer-motion";
import designImage1 from "../assets/images/design-example-1.png";
import designImage2 from "../assets/images/design-example-2.png";
import cursorYouImage from "../assets/images/cursor-you.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
    const [leftImageScope, leftImageAnimate] = useAnimate();
    const [rightImageScope, rightImageAnimate] = useAnimate();

    // -----------------------------------------------

    useEffect(() => {
        leftImageAnimate([
            [leftImageScope.current, { opacity: [1] }, { duration: 0.5 }],
            [leftImageScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
    }, []);

    // -----------------------------------------------

    useEffect(() => {
        rightImageAnimate([
            [rightImageScope.current, { opacity: [1] }, { duration: 0.5 }],
            [
                rightImageScope.current,
                { x: 0, y: 0 },
                { duration: 0.5, delay: 1 },
            ],
        ]);
    }, []);

    // -----------------------------------------------
    return (
        <section
            className="py-24 relative overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}),auto`,
            }}
        >
            <motion.div
                ref={leftImageScope}
                initial={{ opacity: 0, x: -100, y: 100 }}
                className="absolute -left-20 top-16 hidden lg:block"
                drag
            >
                <Image
                    src={designImage1}
                    alt="design Image"
                    height={400}
                    draggable="false"
                />
            </motion.div>
            <motion.div
                ref={rightImageScope}
                initial={{ opacity: 0, x: 100, y: 100 }}
                drag
                className="absolute -right-20 top-16 hidden lg:block"
            >
                <Image
                    src={designImage2}
                    alt="design Image"
                    height={400}
                    draggable="false"
                />
            </motion.div>
            <div className="container  ">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessely
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    design tools should not slow you down, Layers combines
                    powerful features with an inituitive interface that keeps
                    you in your creative flow
                </p>
                <form
                    action=""
                    className="flex border border-white/20 rounded-full p-2 mt-8 mx-auto max-w-lg"
                >
                    <input
                        type="email"
                        placeholder="enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <button className="btn green-btn w-20 flex justify-center items-center gap-1  ">
                        <span>Sign</span>
                        <span>Up</span>
                    </button>
                </form>
            </div>
        </section>
    );
}
