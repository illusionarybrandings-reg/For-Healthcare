"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ArrowUpRight,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs, teamMembers } from "@/data";

export default function HomePage() {
  const tickerImages = [
    "/images/our_mission.avif",
    "/images/VcefQ6DePUxW9VxYxUlC2QOSnzQ.webp",
    "/images/our_vision.avif",
    "/images/THRCXqUA0WmGiQd0lUtRWaEyw.webp",
    "/images/2hcIRh2BHg8DSi7JtML7pFJY.avif",
    "/images/28V1BEXXD59m4O8r7LmcGg4rDg.webp",
    "/images/aboutt.avif",
    "/images/eOI61KYxIDdENZAG5XRr4ykhsw.jpg.jpeg",
    "/images/ndRPsskpwK0XxaYfvUfrFkBk.jpg.jpeg",
    "/images/gallery_home_visit.png",
    "/images/hero_caregiver.jpg",
    "/images/hero_nurse_senior.png",
    "/images/icu_doctors_team.png",
    "/images/team_doctors_group.png",
    "/images/testimonial_caregiver.png",
    "/images/testimonial_rehab.png",
    "/images/testimonial_elderly.png",
  ];

  const testimonialList = [
    {
      img: "/images/testimonial_caregiver.png",
      quote:
        "“The home nursing service was truly exceptional. The caregivers were compassionate, professional, and always attentive to my father’s recovery needs.”",
      category: "Post-Surgery Recovery",
    },
    {
      img: "/images/testimonial_rehab.png",
      quote:
        "“The rehabilitation sessions helped me regain confidence and mobility. The therapists were patient, encouraging, and highly experienced.”",
      category: "Rehabilitation Therapy",
    },
    {
      img: "/images/testimonial_elderly.png",
      quote:
        "“FOR HEALTH CARE treated my grandmother with kindness and dignity. Their elderly care support brought comfort to our entire family.”",
      category: "Elderly Home Care",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonialList.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonialList.length - 1 ? 0 : prev + 1
    );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Animation Variants for Hero
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pillItem = {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-[#fffefb] text-[#636663] font-sans antialiased min-h-screen">
      {/* SECTION 1: HERO CONTAINER GRID */}
      <section className="pt-8 pb-16 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Card (Left 8 Cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainer}
            className="lg:col-span-8 bg-[#f4f1ea]/70 border border-[#e5e0d9] rounded-[28px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between gpu-layer shadow-sm hover:shadow-md transition-shadow duration-500"
          >
            {/* Background Image with Gentle Smooth Zoom */}
            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 right-0 w-full sm:w-[58%] h-full pointer-events-none z-0"
            >
              <img
                src="/images/hero_nurse_senior.png"
                alt="Nurse with Senior Patient"
                className="w-full h-full object-cover rounded-r-[28px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4f1ea] via-[#f4f1ea]/80 to-transparent sm:block hidden" />
            </motion.div>

            <div className="relative z-10 max-w-md space-y-6">
              <motion.h1
                variants={heroItem}
                className="font-serif text-3xl sm:text-5xl text-[#292524] font-normal leading-[1.2]"
              >
                You’re Not Alone{" "}
                <motion.span
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="italic text-[#004400] inline-block font-medium"
                >
                  Healing
                </motion.span>{" "}
                Starts Here
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="text-xs sm:text-sm text-[#292524]/80 leading-relaxed font-normal"
              >
                FOR HEALTH CARE provides professional home healthcare, nursing assistance, rehabilitation, elderly care, and recovery support designed to improve comfort, independence, and quality of life.
              </motion.p>

              <motion.div variants={heroItem}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 bg-[#004400] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#032b03] transition-all shadow-md group relative overflow-hidden"
                  >
                    <span className="relative z-10">Book a Free Session</span>
                    <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Staggered Animated White Pills */}
              <motion.div variants={heroContainer} className="flex flex-wrap gap-2 pt-4">
                {[
                  "Personalized Care",
                  "24/7 Support",
                  "Faster Recovery",
                  "Compassionate Service",
                ].map((pill, i) => (
                  <motion.span
                    key={i}
                    variants={pillItem}
                    whileHover={{ scale: 1.06, y: -1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#292524] text-[11px] font-medium shadow-sm border border-gray-100 hover:border-[#004400]/40 transition-all cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004400] animate-pulse" />
                    {pill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Continuous Floating Badge on main image bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative z-10 self-end mt-8 sm:mt-0 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-[#004400] animate-bounce" />
              <span className="text-xs font-bold text-[#004400]">
                Trusted Care. Right at Home.
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column (4 Cols): Stacked Cards with Entrance & Hover Effects */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Rating Card (Dark Green) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#004400] text-white rounded-[24px] p-6 space-y-4 shadow-md gpu-layer transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    "/images/rating_user_1.png",
                    "/images/rating_user_2.png",
                    "/images/rating_user_3.png",
                    "/images/rating_user_4.png",
                  ].map((avatar, i) => (
                    <motion.img
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
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

            {/* Doctors Team Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[24px] overflow-hidden border border-[#e5e0d9] shadow-sm h-[190px] gpu-layer group relative"
            >
              <img
                src="/images/team_doctors_group.png"
                alt="Healthcare Professionals Team"
                className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Stats Summary Card (Dark Charcoal) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#292524] text-white rounded-[24px] p-6 grid grid-cols-2 gap-4 gpu-layer transition-shadow hover:shadow-xl"
            >
              <motion.div whileHover={{ scale: 1.04 }} className="transition-transform">
                <div className="font-serif text-2xl font-normal text-white">
                  3years <span className="text-[#004400] font-bold">+</span>
                </div>
                <p className="text-[11px] text-white/70 leading-snug mt-1">
                  Experienced Healthcare Professionals
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="transition-transform">
                <div className="font-serif text-2xl font-normal text-white">
                  1500 <span className="text-[#004400] font-bold">+</span>
                </div>
                <p className="text-[11px] text-white/70 leading-snug mt-1">
                  Patients Supported Successfully
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: YOUR HEALTH OUR PRIORITY */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
              <span className="italic text-[#004400]">Your Health,</span>{" "}
              <span className="italic text-[#ff4041]">Our Priority</span>
            </h2>
            <p className="text-sm text-[#636663] max-w-xl mt-3 leading-relaxed">
              We provide compassionate home healthcare and rehabilitation services designed to support recovery, comfort, and independent living.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-[#e5e0d9] text-[#292524] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#ecf7eb] transition-colors self-start md:self-auto group active:scale-95"
          >
            <span>Who We Are</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* SECTION 3: SMOOTH INFINITE MARQUEE TICKER */}
      <section className="py-8 overflow-hidden w-full">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-5 sm:gap-6 py-4">
            {[...tickerImages, ...tickerImages].map((img, idx) => (
              <div
                key={idx}
                className="w-[200px] sm:w-[250px] md:w-[270px] h-[280px] sm:h-[320px] md:h-[350px] shrink-0 rounded-[24px] sm:rounded-[30px] overflow-hidden border border-[#e5e0d9] shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 gpu-layer group bg-white"
              >
                <img
                  src={img}
                  alt={`Healthcare Moment ${idx + 1}`}
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-[30px] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CARE FROM ANYWHERE & 6 MINT CARDS */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
            <span className="italic text-[#004400]">Care from</span>{" "}
            <span className="italic text-[#ff4041]">Anywhere</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#636663] mt-3 leading-relaxed">
            With secure online sessions, getting help becomes easier — whether you’re at home, at work, or on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Individual Nursing Care",
              desc: "Dedicated one-on-one patient care focused on comfort, recovery, medication assistance, and health monitoring.",
              slug: "individual-nursing-care",
              shape: "❀",
            },
            {
              title: "Physiotherapy Support",
              desc: "Customized therapy sessions designed to improve movement, reduce pain, and accelerate healing.",
              slug: "physiotherapy-support",
              shape: "❦",
            },
            {
              title: "Elderly Home Care",
              desc: "Compassionate elderly support services ensuring safety, dignity, and emotional well-being.",
              slug: "elderly-home-care",
              shape: "✽",
            },
            {
              title: "ICU Trained Attendants",
              desc: "Experienced caregivers trained to manage critical patient care and medical support at home.",
              slug: "icu-trained-attendants",
              shape: "✢",
            },
            {
              title: "Post Surgery Recovery",
              desc: "Comprehensive support after surgeries with rehabilitation guidance and nursing assistance.",
              slug: "post-surgery-recovery",
              shape: "✢",
            },
            {
              title: "Rehabilitation Service",
              desc: "Specialized rehabilitation programs tailored for children with developmental or physical challenges.",
              slug: "rehabilitation",
              shape: "✸",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-[#edf7eb] rounded-[24px] p-8 flex flex-col justify-between h-[240px] transition-all group cursor-pointer border border-[#d1edd1]/40 shadow-sm hover:shadow-md gpu-layer"
            >
              <div className="text-[#ff2b2c] text-3xl font-bold">{service.shape}</div>
              <div>
                <h3 className="font-serif text-xl font-normal text-[#292524] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#636663] leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-semibold text-[#004400] opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: DARK GREEN STATS BANNER */}
      <section className="py-6 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#004400] text-white rounded-[28px] p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-left shadow-xl gpu-layer"
        >
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              3 <span className="italic">Years +</span>
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
              Satisfaction clients feel improved significantly
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#edf7eb]/60 border border-[#d1edd1] rounded-[28px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center gpu-layer"
        >
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
              <span className="italic text-[#004400]">Why Choose</span>{" "}
              <span className="italic text-[#ff4041]">For Healthcare</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              FOR HEALTH CARE is committed to delivering compassionate, reliable, and professional healthcare services tailored to every patient’s unique needs. Our experienced team focuses on improving recovery, comfort, independence, and overall well-being through personalized home healthcare and rehabilitation support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-[#ff2b2c] text-2xl font-bold mb-2">✻</div>
                <h4 className="font-serif text-lg font-normal text-[#292524] mb-1">
                  Personalized Care
                </h4>
                <p className="text-xs text-[#636663] leading-relaxed">
                  Every patient receives customized healthcare and rehabilitation plans designed according to their medical condition, recovery goals, and lifestyle needs.
                </p>
              </div>

              <div>
                <div className="text-[#ff2b2c] text-2xl font-bold mb-2">✿</div>
                <h4 className="font-serif text-lg font-normal text-[#292524] mb-1">
                  24/7 Healthcare Support
                </h4>
                <p className="text-xs text-[#636663] leading-relaxed">
                  We provide dependable round-the-clock support to ensure patients and families receive timely care whenever needed.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] overflow-hidden shadow-md h-[340px] sm:h-[400px]">
            <img
              src="/images/icu_doctors_team.png"
              alt="5 Doctors Standing Together"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 7: MEET OUR EXPERTS */}
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
              <span className="italic text-[#ff4041]">Experts</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] mt-3 leading-relaxed">
              Our experienced healthcare professionals are dedicated to providing compassionate, reliable, and personalized care to support every patient throughout their recovery and wellness journey.
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

      {/* SECTION 8: EVERY RECOVERY MATTERS TESTIMONIALS */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Navigation (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
              <span className="italic text-[#004400]">Every</span>{" "}
              <span className="italic text-[#ff4041]">Recovery</span>{" "}
              <span className="italic text-[#004400]">Matters</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              Through expert nursing assistance, rehabilitation therapy, and post-surgical care, we help patients regain confidence, comfort, mobility, and independence in the safety of their homes.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#292524] hover:bg-[#edf7eb] hover:border-[#004400] transition-colors cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#292524] hover:bg-[#edf7eb] hover:border-[#004400] transition-colors cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle Card: Testimonial Photo (4 Cols) */}
          <div className="lg:col-span-4 rounded-[24px] overflow-hidden shadow-sm h-[320px]">
            <img
              src={testimonialList[activeTestimonial].img}
              alt="Testimonial Nurse & Patient"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>

          {/* Right Card: Mint Quote Box (4 Cols) */}
          <div className="lg:col-span-4 bg-[#edf7eb] rounded-[24px] p-8 flex flex-col justify-between h-[320px]">
            <p className="font-serif text-base text-[#292524] leading-relaxed">
              {testimonialList[activeTestimonial].quote}
            </p>

            <span className="text-xs text-[#636663] font-medium">
              {testimonialList[activeTestimonial].category}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 9: GOOGLE MAPS COMPONENT */}
      <section className="py-6 max-w-[1284px] mx-auto px-6">
        <div className="rounded-[28px] overflow-hidden shadow-md h-[400px] border border-gray-200 relative group">
          <iframe
            src="https://maps.google.com/maps?q=12.8921234,77.6124934&hl=en&z=17&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Google Maps Location Card Overlay */}
          <div className="absolute top-6 left-6 z-10 bg-white p-5 rounded-2xl shadow-xl max-w-xs border border-gray-100 text-left space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#292524]">FOR HEALTHCARE</h4>
              <a
                href="https://www.google.com/maps/place/FOR+HEALTHCARE/@12.8921234,77.6124934,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15d5c5a0600f:0xf2c0b6f280b2eba7!8m2!3d12.8921234!4d77.6124934!16s%2Fg%2F11xcc_vzjt?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004400] hover:text-[#032b03] p-1"
                title="Open in Google Maps"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#636663] leading-snug">
              3rd, SUKRITHI # 1043, 2nd cross, main, BTM 4th Stage, Bilekahalli, Bengaluru, Karnataka 560076
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#292524] pt-1">
              <span className="font-semibold text-[#004400]">4.4</span>
              <div className="flex text-[#fea500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <a
                href="https://www.google.com/maps/place/FOR+HEALTHCARE/@12.8921234,77.6124934,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15d5c5a0600f:0xf2c0b6f280b2eba7!8m2!3d12.8921234!4d77.6124934!16s%2Fg%2F11xcc_vzjt?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#636663] underline ml-1 hover:text-[#004400]"
              >
                (22 reviews)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: GOOGLE RATING WIDGET */}
      <section className="py-12 max-w-[1284px] mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-3">
          <img
            src="/images/google_logo.png"
            alt="Google Logo"
            className="w-12 h-12 object-contain"
          />
          <h3 className="font-sans font-semibold text-lg text-[#292524]">
            Google Rating
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-normal text-[#fea500]">
              4.4
            </span>
            <div className="flex text-[#fea500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/FOR+HEALTHCARE/@12.8921234,77.6124934,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15d5c5a0600f:0xf2c0b6f280b2eba7!8m2!3d12.8921234!4d77.6124934!16s%2Fg%2F11xcc_vzjt?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#292524] underline hover:text-[#004400] transition-colors"
          >
            See all our reviews
          </a>
        </div>
      </section>

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
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

      {/* SECTION 12: CONCENTRIC CIRCLE BANNER "START YOUR HEALING" */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#004400] text-white rounded-[28px] p-12 sm:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden min-h-[380px] gpu-layer"
        >
          {/* Concentric Orbit Circles with Pulse Animation */}
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
