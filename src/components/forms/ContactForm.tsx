"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setToastMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setToastMsg(data.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setToastMsg(data.message || "Failed to send message.");
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
              Full Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
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
              name="email"
              required
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Reason for Contact
            </label>
            <select
              name="reason"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs text-[#292524] font-bold focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm uppercase"
            >
              <option value="INDIVIDUAL NURSING CARE">INDIVIDUAL NURSING CARE</option>
              <option value="PHYSIOTHERAPY SUPPORT">PHYSIOTHERAPY SUPPORT</option>
              <option value="ELDERLY HOME CARE">ELDERLY HOME CARE</option>
              <option value="ICU TRAINED ATTENDANTS">ICU TRAINED ATTENDANTS</option>
              <option value="POST SURGERY RECOVERY">POST SURGERY RECOVERY</option>
              <option value="REHABILITATION SERVICE">REHABILITATION SERVICE</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-[#292524] mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-[#292524] placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#004400] focus:ring-2 focus:ring-[#004400]/20 transition-all shadow-sm resize-y"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ff2b2c] hover:bg-[#e02021] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          <span>Contact Us</span>
        </button>
      </form>
    </div>
  );
}
