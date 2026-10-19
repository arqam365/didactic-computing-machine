import { ArrowRight } from "lucide-react"

interface StatisticCardProps {
    percentage: string
    description: string
    variant: "white" | "light-gray" | "black"
}

function StatisticCard({ percentage, description, variant }: StatisticCardProps) {
    const isDark = variant === "black"
    const isLight = variant === "white" || variant === "light-gray"

    const cardClasses = [
        "flex items-center gap-4",
        "rounded-[8px] p-4", // 16px
        "border border-[rgba(0,0,0,0.15)]",
        "shadow-[0px_4px_14.1px_rgba(0,0,0,0.25)]",
        isDark ? "bg-[#0E0E0E] text-[#EEEEEE]" : "",
        isLight ? "bg-[#EEEEEE] text-[#0E0E0E]" : "",
    ].join(" ")

    const pillClasses = [
        "flex items-center justify-center",
        "w-[68px] h-[68px] p-4",
        "rounded-[4px]",
        isDark ? "bg-[#EEEEEE] text-[#0E0E0E]" : "bg-[#0E0E0E] text-[#EEEEEE]",
        "font-semibold text-[20px] leading-[1.01543]",
    ].join(" ")

    const descClasses = [
        "text-[16px] leading-[1.01543] font-medium",
        isDark ? "text-[#EEEEEE]" : "text-[#0E0E0E]",
    ].join(" ")

    return (
        <div className={cardClasses}>
            <div className={pillClasses}>{percentage}</div>
            <div className="flex-1">
                <p className={descClasses}>{description}</p>
            </div>
        </div>
    )
}

export function WhatPeopleNoticed() {
    const statistics = [
        {
            percentage: "91%",
            description: "Felt Clearer, Less Oily Skin In 4 Weeks (Tone 01)",
            variant: "white" as const,
        },
        {
            percentage: "88%",
            description: "Saw Fewer Breakouts In 4 Weeks (Tone 01)",
            variant: "light-gray" as const,
        },
        {
            percentage: "92%",
            description: "Experienced Long-Lasting Hydration In 1 Week (Lunar 02)",
            variant: "light-gray" as const,
        },
        {
            percentage: "95%",
            description: "Noticed Calmer Skin & Less Redness In 4 Weeks (Lunar 02)",
            variant: "black" as const,
        },
    ]

    return (
        <section id={"what-people-noticed"} className="bg-[#EEEEEE] py-16 md:py-32 px-4 md:px-16">
            <div className="mx-auto max-w-6xl">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-block rounded-l-[4px] bg-[linear-gradient(90deg,rgba(99,99,99,1)_0%,rgba(153,153,153,0)_96%)] px-8 py-2 text-[16px] leading-[1.01543] text-[#0E0E0E]">
                        What People Noticed
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-[#0E0E0E] font-semibold text-[32px] md:text-[48px] leading-[1.01543] text-balance">
                        Real Skin. Real Results.
                    </h2>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {statistics.map((stat, index) => (
                        <StatisticCard
                            key={index}
                            percentage={stat.percentage}
                            description={stat.description}
                            variant={stat.variant}
                        />
                    ))}
                </div>

                {/* CTA Button (black fill with gradient stroke) */}
                <div className="flex justify-center">
                    <span className="inline-flex rounded-[8px] p-[1.5px] bg-[linear-gradient(138deg,rgba(0,0,0,0.35)_0%,rgba(153,153,153,0)_100%)] shadow-[0px_4px_14.9px_rgba(0,0,0,0.15)]">
                        <a
                            href="/#meet-the-serums"
                            className="inline-flex items-center gap-2 rounded-[8px] bg-[#0E0E0E] px-12 py-4 text-[#EEEEEE] font-medium text-[20px] leading-[1.302em]"
                        >
                            Grab Yours Now
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
}
