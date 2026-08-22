"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  Menu,
  ChevronDown,
  Activity,
  Heart,
  UserCheck,
  Stethoscope,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "@/data";

const servicesDropdownItems = [
  {
    slug: "individual-nursing-care",
    title: "Individual Nursing Care",
    desc: "Short & long term home nursing support",
    icon: Stethoscope,
  },
  {
    slug: "physiotherapy-support",
    title: "Physiotherapy Support",
    desc: "Targeted rehab & pain relief sessions",
    icon: Activity,
  },
  {
    slug: "elderly-home-care",
    title: "Elderly Home Care",
    desc: "Compassionate daily senior citizen care",
    icon: Heart,
  },
  {
    slug: "icu-trained-attendants",
    title: "ICU Trained Attendants",
    desc: "Critical care & tracheostomy support",
    icon: ShieldAlert,
  },
  {
    slug: "post-surgery-recovery",
    title: "Post Surgery Recovery",
    desc: "Post-op wound care & mobility therapy",
    icon: UserCheck,
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation Service",
    desc: "Full post-stroke & trauma recovery",
    icon: Sparkles,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Eagerly prefetch all routes on mount for instant zero-delay navigation
    navLinks.forEach((link) => {
      router.prefetch(link.href);
    });
    servicesDropdownItems.forEach((item) => {
      router.prefetch(`/services/${item.slug}`);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  const handleFastNavigate = (href: string) => {
    router.prefetch(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "py-2.5 bg-[#fffefb]/95 backdrop-blur-xl border-b border-[#004400]/10 shadow-[0_8px_25px_rgba(0,68,0,0.06)]"
            : "py-3.5 bg-[#fffefb]/90 backdrop-blur-md border-b border-[#004400]/10"
        }`}
      >
        <div className="max-w-[1284px] mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            prefetch={true}
            onMouseEnter={() => handleFastNavigate("/")}
            className="flex items-center group shrink-0"
          >
            <img
              src="/images/logo.svg"
              alt="FOR HEALTH CARE Logo"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#f4f1ea]/90 backdrop-blur-md p-2 rounded-full border border-[#e5e0d9] shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isServices = link.href === "/services";

              if (isServices) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      prefetch={true}
                      onMouseEnter={() => handleFastNavigate(link.href)}
                      className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "bg-[#004400] text-white shadow-sm"
                          : "text-[#292524] hover:bg-[#edf7eb] hover:text-[#004400]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown Menu - 100% Opaque Solid Professional Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-150 ease-out z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="w-[480px] bg-white rounded-[24px] border border-[#d1edd1] shadow-[0_20px_60px_rgba(0,68,0,0.18)] overflow-hidden">
                        <div className="px-5 py-3.5 bg-[#edf7eb] border-b border-[#d1edd1] flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#004400]">
                            Specialized Care Services
                          </span>
                          <Link
                            href="/services"
                            prefetch={true}
                            onMouseEnter={() => handleFastNavigate("/services")}
                            className="text-xs text-[#004400] font-bold flex items-center gap-1 hover:underline"
                          >
                            <span>View All</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="p-3.5 grid grid-cols-2 gap-2 bg-white">
                          {servicesDropdownItems.map((s) => {
                            const IconComponent = s.icon;
                            const href = `/services/${s.slug}`;
                            return (
                              <Link
                                key={s.slug}
                                href={href}
                                prefetch={true}
                                onMouseEnter={() => handleFastNavigate(href)}
                                className="p-3 rounded-2xl bg-[#fffefb] hover:bg-[#edf7eb] border border-gray-100 hover:border-[#d1edd1] transition-all duration-150 flex items-start gap-3 group/item shadow-2xs hover:shadow-sm"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#ecf7eb] text-[#004400] group-hover/item:bg-[#004400] group-hover/item:text-white flex items-center justify-center transition-colors duration-150 shrink-0 mt-0.5">
                                  <IconComponent className="w-4.5 h-4.5" />
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-[#292524] group-hover/item:text-[#004400] transition-colors leading-tight">
                                    {s.title}
                                  </div>
                                  <div className="text-[11px] text-[#636663] line-clamp-1 mt-0.5 font-normal">
                                    {s.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onMouseEnter={() => handleFastNavigate(link.href)}
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#004400] text-white shadow-sm"
                      : "text-[#292524] hover:bg-[#edf7eb] hover:text-[#004400]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* 24/7 Phone Helpline */}
            <a
              href="tel:+918197526597"
              className="hidden xl:flex items-center gap-2.5 text-sm font-bold text-[#004400] bg-[#edf7eb] hover:bg-[#e2f2e0] border border-[#d1edd1] px-5 py-2.5 rounded-full transition-colors duration-150 shadow-xs group"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              </div>
              <Phone className="w-4 h-4 text-[#004400] group-hover:rotate-12 transition-transform duration-200" />
              <span>+91 81975 26597</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/booking"
              prefetch={true}
              onMouseEnter={() => handleFastNavigate("/booking")}
              className="hidden sm:inline-flex items-center justify-center bg-[#004400] text-sm font-bold px-6 py-3 rounded-full text-white hover:bg-[#032b03] active:scale-95 transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
            >
              Book A Session
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-3 rounded-full bg-[#f4f1ea] border border-[#e5e0d9] text-[#292524] hover:text-[#004400] transition-colors cursor-pointer"
              aria-label="Open Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
