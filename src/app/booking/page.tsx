"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import BookingForm from "@/components/forms/BookingForm";

export default function BookingPage() {
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
      {/* HERO SECTION + BOOKING FORM */}
      <section className="pt-16 pb-12 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Text (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-[#292524] font-normal leading-tight">
              <span className="italic text-[#004400]">Book Your</span><br />
              <span className="italic text-[#ff4041]">Care Service</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              Choose the healthcare support you need and book a convenient time for personalized care at home.
            </p>
          </motion.div>

          {/* Right Form Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <BookingForm />
          </motion.div>
        </div>

        {/* Note below form */}
        <p className="text-[11px] sm:text-xs text-[#636663] text-center mt-8 font-medium">
          *Our team will contact you shortly to confirm your appointment and healthcare requirements.
        </p>
      </section>

      {/* TESTIMONIALS SECTION ("EVERY SESSION MATTERS") */}
      <section className="py-16 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Controls (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal">
              <span className="italic text-[#292524]">Every Session</span><br />
              <span className="italic text-[#004400]">Matters</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
              Therapists support clients in making small steps for improvements.
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

          {/* Middle Photo (4 Cols) */}
          <div className="lg:col-span-4 rounded-[24px] overflow-hidden shadow-sm h-[320px]">
            <img
              src={testimonialList[activeTestimonial].img}
              alt="Testimonial Nurse & Patient"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>

          {/* Right Quote Box (4 Cols) */}
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

      {/* CARE ANYTIME, ANYWHERE HEADING */}
      <section className="pt-8 pb-4 max-w-[1284px] mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic">
            Care Anytime, Anywhere
          </h2>
          <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
            Getting help is a total breeze with secure online sessions — whether you're chilling at home, working, or out and about.
          </p>
        </div>
      </section>

      {/* 3 MINT SERVICE CARDS */}
      <section className="py-8 max-w-[1284px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Elderly Home Care",
              desc: "Compassionate elderly support services ensuring safety, dignity, and emotional well-being.",
              shape: "✽",
            },
            {
              title: "ICU Trained Attendants",
              desc: "Experienced caregivers trained to manage critical patient care and medical support at home.",
              shape: "✢",
            },
            {
              title: "Post Surgery Recovery",
              desc: "Comprehensive support after surgeries with rehabilitation guidance and nursing assistance.",
              shape: "✢",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#edf7eb] rounded-[24px] p-8 flex flex-col justify-between h-[220px] shadow-sm"
            >
              <div className="text-[#ff2b2c] text-3xl font-bold">{service.shape}</div>
              <div>
                <h3 className="font-serif text-lg font-normal text-[#292524] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#636663] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
