import { twMerge } from "tailwind-merge";

export default function FeaturesCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-6 rounded-3xl mb-4 ",
                className
            )}
        >
            <div className="aspect-video ">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6 text-center">
                    {title}
                </h3>
                <p className="text-white/50 mt-2 text-center">{description}</p>
            </div>
        </div>
    );
}
