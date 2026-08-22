"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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
    <div className="bg-[#edf7eb] rounded-[28px] p-6 sm:p-8 border border-[#d1edd1] shadow-sm">
      <h3 className="font-serif text-2xl text-[#292524] font-normal mb-6">
        Your Details
      </h3>

      {toastMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-[#004400] text-white flex items-center gap-3 text-sm shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-[#6ba16a] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Your last name"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              required
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Email address
            </label>
            <input
              type="email"
              name="emailAddress"
              required
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Preferred Date
            </label>
            <input
              type="date"
              name="prefDate"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Preferred Time
            </label>
            <input
              type="time"
              name="prefTime"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ff2b2c] hover:bg-[#e02021] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          <span>Confirm Booking</span>
        </button>
      </form>
    </div>
  );
}
