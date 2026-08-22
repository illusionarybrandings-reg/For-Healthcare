"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#d1edd1] transition-all group flex flex-col justify-between relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#004400] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="w-14 h-14 bg-[#ecf7eb] text-[#004400] group-hover:bg-[#004400] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-serif font-bold text-xl text-[#292524] mb-3">{title}</h3>
        <p className="text-sm text-[#636663] leading-relaxed mb-6">{description}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 font-semibold text-sm text-[#004400] transition-transform"
      >
        <span>View Service Details</span>
        <motion.div
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
