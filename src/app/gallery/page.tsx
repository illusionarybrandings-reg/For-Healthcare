"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface GalleryImg {
  src: string;
  alt?: string;
}

export default function GalleryPage() {
  const col1Images: GalleryImg[] = [
    { src: "/images/THRCXqUA0WmGiQd0lUtRWaEyw.webp" },
    { src: "/images/VcefQ6DePUxW9VxYxUlC2QOSnzQ.webp" },
    { src: "/images/team_praveen.png" },
    { src: "/images/ndRPsskpwK0XxaYfvUfrFkBk.jpg.jpeg" },
    { src: "/images/eOI61KYxIDdENZAG5XRr4ykhsw.jpg.jpeg" },
    { src: "/images/team_chandhrashekar.png" },
    { src: "/images/testimonial_elderly.png" },
    { src: "/images/faq_consultation.png" },
    { src: "/images/testimonial_caregiver.png" },
    { src: "/images/testimonial_rehab.png" },
  ];

  const col2Images: GalleryImg[] = [
    { src: "/images/ndRPsskpwK0XxaYfvUfrFkBk.jpg.jpeg" },
    { src: "/images/eOI61KYxIDdENZAG5XRr4ykhsw.jpg.jpeg" },
    { src: "/images/2hcIRh2BHg8DSi7JtML7pFJY.avif" },
    { src: "/images/28V1BEXXD59m4O8r7LmcGg4rDg.webp" },
    { src: "/images/gallery_stage_honors.png" },
    { src: "/images/icu_doctors_team.png" },
    { src: "/images/gallery_home_visit.png" },
    { src: "/images/gallery_lamp_lighting.png" },
    { src: "/images/gallery_felicitation.png" },
    { src: "/images/team_doctors_group.png" },
  ];

  const col3Images: GalleryImg[] = [
    { src: "/images/eOI61KYxIDdENZAG5XRr4ykhsw.jpg.jpeg" },
    { src: "/images/team_praveen.png" },
    { src: "/images/ndRPsskpwK0XxaYfvUfrFkBk.jpg.jpeg" },
    { src: "/images/gallery_ribbon_cutting.png" },
    { src: "/images/gallery_staff_group.png" },
    { src: "/images/gallery_opening_event.png" },
    { src: "/images/hero_nurse_senior.png" },
    { src: "/images/hero_caregiver.jpg" },
  ];

  const [selectedImg, setSelectedImg] = React.useState<GalleryImg | null>(null);

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
              Explore our gallery showcasing moments of care, dedicated team members, inauguration celebrations, and home healthcare sessions.
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
      <section className="py-6 sm:py-8 max-w-[1284px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-start">
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
                onClick={() => setSelectedImg(img)}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer group cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt || "FOR HEALTH CARE Gallery Image"}
                  className="w-full h-auto object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {img.alt ? (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5 rounded-[24px]">
                    <p className="text-white text-xs font-bold">{img.alt}</p>
                  </div>
                ) : null}
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
                onClick={() => setSelectedImg(img)}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer group cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt || "FOR HEALTH CARE Gallery Image"}
                  className="w-full h-auto object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {img.alt ? (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5 rounded-[24px]">
                    <p className="text-white text-xs font-bold">{img.alt}</p>
                  </div>
                ) : null}
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
                onClick={() => setSelectedImg(img)}
                className="rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 bg-white gpu-layer group cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt || "FOR HEALTH CARE Gallery Image"}
                  className="w-full h-auto object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {img.alt ? (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5 rounded-[24px]">
                    <p className="text-white text-xs font-bold">{img.alt}</p>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden p-3 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.alt || "FOR HEALTH CARE Gallery Image"}
              className="max-h-[75vh] w-auto object-contain rounded-2xl mx-auto"
            />
            {selectedImg.alt ? (
              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-[#292524]">{selectedImg.alt}</h3>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
