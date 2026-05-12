"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

export function Header() {
  return (
    <header className="bg-background py-2 border-b-0 sticky top-8 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          {/* Book Button */}
          <Link
            href={bookingUrl}
            className="px-6 py-2 bg-[#B8922E] text-white rounded-full font-bold uppercase text-xs tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105 whitespace-nowrap"
          >
            Book My Appointment
          </Link>

          {/* Logo */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img
              src="/sun-logo.png"
              alt="Sun's Nail Studio"
              className="h-[143px] w-auto"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative flex-shrink-0">
            <ShoppingBag size={20} className="text-foreground" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
              0
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-6 text-sm font-medium text-foreground py-2">
          <a href="#" className="hover:text-accent transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
          </a>
          <a href="#services" className="hover:text-accent transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
          </a>
          <a href="#gallery" className="hover:text-accent transition-colors relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
          </a>
          <a href="#about" className="hover:text-accent transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
          </a>
          <a href="#contact" className="hover:text-accent transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
          </a>
        </nav>
      </div>
    </header>
  )
}
