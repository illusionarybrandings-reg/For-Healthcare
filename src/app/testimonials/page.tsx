"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/data";

export default function TestimonialsPage() {
  const reviews = [
    {
      quote:
        "“The nursing team was extremely caring and professional throughout my father’s recovery. Their home care support gave our family confidence and peace of mind.”",
      author: "Ramesh Kumar",
      category: "Post-Surgery Recovery",
    },
    {
      quote:
        "“The physiotherapy sessions helped my mother regain mobility and independence faster than we expected. The therapists were patient, skilled, and encouraging.”",
      author: "Priya Nair",
      category: "Physiotherapy Rehabilitation",
    },
    {
      quote:
        "“FOR HEALTH CARE provided excellent elderly care services with kindness and dedication. The caregivers treated my grandmother with dignity and compassion.”",
      author: "Anitha Joseph",
      category: "Elderly Home Care",
    },
    {
      quote:
        "“Their ICU trained attendants handled critical care support very professionally. We truly appreciated their commitment and round-the-clock assistance.”",
      author: "Sandeep Verma",
      category: "Critical Care Support",
    },
    {
      quote:
        "“The rehabilitation team motivated and supported me throughout my recovery journey. Their personalized therapy sessions made a huge difference.”",
      author: "Rahul Menon",
      category: "Rehabilitation Services",
    },
    {
      quote:
        "“Reliable, compassionate, and always available when needed. FOR HEALTH CARE made home healthcare comfortable and stress-free for our family.”",
      author: "Meera S",
      category: "Home Healthcare Services",
    },
  ];

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
            Stories Of <span className="italic text-[#004400]">Healing</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
            Hear from families and patients who experienced compassionate care, professional support, and meaningful recovery through FOR HEALTH CARE.
          </p>
        </motion.div>
      </section>

      {/* 6 TESTIMONIAL CARDS GRID (2 COLUMNS) */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#edf7eb] rounded-[24px] p-8 flex flex-col justify-between h-[250px] sm:h-[260px] shadow-sm border border-[#d1edd1]/40"
            >
              <p className="font-serif text-sm sm:text-base text-[#292524] leading-relaxed">
                {rev.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#004400]/5">
                <div className="w-10 h-10 rounded-full bg-[#004400] text-white flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292524]">{rev.author}</h4>
                  <span className="text-[11px] text-[#636663]">{rev.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
              src="/images/faq_consultation.png"
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
                src="/images/orbit_avatar_1.png"
                alt="Avatar Orbit 1"
                className="w-8 h-8 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 object-cover border border-white"
              />
              <img
                src="/images/orbit_avatar_2.png"
                alt="Avatar Orbit 2"
                className="w-8 h-8 rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 object-cover border border-white"
              />
            </div>
            <div className="w-[480px] h-[480px] rounded-full border border-white absolute">
              <img
                src="/images/orbit_avatar_3.png"
                alt="Avatar Orbit 3"
                className="w-8 h-8 rounded-full absolute top-1/4 left-2 object-cover border border-white"
              />
              <img
                src="/images/orbit_avatar_4.png"
                alt="Avatar Orbit 4"
                className="w-8 h-8 rounded-full absolute top-1/4 right-2 object-cover border border-white"
              />
            </div>
            <div className="w-[660px] h-[660px] rounded-full border border-white absolute">
              <img
                src="/images/orbit_avatar_5.png"
                alt="Avatar Orbit 5"
                className="w-8 h-8 rounded-full absolute bottom-1/4 left-12 object-cover border border-white"
              />
              <img
                src="/images/orbit_avatar_6.png"
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
