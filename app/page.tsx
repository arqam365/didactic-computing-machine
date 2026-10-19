"use server"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SkinConcernsSection from "@/components/skin-concerns"
import MeetTheSerums from "@/components/meet-the-serums";
import {WhatPeopleNoticed} from "@/components/what-people-noticed";
import { Testimonials } from "@/components/TestimonialGrid";
import WhyChoose from "@/components/why-choose";
import WhyWeExist from "@/components/why-we-exist";
import Banner from "@/components/banner";
import Link from "next/link";
import { Mail, MapPin, Phone,  } from "lucide-react";
import {Metadata} from "next";

import { FaReddit } from "react-icons/fa";
import {FaFacebook, FaInstagram} from "react-icons/fa6";

export async function generateMetadata(): Promise<Metadata> {

    const title = "HelloCloud - Serums built for Indian skin"
    const description = "Confidence. Bottled. Dermatologist-tested serums built for Indian skin — simple, powerful, effective."
    const imageUrls = ["/logo.svg"]
    const url = "/"

    return {
        metadataBase: new URL("https://Hellocloud.co.in"),
        title: title,
        description: description,
        applicationName: "HelloCloud",
        keywords: ["HelloCloud", "Hello Cloud", "Indian Skincare", "Minimalist", "Effective Skincare"],
        robots: {
            googleBot: {
                follow: true,
                index: true,
            }
        },
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            title: title,
            description: description,
            url: url,
            siteName: "HelloCloud",
            images: imageUrls,
        },
        twitter: {
            card: "summary_large_image",
            description: description,
            images: imageUrls,
            title: title,
            site: "@hellocloud",
        },
        pinterest: {
            richPin: true,
        },

    };
}


export default async function HomePage() {

    return (
                <div className="min-h-screen overflow-hidden">
            <Navbar />

            <main>
                <HeroSection />
                <SkinConcernsSection />
                <MeetTheSerums />
                <WhatPeopleNoticed />
                <WhyChoose />
                <WhyWeExist />
                <Testimonials />
                <Banner />
            </main>
            <footer className="bg-[#0E0E0E] text-[#EEEEEE]">
                <section className="flex flex-col items-center gap-8 p-8 md:p-12">
                    <div className="max-w-3xl text-center">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Skincare, Simplified.</h2>
                        <p className="mt-2 text-base md:text-lg text-[#EEEEEE]">Two serums. Clear results. Designed for your skin, not trends.</p>
                    </div>

                    <form className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch gap-3" action="#" method="post">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Subscribe for daily skin care tips"
                            className="flex-1 h-12 rounded-md bg-[#3B3B3B] border border-white/15 px-4 text-[#C5C5C5] placeholder:text-[#C5C5C5] outline-none focus:ring-2 focus:ring-white/20"
                        />
                        <button
                            type="submit"
                            className="h-12 px-6 rounded-md bg-[#0E0E0E] border border-white/30 backdrop-blur-[25.7px] text-white hover:bg-white/10 transition"
                            aria-label="Subscribe"
                        >
                            Subscribe
                        </button>
                    </form>
                </section>

                <section className="px-4 md:px-16 py-8 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium">Contacts</h3>
                        <h3 className="text-2xl font-semibold">Quick Links</h3>
                    </div>

                    <hr className="border-t border-[#7B7B7B]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 p-2">
                                <MapPin className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                                <span className="text-base">The Courtyard building</span>
                            </div>
                            <div className="flex items-center gap-2 p-2">
                                <Phone className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                                <span className="text-base">+91 9696566186</span>
                            </div>
                            <div className="flex items-center gap-2 p-2">
                                <Mail className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                                <span className="text-base">hellocloudskincare@gmail.com</span>
                            </div>
                        </div>

                        <nav className="flex flex-col items-start md:items-end gap-2">
                            <Link href="/" className="text-2xl font-medium hover:opacity-80">Home</Link>
                            <Link href="/#meet-the-serums" className="text-2xl font-medium hover:opacity-80">Products</Link>
                            <Link href="/#meet-the-serums" className="text-2xl font-medium hover:opacity-80">News</Link>
                        </nav>
                    </div>
                </section>

                <section className="pt-6">
                    <hr className="border-t border-white/15" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-16 py-4 text-sm text-[#6D6E70]">
                        <p>© 2025 HelloCloud. All rights reserved.</p>
                        <div className="flex items-center gap-4" aria-label="Social media links">
                            <a href="https://www.instagram.com/hellocloud.co?igsh=MnJxZDRrYmFmdWk=" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
                                <FaInstagram className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                            </a>
                            <a href="https://www.facebook.com/share/19eucdPjVZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
                                <FaFacebook className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                            </a>
                            <a href="https://www.reddit.com/r/Hellocloudskincare/s/CNwQpjJm9a" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="hover:opacity-80">
                            <FaReddit className="w-6 h-6 text-[#EEEEEE]" aria-hidden="true" />
                            </a>
                        </div>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-[#EEEEEE]">Privacy</Link>
                            <Link href="/terms" className="hover:text-[#EEEEEE]">Terms and Conditions</Link>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
