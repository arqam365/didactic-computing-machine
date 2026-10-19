import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Figma-exported assets
const IMG_CLOUD_BG = "/figma/f86c7bf216cdc66d11952f8478c16f81634dd9cd.png"; // cloud bg on right

export default function Banner() {
  return (
    <section className="w-full  px-4 sm:px-6 lg:px-8 py-6" data-node-id="27:515">
      <div className="relative overflow-hidden rounded-[13px] bg-[#0e0e0e] px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-12 pb-20 md:pb-12 flex items-start min-h-[260px] sm:min-h-[300px] md:min-h-[340px]">
        {/* Right-side decorative cloud background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 md:inset-auto md:right-[-180px] md:top-[-340px] w-full h-full md:w-[920px] md:h-[920px] bg-no-repeat bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('${IMG_CLOUD_BG}')` }}
        />

        {/* Product bottles - left and right positioning */}
        {/* Left bottle */}
        <div
          aria-hidden
          className="pointer-events-none mt-3 absolute hidden md:block md:left-auto right-auto md:right-[140px] md:bottom-auto md:top-[-64px] md:w-[406.688px] md:h-[508.25px]"
        >
          <img 
            src="/tone 1 pic.png" 
            alt="HelloCloud serum bottle - left" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right bottle */}
        <div
          aria-hidden
          className="pointer-events-none absolute hidden md:block md:left-auto right-auto md:right-[0px] md:bottom-auto md:top-[-64px] md:w-[406.688px] md:h-[508.25px]"
        >
          <img 
            src="/product_bottle_complete_1.png" 
            alt="HelloCloud serum bottle - right" 
            className="w-full h-full object-contain"
          />
        </div>



        {/* Content */}
        <div className="relative z-10 max-w-2xl text-left text-[#eeeeee] pb-8 md:pb-0">
          <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.05] drop-shadow-md">
            Clear skin. Balanced skin.
            <br />
            HelloCloud skin.
          </h3>
          <p className="mt-3 text-[14px] md:text-[16px] leading-[1.1] text-[#eeeeee] opacity-95 drop-shadow-md">
            Two serums. One promise — effortless skincare designed for your needs, not trends.
          </p>

          <Link
            href="/#meet-the-serums"
            className="mt-6 flex w-full max-w-[280px] justify-center md:inline-flex md:w-auto md:justify-start items-center gap-2 bg-[#eeeeee] text-[#0e0e0e] px-6 md:px-8 py-3 rounded-[8px] text-base md:text-lg font-medium border border-black/30 shadow-[0px_4px_14.9px_rgba(0,0,0,0.15)] hover:bg-white"
            aria-label="Shop Now and Glow"
          >
            Shop Now & Glow
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
