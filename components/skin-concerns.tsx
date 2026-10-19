"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SkinConcernsSection() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section
            className="relative z-10 bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 -mt-24"
            style={{
                backgroundImage: "url(/cloud-background.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    {/* Section badge */}
                    <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center text-[#0E0E0E] px-8 py-2 rounded-l-[4px] rounded-r-none text-base font-normal [background-image:linear-gradient(90deg,rgba(99,99,99,1)_0%,rgba(153,153,153,0)_96%)]">
              The Problem We Solve
            </span>
                    </motion.div>

                    {/* Section heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-16 leading-tight max-w-4xl mx-auto"
                    >
                        Struggling with stubborn skin concerns?
                    </motion.h2>

                    {/* Comparison images */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12  mx-auto"
                    >
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <Image
                                src="/extra/oily.png"
                                alt="Woman with oily skin showing various skin concerns"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <Image
                                src="/extra/dry.png"
                                alt="Woman with dry skin showing various skin concerns"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
