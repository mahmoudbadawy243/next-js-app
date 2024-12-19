"use client";
import Tags from "@/components/Tags";
import FigmaIcon from "../assets/images/figma-logo.svg";
import notionIcon from "../assets/images/notion-logo.svg";
import slackIcon from "../assets/images/slack-logo.svg";
import relumeIcon from "../assets/images/relume-logo.svg";
import framerIcon from "../assets/images/framer-logo.svg";
import githubIcon from "../assets/images/github-logo.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const integrations = [
    {
        name: "Figma",
        icon: FigmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export default function Integrations() {
    return (
        <section>
            <div className="container py-24 overflow-hidden text-center lg:flex items-center gap-24 ">
                <div className="md:mb-20  text-center">
                    <Tags>Integrations</Tags>
                    <h2 className="text-6xl lg:text-7xl mt-6 font-medium">
                        Plays well with{" "}
                        <span className="text-lime-400">others</span>
                    </h2>
                    <p className="text-white/50 mt-4 text-lg lg:text-xl max-md:text-center  ">
                        Layers seamlessly connects with your favourite tools,
                        making it easy to plug into any workflow and collaporate
                        across platforms
                    </p>
                </div>

                <div className="h-[400px] md:h-[600px] lg:h-[800px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_90%,transparent)]">
                    <motion.div
                        animate={{ y: "-90%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                            {/* 2 other copy for animation */}
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Fragment key={i}>
                                    {integrations.map((integration) => (
                                        <div
                                            key={integration.name}
                                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                                        >
                                            <div className="flex justify-center">
                                                <Image
                                                    src={integration.icon}
                                                    alt={integration.name}
                                                    className="size-24"
                                                />
                                            </div>
                                            <h3 className="text-3xl text-center mt-6">
                                                {integration.name}
                                            </h3>
                                            <p className="text-center text-white/50 mt-2">
                                                {integration.description}
                                            </p>
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
