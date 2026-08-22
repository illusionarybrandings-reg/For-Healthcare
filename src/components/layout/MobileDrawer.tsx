"use client";

import React from "react";
import Link from "next/link";
import { X, Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  currentPath: string;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[1040] bg-black/50 backdrop-blur-md"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 z-[1050] w-[320px] h-full bg-[#fffefb] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e5e0d9]">
                <Link href="/" onClick={onClose} className="flex items-center">
                  <img
                    src="/images/logo.svg"
                    alt="FOR HEALTH CARE Logo"
                    className="h-11 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = currentPath === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <Link
                        href={link.href}
                        prefetch={true}
                        onClick={onClose}
                        className={`text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-[#004400] text-white shadow-sm"
                            : "text-[#292524] hover:bg-[#edf7eb] hover:text-[#004400]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 opacity-60 ${isActive ? "text-white" : ""}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#e5e0d9] space-y-3">
              <a
                href="tel:+918197526597"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#edf7eb] border border-[#d1edd1] text-[#004400] text-xs font-bold py-3 rounded-full hover:bg-[#e2f2e0]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 81975 26597</span>
              </a>

              <Link
                href="/booking"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#004400] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#032b03] shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book A Session</span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
