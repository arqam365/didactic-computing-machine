"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, InfoIcon, ChevronLeft } from 'lucide-react';
import Link from "next/link";

// Mobile-only flip card
interface MobileSerumCardProps {
    title: string;
    tag: string;
    imgSrc: string;
    description: string;
    howToUse: string;
    ingredients: string;
    buyLink: string;
}

const MobileSerumCard: React.FC<MobileSerumCardProps> = ({
    title,
    tag,
    imgSrc,
    description,
    howToUse,
    ingredients,
    buyLink,
}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="md:hidden relative w-full [perspective:1000px]">
            {/* inner wrapper */}
            <div
                className="transition-transform duration-500 [transform-style:preserve-3d] w-full"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
                {/* FRONT */}
                <div className="relative z-10 flex flex-col items-center text-center gap-4 p-5 bg-[#eeeeee] rounded-[8px] backface-hidden">
                    <img src={imgSrc} alt={title} className="w-40 h-auto object-contain" />
                    <h3 className="text-[#0e0e0e] text-3xl font-bold">{title}</h3>
                    <span className="bg-[#0e0e0e] text-[#eeeeee] text-xs px-3 py-1 rounded">{tag}</span>
                    <p className="text-[#0e0e0e] text-base leading-[1.3]">{description}</p>
                    <div className="flex flex-col gap-3 w-full">
                        <Button asChild className="bg-[#0e0e0e] text-white h-11 px-6 py-2 rounded-[8px] text-base hover:bg-gray-800 w-full">
                            <Link href={buyLink} className="flex items-center justify-center gap-2" aria-label={`Buy ${title} now`}>
                                Buy Now
                                <ArrowUpRight className="size-5" />
                            </Link>
                        </Button>
                        <button
                            onClick={() => setFlipped(true)}
                            className="flex items-center justify-center gap-2 text-[#0e0e0e] underline underline-offset-4"
                        >
                            <InfoIcon className="size-4" />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 flex flex-col gap-6 p-6 rounded-[8px] bg-[#1b1b1b] text-[#eeeeee] [transform:rotateY(180deg)] backface-hidden">
                    <button
                        onClick={() => setFlipped(false)}
                        className="self-start rounded-full bg-[#4c4c4c] p-2"
                    >
                        <ChevronLeft className="size-5 text-white" />
                    </button>
                    <h3 className="text-3xl font-bold text-center w-full">{title}</h3>
                    <span className="mx-auto bg-[#363636] text-[#eeeeee] text-xs px-3 py-1 rounded">
                        {tag}
                    </span>

                    <div className="text-left flex flex-col gap-4 mt-4">
                        <div>
                            <h4 className="font-semibold mb-1">How to Use</h4>
                            <p className="text-sm leading-[1.35]">{howToUse}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Ingredients</h4>
                            <p className="text-sm leading-[1.35]">{ingredients}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const img2 = "/bubbles_3.png";
const img3 = "/lunar_02_with_bubbles.png";

// ... existing code ...
export default function MeetTheSerums() {
    // Desktop (md+) card flip states
    const [flipMdTone01, setFlipMdTone01] = useState(false);
    const [flipMdLunar02, setFlipMdLunar02] = useState(false);

    // shared desktop details
    const details = {
        tone01: {
            title: 'Tone 01',
            tag: "People’s Choice for Oily/Combination Skin",
            how: 'Apply 2–3 drops to clean skin, morning and night. Follow with moisturizer and sunscreen in the AM. Patch test recommended. Avoid eye contact.',
            ing: 'Aqua, D-Panthenol, Hyaluronic Acid, Glycerin, Ethylhexylglycerin, Niacinamide, Glycyrrhiza Glabra (Licorice) Root Extract, Xanthan Gum, Camellia Sinensis Leaf Extract, Disodium EDTA, Zinc Pyrrolidone Carboxylic Acid, Potassium Sorbate, Alpha Arbutin, Glycolic Acid, Kojic Acid, Phenoxyethanol, Triethanolamine.'
        },
        lunar02: {
            title: 'Lunar O2',
            tag: "People’s Choice for Dry/Normal Skin",
            how: 'Apply 2–3 drops to clean skin, morning and night. Follow with moisturizer and sunscreen in the AM. Patch test recommended. Avoid eye contact.',
            ing: 'Aqua, D‑Panthenol, Hyaluronic Acid, Glycerin, Ethylhexylglycerin, Niacinamide, Glycyrrhiza Glabra (Licorice) Root Extract, Xanthan Gum, Camellia Sinensis Leaf Extract, Disodium EDTA, Zinc Pyrrolidone Carboxylic Acid, Sodium Benzoate, Alpha Arbutin, Lactic Acid, Allantoin, Phenoxyethanol, Sodium Hydroxide, Avena Sativa (Oat) Kernel Extract.'
        }
    };
    return (
        <div id={"meet-the-serums"} className="bg-[#0e0e0e] box-border content-stretch flex flex-col gap-12 md:gap-16 items-center justify-start px-4 sm:px-8 md:px-16 lg:px-20 py-16 md:py-32 relative" data-node-id="20:170">
            <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-node-id="22:288">
                <div className="bg-gradient-to-r box-border content-stretch flex from-[#636363] gap-2.5 items-center justify-center px-8 py-2 relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 to-[#99999900] to-[96.077%]" data-node-id="20:171">
                    <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#eeeeee] text-[16px] text-center text-nowrap" data-node-id="20:172" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[77.99%] whitespace-pre">Our Solutions</p>
                    </div>
                </div>
                <div className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#eeeeee] text-[32px] md:text-[44px] lg:text-[48px] text-center w-full md:w-[891px] mx-auto" data-node-id="20:177" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[77.99%]">Meet the HelloCloud Serums</p>
                </div>
            </div>
            <div className="content-stretch flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 md:gap-6 lg:gap-8 md:min-h-[487px] items-stretch md:items-center justify-start overflow-visible relative shrink-0 w-full" data-node-id="22:228">
                <div className="md:basis-0 md:col-span-2 bg-[#eeeeee] md:grow h-auto min-h-[420px] md:min-h-[487px] min-w-px overflow-visible md:overflow-hidden relative rounded-[8px] shrink-0 pb-0 md:pb-0" data-name="solution card" data-node-id="115:620">
                    {/* Mobile layout (md and below) */}
                    <MobileSerumCard
                        title="Tone 01"
                        tag="People’s Choice for Oily/Combination Skin"
                        imgSrc="/tone 1 pic.png"
                        description="An oil-control Face serum containing 7% Niacinamide, Zinc PCA, and Glycolic Acid to help regulate sebum, reduce breakouts, fade post-acne marks, and support a calmer, balanced skin barrier."
                        howToUse="Apply 2–3 drops to clean skin, morning and night. Follow with moisturizer and sunscreen in the AM. Patch test recommended. Avoid eye contact."
                        ingredients="Aqua, D-Panthenol, Hyaluronic Acid, Glycerin, Ethylhexylglycerin, Niacinamide, Glycyrrhiza Glabra (Licorice) Root Extract, Xanthan Gum, Camellia Sinensis Leaf Extract, Disodium EDTA, Zinc Pyrrolidone Carboxylic Acid, Potassium Sorbate, Alpha Arbutin, Glycolic Acid, Kojic Acid, Phenoxyethanol, Triethanolamine."
                        buyLink="https://rzp.io/rzp/hellocloud-tone-01"
                    />

                    {/* Desktop (md+) flip content */}
                    <div className="hidden md:block absolute inset-0">
                        <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipMdTone01 ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                            {/* FRONT */}
                            <div className="absolute inset-0 backface-hidden">
                                <div className="absolute bg-[49.76%_49.66%] bg-no-repeat bg-size-[181.8%_172.06%] h-[304px] left-[-192px] top-[258px] w-[511.5px]" style={{ backgroundImage: `url('${img2}')` }} />
                                <div className="absolute bg-left-bottom bg-contain bg-no-repeat h-[508.25px] left-0 bottom-0 w-[406.688px]" style={{ backgroundImage: `url('${"/tone_01_with_bubbles.png"}')` }} />
                                <div className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] text-[#0e0e0e] text-[32px] md:text-[44px] lg:text-[48px] text-center text-nowrap top-6 md:top-8 lg:top-10 translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14", left: "calc(50% + 0.5px)" }}>
                                    <p className="leading-[77.99%] whitespace-pre">Tone 01</p>
                                </div>
                                <div className="absolute bg-[#0e0e0e] box-border content-stretch flex gap-2.5 items-center justify-center px-6 md:px-7 lg:px-8 py-2 rounded-[4px] top-[72px] md:top-[85px] lg:top-[96px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
                                    <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#eeeeee] text-[12px] md:text-[13px] lg:text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[77.99%] whitespace-pre">People’s Choice for Oily/Combination Skin</p>
                                    </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col h-60 items-end justify-between right-4 top-40 w-72 md:right-6 md:top-44 md:w-[300px] md:max-w-[60%] lg:right-12 lg:top-[199px] lg:w-[321px] lg:max-w-none">
                                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#0e0e0e] text-[16px] tracking-[-0.24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[1.3]">An oil-control Face serum containing 7% Niacinamide, Zinc PCA, and Glycolic Acid to help regulate sebum, reduce breakouts, fade post-acne marks, and support a calmer, balanced skin barrier.</p>
                                    </div>
                                    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full md:flex-wrap lg:flex-nowrap">
                                        <Link href={"https://rzp.io/rzp/hellocloud-tone-01"}>
                                        <Button className="bg-[#0e0e0e] text-white h-12 px-6 py-2 rounded-[8px] text-lg hover:bg-gray-800">
                                                Buy Now
                                            <ArrowUpRight className="size-5" />
                                        </Button>
                                        </Link>
                                        <button onClick={() => setFlipMdTone01(true)} className="box-border content-stretch cursor-pointer flex gap-[5px] items-center justify-start overflow-visible p-0 relative shrink-0">
                                            <div className="overflow-clip relative shrink-0 size-3">
                                                <div className="absolute inset-[8.333%]">
                                                    <div className="absolute inset-[-5%]">
                                                        <InfoIcon className={"block max-w-none size-full"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-border content-stretch flex gap-1 h-[22px] items-center justify-center px-0 py-1 relative rounded-[8px] shrink-0">
                                                <div className="content-stretch flex flex-col h-[13px] items-start justify-start overflow-clip relative shrink-0">
                                                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                        <p className="leading-[normal] whitespace-pre">More Info</p>
                                                    </div>
                                                    <div className="flex items-center justify-center relative shrink-0">
                                                        <div className="flex-none rotate-[180deg]">
                                                            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative text-[#eeeeee] text-[12px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                                <p className="leading-[normal] whitespace-pre">More Info</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* BACK */}
                            <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-[8px] bg-[#1b1b1b] text-[#eeeeee]">
                                <button onClick={() => setFlipMdTone01(false)} className="absolute right-4 top-4 rounded-full bg-[#4c4c4c] p-3">
                                    <ChevronLeft className="size-6 text-white rotate-180" />
                                </button>
                                <div className="absolute bg-left-bottom bg-contain bg-no-repeat h-[508.25px] left-0 bottom-0 w-[406.688px]" style={{ backgroundImage: `url('${"/tone_01_with_bubbles.png"}')` }} />
                                <div className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] text-[#eeeeee] text-[32px] md:text-[44px] lg:text-[48px] text-center text-nowrap top-6 md:top-8 lg:top-10 translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14", left: "calc(50% + 0.5px)" }}>
                                    <p className="leading-[77.99%] whitespace-pre">Tone 01</p>
                                </div>
                                <div className="absolute bg-[#363636] box-border content-stretch flex gap-2.5 items-center justify-center px-6 md:px-7 lg:px-8 py-2 rounded-[4px] top-[72px] md:top-[85px] lg:top-[96px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
                                    <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#eeeeee] text-[12px] md:text-[13px] lg:text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[77.99%] whitespace-pre">People’s Choice for Oily/Combination Skin</p>
                                    </div>
                                </div>
                                <div className="absolute left-[40%] right-4 md:right-6 lg:right-12 top-40 md:top-44 lg:top-[199px] flex flex-col gap-4 max-w-[52%]">
                                    <div>
                                        <h4 className="font-semibold mb-1">How to Use</h4>
                                        <p className="text-sm leading-[1.35]">{details.tone01.how}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Ingredients</h4>
                                        <p className="text-xs leading-[1.35]">{details.tone01.ing}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:basis-0 md:col-span-2 bg-[#eeeeee] md:grow h-auto min-h-[420px] md:min-h-[487px] min-w-px overflow-visible md:overflow-hidden relative rounded-[8px] shrink-0 pb-0 md:pb-0" data-name="solution card" data-node-id="115:684">
                    {/* Mobile layout (md and below) */}
                    <MobileSerumCard
                        title="Lunar O2"
                        tag="People’s Choice for Dry/Normal Skin"
                        imgSrc="/product_bottle_complete_1.png"
                        description="A barrier-repair face serum containing Niacinamide, Lactic Acid, Allantoin, and Oat Extract to deliver deep hydration, soothe sensitivity, fade uneven spots, and strengthen dry, delicate skin"
                        howToUse="Apply 2–3 drops to clean skin, morning and night. Follow with moisturizer and sunscreen in the AM. Patch test recommended. Avoid eye contact."
                        ingredients="Aqua, D‑Panthenol, Hyaluronic Acid, Glycerin, Ethylhexylglycerin, Niacinamide, Glycyrrhiza Glabra (Licorice) Root Extract, Xanthan Gum, Camellia Sinensis Leaf Extract, Disodium EDTA, Zinc Pyrrolidone Carboxylic Acid, Sodium Benzoate, Alpha Arbutin, Lactic Acid, Allantoin, Phenoxyethanol, Sodium Hydroxide, Avena Sativa (Oat) Kernel Extract."
                        buyLink="https://rzp.io/rzp/hellocloud-lunar-02"
                    />

                    {/* Desktop (md+) flip content */}
                    <div className="hidden md:block absolute inset-0">
                        <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipMdLunar02 ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                            {/* FRONT */}
                            <div className="absolute inset-0 backface-hidden">
                                <div className="absolute bg-[49.76%_49.66%] bg-no-repeat bg-size-[181.8%_172.06%] h-[304px] left-[-192px] top-[258px] w-[511.5px]" style={{ backgroundImage: `url('${img2}')` }} />
                                <div className="absolute bg-left-bottom bg-contain bg-no-repeat h-[508.25px] left-0 bottom-0 w-[406.688px]" style={{ backgroundImage: `url('${img3}')` }} />
                                <div className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] text-[#0e0e0e] text-[32px] md:text-[44px] lg:text-[48px] text-center text-nowrap top-6 md:top-8 lg:top-10 translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14", left: "calc(50% + 0.5px)" }}>
                                    <p className="leading-[77.99%] whitespace-pre">Lunar O2</p>
                                </div>
                                <div className="absolute bg-[#0e0e0e] box-border content-stretch flex gap-2.5 items-center justify-center px-6 md:px-7 lg:px-8 py-2 rounded-[4px] top-[72px] md:top-[85px] lg:top-[96px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
                                    <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#eeeeee] text-[12px] md:text-[13px] lg:text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[77.99%] whitespace-pre">People’s Choice for Dry/Normal Skin</p>
                                    </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col h-60 items-end justify-between right-4 top-40 w-72 md:right-6 md:top-44 md:w-[300px] md:max-w-[60%] lg:right-12 lg:top-[199px] lg:w-[321px] lg:max-w-none">
                                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#0e0e0e] text-[16px] tracking-[-0.24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[1.3]">A barrier-repair face serum containing Niacinamide, Lactic Acid, Allantoin, and Oat Extract to deliver deep hydration, soothe sensitivity, fade uneven spots, and strengthen dry, delicate skin</p>
                                    </div>
                                    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full md:flex-wrap lg:flex-nowrap">
                                        <Link href={"https://rzp.io/rzp/hellocloud-lunar-02"}>
                                        <Button className="bg-[#0e0e0e] text-white h-12 px-6 py-2 rounded-[8px] text-lg hover:bg-gray-800">
                                                Buy Now
                                            <ArrowUpRight className="size-5" />
                                        </Button>
                                    </Link>
                                        <button onClick={() => setFlipMdLunar02(true)} className="box-border content-stretch cursor-pointer flex gap-[5px] items-center justify-start overflow-visible p-0 relative shrink-0">
                                            <div className="overflow-clip relative shrink-0 size-3">
                                                <div className="absolute inset-[8.333%]">
                                                    <div className="absolute inset-[-5%]">
                                                        <InfoIcon className={"block max-w-none size-full"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-border content-stretch flex gap-1 h-[22px] items-center justify-center px-0 py-1 relative rounded-[8px] shrink-0">
                                                <div className="content-stretch flex flex-col h-[13px] items-start justify-start overflow-clip relative shrink-0">
                                                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                        <p className="leading-[normal] whitespace-pre">More Info</p>
                                                    </div>
                                                    <div className="flex items-center justify-center relative shrink-0">
                                                        <div className="flex-none rotate-[180deg]">
                                                            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative text-[#eeeeee] text-[12px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                                <p className="leading-[normal] whitespace-pre">More Info</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* BACK */}
                            <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-[8px] bg-[#1b1b1b] text-[#eeeeee]">
                                <button onClick={() => setFlipMdLunar02(false)} className="absolute right-4 top-4 rounded-full bg-[#4c4c4c] p-3">
                                    <ChevronLeft className="size-6 text-white rotate-180" />
                                </button>
                                <div className="absolute bg-left-bottom bg-contain bg-no-repeat h-[508.25px] left-0 bottom-0 w-[406.688px]" style={{ backgroundImage: `url('${img3}')` }} />
                                <div className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] text-[#eeeeee] text-[32px] md:text-[44px] lg:text-[48px] text-center text-nowrap top-6 md:top-8 lg:top-10 translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14", left: "calc(50% + 0.5px)" }}>
                                    <p className="leading-[77.99%] whitespace-pre">Lunar O2</p>
                                </div>
                                <div className="absolute bg-[#363636] box-border content-stretch flex gap-2.5 items-center justify-center px-6 md:px-7 lg:px-8 py-2 rounded-[4px] top-[72px] md:top-[85px] lg:top-[96px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
                                    <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#eeeeee] text-[12px] md:text-[13px] lg:text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[77.99%] whitespace-pre">People’s Choice for Dry/Normal Skin</p>
                                    </div>
                                </div>
                                <div className="absolute left-[40%] right-4 md:right-6 lg:right-12 top-40 md:top-44 lg:top-[199px] flex flex-col gap-4 max-w-[52%]">
                                    <div>
                                        <h4 className="font-semibold mb-1">How to Use</h4>
                                        <p className="text-sm leading-[1.35]">{details.lunar02.how}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Ingredients</h4>
                                        <p className="text-xs leading-[1.35] ">{details.lunar02.ing}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
// ... existing code ...
}