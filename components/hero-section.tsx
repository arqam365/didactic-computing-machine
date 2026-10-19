"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    console.log("[v0] HeroSection component rendering")

    return (
        <section className="relative bg-black overflow-visible">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

            <div
                className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover opacity-30 pointer-events-none"
                style={{
                    backgroundImage: "url('/cloud-background.png')",
                    transform: "scale(1.2)",
                    zIndex: 1,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Main headline with stagger animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                            <span className="block">Confidence. Bottled.</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Dermatologist-tested serums built for Indian skin — simple, powerful, effective.
                        <span className={"font-medium pl-1"}>Just at 799₹</span>
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <Link
                            href="/#meet-the-serums"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg min-w-[160px]"
                        >
                            Book Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/#meet-the-serums"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg min-w-[160px]"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative w-full flex justify-center py-8"
            >
                <div className="relative z-10">
                    <Image
                        src="/product-bottle-clean.png"
                        alt="HelloCloud serum bottle - clean white bottle with dropper"
                        width={300}
                        height={500}
                        className="w-48 sm:w-56 lg:w-64 h-auto object-contain my-[46px]"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    )
}
