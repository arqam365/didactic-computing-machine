"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";

interface NavbarProps {
    className?: string
}

export default function Navbar({ className }: NavbarProps) {

    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        console.log("[v0] Toggling mobile menu, current state:", isMobileMenuOpen)
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        console.log("[v0] Closing mobile menu")
        setIsMobileMenuOpen(false)
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#meet-the-serums", label: "Products" },
        { href: "/#what-people-noticed", label: "Case Study" },
    ]


    return (
        <nav
            className={`bg-black text-white relative z-50 ${className || ""}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center" aria-label="HelloCloud - Go to homepage">
                            <Image
                                src="/logo.svg"
                                alt="HelloCloud Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto lg:h-10"
                                priority
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white hover:text-gray-300 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                                    onClick={() => console.log(`[v0] Navigating to ${link.label}`)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Book Now Button */}
                    <div className="hidden md:block">
                        <button
                            className="glassmorphism-button group"
                            onClick={() => router.push("/#meet-the-serums")}
                            aria-label="Book now"
                        >
                            <span className="text-white font-medium">Book Now</span>
                            <ArrowRight
                                className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-300 hover:bg-white/10 p-2"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
                id="mobile-menu"
                role="menu"
                aria-orientation="vertical"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white hover:text-gray-300 hover:bg-white/10 block px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                            role="menuitem"
                            onClick={() => {
                                console.log(`[v0] Mobile navigation to ${link.label}`)
                                closeMobileMenu()
                            }}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Mobile Book Now Button */}
                    <div className="px-3 py-2">
                        <button
                            className="glassmorphism-button group w-full"
                            onClick={() => {
                                router.push("/#meet-the-serums")
                                console.log("[v0] Mobile Book Now button clicked")
                                closeMobileMenu()
                            }}
                            aria-label="Book now - Schedule your appointment"
                        >
                            <span className="text-white font-medium">Book Now</span>
                            <ArrowRight
                                className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .glassmorphism-button {
          display: flex;
          padding: 16px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(12.85px);
          -webkit-backdrop-filter: blur(12.85px);
          transition: transform 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
          cursor: pointer;
        }

        .glassmorphism-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-1px);
        }

        .glassmorphism-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5), 0 0 0 4px rgba(0, 0, 0, 1);
        }
        
        .glassmorphism-button:active {
          transform: translateY(0);
        }
      `}</style>
        </nav>
    )
}
