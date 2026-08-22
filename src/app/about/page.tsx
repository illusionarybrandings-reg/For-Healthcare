"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ArrowUpRight,
} from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs, teamMembers } from "@/data";

export default function AboutPage() {
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
      {/* SECTION 1: HERO WE HEAL TOGETHER */}
      <section className="pt-16 pb-12 max-w-[1284px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto space-y-4 gpu-layer"
        >
          <h1 className="font-serif text-4xl sm:text-5xl text-[#292524] font-normal">
            <span className="italic text-[#004400]">We Heal</span>{" "}
            <span className="italic text-[#ff4041]">Together</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
            We believe healing is possible with the right support, care, and guidance. From nursing assistance and elderly care to rehabilitation and post-surgical recovery, our team is committed to helping patients regain confidence, independence, and well-being in the comfort of their homes.
          </p>
        </motion.div>

        {/* 3 Grid Cards below hero text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 text-left">
          {/* Left Card 1: Senior & Caregivers (4 Cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 rounded-[28px] overflow-hidden shadow-sm h-[380px] relative group border border-[#e5e0d9] gpu-layer"
          >
            <img
              src="/images/hero_nurse_senior.png"
              alt="Caregivers with Senior Patient"
              className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Logo Badge Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/60 shadow-md flex items-center gap-2">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-6 w-auto object-contain"
              />
              <div className="text-[10px] font-bold text-[#004400] leading-tight">
                Better Care.<br />Better Life.
              </div>
            </div>
          </motion.div>

          {/* Middle Card 2: Hands holding heart (4 Cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 rounded-[28px] overflow-hidden shadow-sm h-[380px] relative group border border-[#e5e0d9] gpu-layer"
          >
            <img
              src="/images/icu_doctors_team.png"
              alt="Hands holding green heart"
              className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Logo Badge Overlay */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/60 shadow-md flex items-center gap-2">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-6 w-auto object-contain"
              />
              <div className="text-[10px] font-bold text-[#004400] leading-tight">
                Better Care.<br />Better Life.
              </div>
            </div>
          </motion.div>

          {/* Right Stacked Column 3: Team photo + Rating Card (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Team Photo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="rounded-[24px] overflow-hidden shadow-sm h-[200px] border border-[#e5e0d9] gpu-layer"
            >
              <img
                src="/images/team_doctors_group.png"
                alt="Healthcare Doctors & Staff"
                className="w-full h-full object-cover rounded-[24px]"
              />
            </motion.div>

            {/* Bottom Dark Green Rating Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="bg-[#004400] text-white rounded-[24px] p-6 space-y-4 shadow-md flex-1 flex flex-col justify-between gpu-layer"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    "/images/rating_user_1.png",
                    "/images/rating_user_2.png",
                    "/images/rating_user_3.png",
                    "/images/rating_user_4.png",
                  ].map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border-2 border-[#004400] object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-[#fea500]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-serif italic text-white font-medium mt-0.5">
                    4.3/5 Star — Rating
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Trusted by hundreds of families for compassionate home healthcare and rehabilitation services across Bengaluru
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL HEALTHCARE SUPPORT & STATS BANNER */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12 gpu-layer"
        >
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal leading-tight">
              Professional healthcare support focused on comfort, recovery, dignity, and better living.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#636663] leading-relaxed">
            <p>
              FOR HEALTH CARE is committed to delivering reliable and compassionate healthcare services in the comfort of your home. Our experienced nurses, caregivers, therapists, and rehabilitation specialists provide personalized support focused on recovery, dignity, and well-being.
            </p>
            <p>
              FOR HEALTH CARE provides trusted home healthcare, nursing, rehabilitation, and recovery support focused on compassionate care and patient well-being.
            </p>
          </div>
        </motion.div>

        {/* Dark Green Stats Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#004400] text-white rounded-[28px] p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-left shadow-xl gpu-layer"
        >
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              3 <span className="italic">years +</span>
            </div>
            <p className="text-xs text-white/80 mt-2 font-light">
              Experienced Healthcare Professionals
            </p>
          </div>
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              1500 <span className="italic">+</span>
            </div>
            <p className="text-xs text-white/80 mt-2 font-light">
              Helping clients to live their best lives every day!
            </p>
          </div>
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              25 <span className="italic">+</span>
            </div>
            <p className="text-xs text-white/80 mt-2 font-light">
              Specialized Healthcare Services
            </p>
          </div>
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              95 <span className="italic">%</span>
            </div>
            <p className="text-xs text-white/80 mt-2 font-light">
              Patient Satisfaction Rate
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: OUR MISSION & PURPOSE + OUR VISION FORWARD */}
      <section className="py-16 max-w-[1284px] mx-auto px-6 space-y-16">
        {/* Row 1: Our Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center gpu-layer"
        >
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden shadow-md h-[380px] border border-[#e5e0d9]">
            <img
              src="/images/hero_nurse_senior.png"
              alt="Our Mission Illustration"
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic">
              Our Mission & Purpose
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              At FOR HEALTH CARE, our mission is to provide compassionate, reliable, and personalized healthcare services that improve comfort, recovery, and quality of life for every patient. We are committed to supporting individuals and families with professional care, dignity, and empathy at every stage of healing.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#292524]">
              <li className="flex items-center gap-2 font-medium">
                <span className="text-[#004400] font-bold">◆</span> Compassionate patient-centered care
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span className="text-[#004400] font-bold">◆</span> Trusted healthcare support at home
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span className="text-[#004400] font-bold">◆</span> Personalized recovery and rehabilitation
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span className="text-[#004400] font-bold">◆</span> Dedicated to comfort, dignity & well-being
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Row 2: Our Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center gpu-layer"
        >
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden shadow-md h-[380px] border border-[#e5e0d9]">
            <img
              src="/images/faq_consultation.png"
              alt="Our Vision Illustration"
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic">
              Our Vision Forward
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              Our vision is to make quality home healthcare accessible, supportive, and dependable for everyone. We strive to create a future where patients receive professional medical care, rehabilitation, and emotional support in the comfort of their homes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-[#ff2b2c] text-2xl font-bold mb-2">✻</div>
                <h4 className="font-serif text-lg font-normal text-[#292524] mb-1">
                  Personalized Support
                </h4>
                <p className="text-xs text-[#636663] leading-relaxed">
                  Providing healthcare solutions tailored to every patient’s unique needs and recovery goals.
                </p>
              </div>

              <div>
                <div className="text-[#ff2b2c] text-2xl font-bold mb-2">✱</div>
                <h4 className="font-serif text-lg font-normal text-[#292524] mb-1">
                  Holistic Care
                </h4>
                <p className="text-xs text-[#636663] leading-relaxed">
                  Supporting physical recovery, emotional well-being, independence, and better quality of life through compassionate healthcare services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: MEET OUR EXPERTS */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <div className="bg-[#edf7eb] rounded-[28px] p-8 sm:p-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
              <span className="italic text-[#004400]">Meet Our</span>{" "}
              <span className="italic text-[#004400]">Experts</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] mt-3 leading-relaxed">
              Our therapists have diverse specialties and share a mission — to support you with care throughout your healing journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/80 backdrop-blur-sm rounded-[24px] p-4 text-left border border-white shadow-sm gpu-layer"
              >
                <div className="h-[280px] sm:h-[320px] rounded-[20px] overflow-hidden mb-4">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#292524]">
                  {member.name}
                </h3>
                <p className="text-xs text-[#636663] mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
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

      {/* SECTION 6: CONCENTRIC CIRCLE BANNER "START YOUR HEALING" */}
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
