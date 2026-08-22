"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/data";

export default function GalleryPage() {
  const col1Images = [
    { src: "/images/gallery_ribbon_cutting.png", alt: "Grand Ribbon Cutting Ceremony" },
    { src: "/images/gallery_lamp_lighting.png", alt: "Lighting Traditional Lamp Ceremony" },
    { src: "/images/gallery_felicitation.png", alt: "Felicitating Chief Guest & Dignitaries" },
    { src: "/images/team_doctors_group.png", alt: "Medical Team Expertise & Doctors" },
  ];

  const col2Images = [
    { src: "/images/gallery_office_inauguration.png", alt: "Office Inauguration & Board Blessing" },
    { src: "/images/gallery_stage_honors.png", alt: "Stage Felicitations & Management Honor" },
    { src: "/images/icu_doctors_team.png", alt: "ICU Trained Critical Care Support" },
    { src: "/images/gallery_home_visit.png", alt: "Home Visit & Patient Care Nurse" },
  ];

  const col3Images = [
    { src: "/images/gallery_staff_group.png", alt: "Staff & Management Group Photo" },
    { src: "/images/gallery_opening_event.png", alt: "Grand Opening Celebration Event" },
    { src: "/images/hero_nurse_senior.png", alt: "Elderly Care & Compassionate Support" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-[#fffefb] text-[#636663] font-sans antialiased min-h-screen">
      {/* HEADER SECTION */}
      <section className="pt-16 pb-12 max-w-[1284px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl space-y-3 gpu-layer"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-[#292524] font-normal">
              <span className="italic text-[#004400]">Your Health,</span>{" "}
              <span className="italic text-[#ff4041]">Our Priority</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              We provide compassionate home healthcare and rehabilitation services designed to support recovery, comfort, and independent living.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-[#292524] text-xs font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-[#edf7eb] hover:border-[#004400] transition-all shadow-sm group active:scale-95"
            >
              <span>Who We Are</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3-COLUMN MASONRY PHOTO GRID */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="space-y-6">
            {col1Images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-[24px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {col2Images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-[24px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {col3Images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-[24px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#636663] mt-3 leading-relaxed">
            We understand that choosing home healthcare services can raise many questions. Here are some common questions to help you better understand our services and patient care approach.
          </p>
        </motion.div>

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#004400] text-white rounded-[28px] p-12 sm:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden min-h-[380px] gpu-layer"
        >
          {/* Concentric Orbit Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[300px] h-[300px] rounded-full border border-white relative">
              <img
                src="/images/orbit_avatar_1.png"
                alt="Avatar Orbit 1"
                className="w-8 h-8 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 object-cover border border-white animate-float-pulse"
              />
              <img
                src="/images/orbit_avatar_2.png"
                alt="Avatar Orbit 2"
                className="w-8 h-8 rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 object-cover border border-white animate-float-pulse"
              />
            </div>
            <div className="w-[480px] h-[480px] rounded-full border border-white absolute">
              <img
                src="/images/orbit_avatar_3.png"
                alt="Avatar Orbit 3"
                className="w-8 h-8 rounded-full absolute top-1/4 left-2 object-cover border border-white animate-float-pulse"
              />
              <img
                src="/images/orbit_avatar_4.png"
                alt="Avatar Orbit 4"
                className="w-8 h-8 rounded-full absolute top-1/4 right-2 object-cover border border-white animate-float-pulse"
              />
            </div>
            <div className="w-[660px] h-[660px] rounded-full border border-white absolute">
              <img
                src="/images/orbit_avatar_5.png"
                alt="Avatar Orbit 5"
                className="w-8 h-8 rounded-full absolute bottom-1/4 left-12 object-cover border border-white animate-float-pulse"
              />
              <img
                src="/images/orbit_avatar_6.png"
                alt="Avatar Orbit 6"
                className="w-8 h-8 rounded-full absolute bottom-1/4 right-12 object-cover border border-white animate-float-pulse"
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
              className="inline-flex items-center gap-2 bg-white text-[#292524] text-xs sm:text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#edf7eb] transition-all shadow-md group active:scale-95"
            >
              <span>Book A Session</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
