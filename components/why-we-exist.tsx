import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Asset paths exported from Figma are saved under public/figma and public/
const IMG_CLOUD = "/figma/fdb93efaa9813808b0df960cce79b7d3e655d699.png"; // bubble cloud texture

export default function WhyWeExist() {
  return (
    <section
      className="relative bg-[#0e0e0e] box-border flex flex-col items-center gap-16 px-6 sm:px-10 lg:px-16 py-20 lg:py-32 overflow-hidden"
      data-node-id="27:475"
    >
      {/* Heading pill */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="bg-gradient-to-r from-[#636363] to-[#99999900] px-6 sm:px-8 py-2 rounded-tl-[4px] rounded-bl-[4px]">
          <span className="text-[#eeeeee] text-sm sm:text-base capitalize">Why HelloCloud Exists</span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
          The HelloCloud Promise
        </h2>
      </div>

      {/* Body copy */}
      <div className="relative z-10 max-w-3xl w-full text-center text-[#eeeeee] flex flex-col gap-4">
        <p className="text-xl sm:text-2xl tracking-tight">
          Most skincare feels complicated, heavy, or made for someone else’s lifestyle. HelloCloud was created for real skin in real conditions — simple, potent, and effective.
        </p>
        <p className="text-base sm:text-lg">
          No clutter. No false claims. Just clarity, balance, and calm.
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/#meet-the-serums"
        className="relative z-10 inline-flex items-center gap-3 bg-[#eeeeee] text-[#0e0e0e] px-8 py-3 rounded-lg text-lg font-medium shadow-[0px_4px_14.9px_rgba(0,0,0,0.15)] border border-black/30 hover:bg-white"
        aria-label="Get a Better Skin"
      >
        Get a Better Skin
        <ArrowUpRight className="w-5 h-5" />
      </Link>

      {/* Decorative clouds/bubbles - hidden on mobile, positioned according to Figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute hidden md:block bg-no-repeat bg-contain z-0 w-[512px] h-[304px] aspect-[106/63]
                   md:left-[-120px] md:top-[-60px]
                   lg:left-[-150px] lg:top-[-64px]
                   xl:left-[-175px] xl:top-[-67px]"
        style={{
          backgroundImage: `url('${IMG_CLOUD}')`,
          transform: 'scaleY(-1)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute hidden md:block bg-no-repeat bg-contain z-0 w-[512px] h-[304px] aspect-[106/63]
                   md:right-[-40px] md:bottom-[-20px]
                   lg:right-[-110px] lg:bottom-[-70px]
                   xl:right-[-140px] xl:bottom-[-100px]"
        style={{
          backgroundImage: `url('${IMG_CLOUD}')`,
          transform: 'scaleX(-1)',
        }}
      />
    </section>
  );
}
