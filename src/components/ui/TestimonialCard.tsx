"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  category: string;
  index?: number;
}

export default function TestimonialCard({ quote, author, category, index = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl p-8 border border-[#d1edd1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full relative"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#fea500]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#004400]/10" />
        </div>
        <p className="text-sm italic text-[#292524] leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-base text-[#292524]">{author}</h4>
          <span className="text-xs font-semibold text-[#004400] uppercase tracking-wider">{category}</span>
        </div>
      </div>
    </motion.div>
  );
}
