"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, CalendarCheck, ArrowRight } from "lucide-react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setToastMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      emailAddress: formData.get("emailAddress"),
      prefDate: formData.get("prefDate"),
      prefTime: formData.get("prefTime"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setToastMsg(data.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setToastMsg(data.message || "Failed to submit booking.");
      }
    } catch (err) {
      setToastMsg("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#edf7eb] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-12 border border-[#d1edd1] shadow-md">
      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#292524] font-normal mb-6 sm:mb-8">
        Your Details
      </h3>

      {toastMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-[#004400] text-white flex items-center gap-3 text-sm sm:text-base shadow-sm">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#6ba16a] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Your first name"
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Your last name"
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              required
              placeholder="Your phone number"
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              Email address
            </label>
            <input
              type="email"
              name="emailAddress"
              required
              placeholder="Your email address"
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="prefDate"
              required
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#292524] mb-1.5 sm:mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              name="prefTime"
              required
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-300 text-sm sm:text-base text-[#292524] font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#004400] hover:bg-[#032b03] text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl transition-all duration-200 shadow-[0_8px_25px_rgba(0,68,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,68,0,0.3)] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-3 mt-6 cursor-pointer group"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-white" />
          ) : (
            <CalendarCheck className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
          )}
          <span>Confirm Booking</span>
          <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </form>
    </div>
  );
}
