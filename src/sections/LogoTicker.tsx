// import quantumLogo from "@/assets/images/quantum.svg";
// import acmeLogo from "@/assets/images/acme-corp.svg";
// import echoValleyLogo from "@/assets/images/echo-valley.svg";
// import pulseLogo from "@/assets/images/pulse.svg";
// import outsideLogo from "@/assets/images/outside.svg";
// import apexLogo from "@/assets/images/apex.svg";
// import celestialLogo from "@/assets/images/celestial.svg";
// import twiceLogo from "@/assets/images/twice.svg";

// const logos = [
//     { name: "Quantum", image: quantumLogo },
//     { name: "Acme Corp", image: acmeLogo },
//     { name: "Echo Valley", image: echoValleyLogo },
//     { name: "Pulse", image: pulseLogo },
//     { name: "Outside", image: outsideLogo },
//     { name: "Apex", image: apexLogo },
//     { name: "Celestial", image: celestialLogo },
//     { name: "Twice", image: twiceLogo },
// ];

// export default function LogoTicker() {
//     return <div>Logo Ticker</div>;
// }

"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
    return (
        <>
            <div className=" py-8 md:py-16">
                <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        <Image
                            src={acmeLogo}
                            className="logo-ticker-image"
                            alt="acme logo"
                        />
                        <Image
                            src={quantumLogo}
                            className="logo-ticker-image"
                            alt="quantum logo"
                        />
                        <Image
                            src={echoValleyLogo}
                            className="logo-ticker-image"
                            alt=" logo"
                        />
                        <Image
                            src={celestialLogo}
                            className="logo-ticker-image"
                            alt="celestial logo"
                        />
                        <Image
                            src={pulseLogo}
                            className="logo-ticker-image"
                            alt="pulse logo"
                        />
                        <Image
                            src={apexLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={outsideLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={twiceLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />

                        {/* copy only for animation */}

                        <Image
                            src={acmeLogo}
                            className="logo-ticker-image"
                            alt="acme logo"
                        />
                        <Image
                            src={quantumLogo}
                            className="logo-ticker-image"
                            alt="quantum logo"
                        />
                        <Image
                            src={echoValleyLogo}
                            className="logo-ticker-image"
                            alt=" logo"
                        />
                        <Image
                            src={celestialLogo}
                            className="logo-ticker-image"
                            alt="celestial logo"
                        />
                        <Image
                            src={pulseLogo}
                            className="logo-ticker-image"
                            alt="pulse logo"
                        />
                        <Image
                            src={apexLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={outsideLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={twiceLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />

                        {/* also copy only for animation */}

                        <Image
                            src={acmeLogo}
                            className="logo-ticker-image"
                            alt="acme logo"
                        />
                        <Image
                            src={quantumLogo}
                            className="logo-ticker-image"
                            alt="quantum logo"
                        />
                        <Image
                            src={echoValleyLogo}
                            className="logo-ticker-image"
                            alt=" logo"
                        />
                        <Image
                            src={celestialLogo}
                            className="logo-ticker-image"
                            alt="celestial logo"
                        />
                        <Image
                            src={pulseLogo}
                            className="logo-ticker-image"
                            alt="pulse logo"
                        />
                        <Image
                            src={apexLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={outsideLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                        <Image
                            src={twiceLogo}
                            className="logo-ticker-image"
                            alt="apex logo"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};
