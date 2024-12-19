import FeaturesCard from "@/components/FeaturesCard";
import Tag from "@/components/Tags";
import TreeFeatureButtons from "@/components/TreeFeatureButtons";
import avatar1 from "../assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../assets/images/avatar-florence-shaw.jpg";
import avatar3 from "../assets/images/avatar-lula-meyers.jpg";
import avatar4 from "../assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
// import incrediableVideo from "../../public/gif-incredible.mp4";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    When power meets
                    <span className="text-lime-400"> simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-2">
                    <FeaturesCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team
                                editing"
                        className="col-span-1 md:col-span-2 md:mr-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500  z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-600 transition:">
                                <div className="size-full bg-neutral-700 rounded-full flex justify-center items-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="avatar"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    <span className="size-1 rounded-full bg-white"></span>
                                    <span className="size-1 rounded-full bg-white"></span>
                                    <span className="size-1 rounded-full bg-white"></span>
                                </div>
                            </Avatar>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototype that react to
                                user actions"
                        className="col-span-1  md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <p className=" text-4xl font-extrabold text-white/20 text-center">
                                We achieved
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text relative ">
                                    {" "}
                                    <span>Incredible </span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded=2xl shadow-2xl opacity-0 pointer-events-none group-hover:opacity-80 rounded-[20px] transition duration-500"
                                    />
                                </span>
                                growth this year
                            </p>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to helpyou creat designs more
                                quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
                    >
                        <div className="flex justify-center pt-10 gap-3">
                            <TreeFeatureButtons className="w-28 group-hover:outline outline-2 outline-lime-400 outline-offset-2 transition duration-1000 ">
                                Shift
                            </TreeFeatureButtons>
                            <TreeFeatureButtons className="group-hover:outline outline-2 outline-lime-400 outline-offset-2 transition duration-1000">
                                alt
                            </TreeFeatureButtons>
                            <TreeFeatureButtons className="group-hover:outline outline-2 outline-lime-400 outline-offset-2 transition duration-1000">
                                C
                            </TreeFeatureButtons>
                        </div>
                    </FeaturesCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-950 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-110 transition duration-500"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
