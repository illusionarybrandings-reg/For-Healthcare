import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-[#fffefb]">
      <span className="text-6xl font-serif font-bold text-[#004400] mb-4">404</span>
      <h1 className="font-serif text-3xl sm:text-4xl text-[#292524] mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-[#636663] max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#004400] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#003300] transition-all shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
