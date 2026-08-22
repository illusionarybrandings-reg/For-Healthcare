"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/data";

export default function ContactPage() {
  return (
    <div className="bg-[#fffefb] text-[#636663] font-sans antialiased min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-16 pb-12 max-w-[1284px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl text-[#292524] font-normal">
            Contact <span className="italic text-[#004400]">Us</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
            Your questions, concerns, and feelings matter to us. Contact our support team for quick and caring responses.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO CARDS & FORM SECTION */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Call Us Now */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#edf7eb] rounded-[24px] p-6 border border-[#d1edd1]/60 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff2b2c] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292524]">
                  Call Us Now
                </h3>
              </div>
              <div className="text-xs text-[#636663] space-y-1 pl-12">
                <p>Inquiries: <strong className="text-[#292524]">+91 81975 26597</strong></p>
                <p>Support: <strong className="text-[#292524]">+91 99640 05780</strong></p>
              </div>
            </motion.div>

            {/* Card 2: Email Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#edf7eb] rounded-[24px] p-6 border border-[#d1edd1]/60 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff2b2c] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292524]">
                  Email Us
                </h3>
              </div>
              <div className="text-xs text-[#636663] space-y-1 pl-12">
                <p>Inquiries:</p>
                <p className="text-[#292524] font-medium break-all">
                  forhealthcare.forlife@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Card 3: Visit Our Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#edf7eb] rounded-[24px] p-6 border border-[#d1edd1]/60 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff2b2c] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292524]">
                  Visit Our Office
                </h3>
              </div>
              <div className="text-xs text-[#636663] space-y-1 pl-12 leading-relaxed">
                <p>
                  Address: <strong>3rd, SUKRITHI # 1043 , 2nd cross, main, BTM 4th Stage, Bilekahalli, Bengaluru, Karnataka 560076</strong>
                </p>
                <p>City: Bangalore, State: karnataka</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#636663] mt-3 leading-relaxed">
            We understand that choosing home healthcare services can raise many questions. Here are some common questions to help you better understand our services and patient care approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <FaqAccordion items={homeFaqs} />
          </div>

          <div className="lg:col-span-6 rounded-[24px] overflow-hidden shadow-md h-[380px]">
            <img
              src="/images/gmLy2vAPbZQatjWL5QRhHPwzDM.png"
              alt="Healthcare FAQ Consultation"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </section>

      {/* CONCENTRIC CIRCLE BANNER "START YOUR HEALING" */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="bg-[#004400] text-white rounded-[28px] p-12 sm:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden min-h-[380px]">
          {/* Concentric Orbit Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[300px] h-[300px] rounded-full border border-white relative">
              <img
                src="/images/vdHKJ6pMK8h4WXDLvqqhhVh8QYw.png"
                alt="Avatar Orbit 1"
                className="w-8 h-8 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 object-cover border border-white"
              />
              <img
                src="/images/UVZ3OOT3l7BgQmMQWtjbMZINI.png"
                alt="Avatar Orbit 2"
                className="w-8 h-8 rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 object-cover border border-white"
              />
            </div>
            <div className="w-[480px] h-[480px] rounded-full border border-white absolute">
              <img
                src="/images/ISiaEJFNai2zdqUUNXt9an6i2A.png"
                alt="Avatar Orbit 3"
                className="w-8 h-8 rounded-full absolute top-1/4 left-2 object-cover border border-white"
              />
              <img
                src="/images/Ep6wHZHVRvegKGJgLIjjJOxQx8.png"
                alt="Avatar Orbit 4"
                className="w-8 h-8 rounded-full absolute top-1/4 right-2 object-cover border border-white"
              />
            </div>
            <div className="w-[660px] h-[660px] rounded-full border border-white absolute">
              <img
                src="/images/8dNtN8hN1fKbrbSzztYGIC5BsVI.png"
                alt="Avatar Orbit 5"
                className="w-8 h-8 rounded-full absolute bottom-1/4 left-12 object-cover border border-white"
              />
              <img
                src="/images/Pken43RssSOGnCdE8dQjSJ0.png"
                alt="Avatar Orbit 6"
                className="w-8 h-8 rounded-full absolute bottom-1/4 right-12 object-cover border border-white"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-lg space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal italic">
              Start Your Healing
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              Book a session with a caring, Our experienced nurses, caregivers, rehabilitation specialists, and healthcare experts are here to provide personalized care designed around your comfort and recovery needs.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-white text-[#292524] text-xs sm:text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#edf7eb] transition-all shadow-md group"
            >
              <span>Book A Session</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
