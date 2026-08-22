"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesPage() {
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
            <span className="italic text-[#004400]">Care from</span>{" "}
            <span className="italic text-[#ff4041]">Anywhere</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
            With secure online sessions, getting help becomes easier — whether you’re at home, at work, or on the go.
          </p>
        </motion.div>
      </section>

      {/* 6 MINT SERVICE CARDS GRID */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#edf7eb] rounded-[24px] p-8 flex flex-col justify-between h-[240px] transition-all group cursor-pointer"
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

      {/* TESTIMONIALS CAROUSEL ("EVERY RECOVERY MATTERS") */}
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
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#292524] hover:bg-[#edf7eb] hover:border-[#004400] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#292524] hover:bg-[#edf7eb] hover:border-[#004400] transition-colors cursor-pointer"
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

      {/* CONCENTRIC CIRCLE BANNER "START YOUR HEALING" */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="bg-[#004400] text-white rounded-[28px] p-12 sm:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden min-h-[380px]">
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
