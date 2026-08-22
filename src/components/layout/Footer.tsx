import React from "react";
import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031d03] text-[#a3bfa3] pt-20 pb-8 mt-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.svg"
                alt="FOR HEALTH CARE Logo"
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#a3bfa3] max-w-sm">
              FOR HEALTH CARE provides compassionate home healthcare, rehabilitation, and professional medical support designed to improve recovery, comfort, and quality of life across Bengaluru.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-white transition-colors">Book Now</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/services/individual-nursing-care" className="hover:text-white transition-colors">Individual Nursing Care</Link></li>
              <li><Link href="/services/physiotherapy-support" className="hover:text-white transition-colors">Physiotherapy Support</Link></li>
              <li><Link href="/services/elderly-home-care" className="hover:text-white transition-colors">Elderly Home Care</Link></li>
              <li><Link href="/services/icu-trained-attendants" className="hover:text-white transition-colors">ICU Trained Attendants</Link></li>
              <li><Link href="/services/post-surgery-recovery" className="hover:text-white transition-colors">Post Surgery Recovery</Link></li>
              <li><Link href="/services/rehabilitation" className="hover:text-white transition-colors">Rehabilitation Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6ba16a] shrink-0 mt-0.5" />
                <span>3rd, SUKRITHI # 1043, 2nd cross, main, BTM 4th Stage, Bilekahalli, Bengaluru, Karnataka 560076</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#6ba16a] shrink-0 mt-0.5" />
                <span>+91 81975 26597 / +91 99640 05780</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#6ba16a] shrink-0 mt-0.5" />
                <span>forhealthcare.forlife@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#728c72] gap-4">
          <div>Copyright © 2026 FOR HEALTHCARE, Created by illusionary brandings</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
