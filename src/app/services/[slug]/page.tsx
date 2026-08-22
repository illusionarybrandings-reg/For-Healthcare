import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, CalendarCheck } from "lucide-react";
import { serviceMap } from "@/data";

export function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({ slug }));
}

const allServicesList = [
  {
    slug: "individual-nursing-care",
    title: serviceMap["individual-nursing-care"]?.title || "Individual Nursing Care",
    shortDesc:
      "Professional nursing care at home for post-surgical recovery, chronic conditions, and vital health monitoring.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19a1 1 0 001.41 1.41l1.39-1.39C8.69 20.26 10.3 21 12 21c4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm-1 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
  {
    slug: "physiotherapy-support",
    title: serviceMap["physiotherapy-support"]?.title || "Physiotherapy Support",
    shortDesc:
      "Customized therapy sessions designed to improve movement, reduce pain, and accelerate healing.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 2C10.5 4.5 7 6.5 7 10c0 2.8 2.2 5 5 5s5-2.2 5-5c0-3.5-3.5-5.5-5-8zM7 12c-2 0-3.5 1.5-3.5 3.5S5 19 7 19s3.5-1.5 3.5-3.5S9 12 7 12zm10 0c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5 3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5z" />
      </svg>
    ),
  },
  {
    slug: "elderly-home-care",
    title: serviceMap["elderly-home-care"]?.title || "Elderly Home Care",
    shortDesc:
      "Compassionate elderly support services ensuring safety, dignity, and emotional well-being.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 2c-1.5 2.5-4 4-7 4 0 3.5 2.5 6 5.5 6.5C7.5 15.5 5 18 5 21.5c3 0 5.5-1.5 7-4 1.5 2.5 4 4 7 4 0-3.5-2.5-6-5.5-9 3-0.5 5.5-3 5.5-6.5-3 0-5.5 1.5-7 4z" />
      </svg>
    ),
  },
  {
    slug: "icu-trained-attendants",
    title: serviceMap["icu-trained-attendants"]?.title || "ICU Trained Attendants",
    shortDesc:
      "Experienced caregivers trained to manage critical patient care and medical support at home.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
  },
  {
    slug: "post-surgery-recovery",
    title: serviceMap["post-surgery-recovery"]?.title || "Post Surgery Recovery",
    shortDesc:
      "Personalized post-operative recovery support focused on pain management, wound care, and safe healing.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6v6h-1.5V6h1.5zm0 9v1.5h-1.5V15h1.5z" />
      </svg>
    ),
  },
  {
    slug: "rehabilitation",
    title: serviceMap["rehabilitation"]?.title || "Rehabilitation Service",
    shortDesc:
      "Comprehensive rehabilitation programs helping patients regain strength, mobility, and confidence.",
    icon: (
      <svg className="w-7 h-7 text-[#ef4444] fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    notFound();
  }

  const otherServices = allServicesList.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-[#ecf7eb]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#d1edd1] text-[#004400] text-xs font-semibold uppercase tracking-wider">
              {service.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#292524] font-bold">
              {service.title}
            </h1>
            <p className="text-[#636663] text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-[#004400] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#032b03] transition-all shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book This Service</span>
              </Link>
              <a
                href="tel:+918197526597"
                className="inline-flex items-center gap-2 border border-[#004400] text-[#004400] font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Coordinator</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/hero_caregiver.jpg"
              alt={service.title}
              className="w-full h-[400px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-3xl font-bold text-[#292524]">
              Comprehensive Care at Home
            </h2>
            <p className="text-[#636663] leading-relaxed text-base">
              {service.detailedIntro}
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#292524] pt-4">
              {service.featuresTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#004400] shrink-0" />
                  <span className="font-semibold text-sm text-[#292524]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#ecf7eb] p-8 rounded-3xl border border-[#d1edd1] sticky top-28 space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#004400]">
                Book {service.title}
              </h3>
              <p className="text-sm text-[#636663]">
                Need immediate healthcare support in Bengaluru? Contact our medical team today.
              </p>
              <Link
                href="/booking"
                className="w-full inline-flex items-center justify-center bg-[#004400] text-white font-semibold py-3.5 rounded-full hover:bg-[#032b03] shadow-md"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+918197526597"
                className="w-full inline-flex items-center justify-center border border-[#004400] text-[#004400] font-semibold py-3.5 rounded-full hover:bg-white gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* READ MORE SERVICES */}
      <section className="pb-16 pt-4 max-w-[1240px] mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#292524] font-normal italic mb-8">
          Read More Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="bg-[#edf7eb] hover:bg-[#e1f3df] transition-all rounded-[24px] p-8 flex flex-col justify-between group border border-[#d8edd6] shadow-sm hover:shadow-md"
            >
              <div>
                <div className="mb-6">{other.icon}</div>
                <h3 className="font-sans font-bold text-lg text-[#292524] mb-3 group-hover:text-[#004400] transition-colors">
                  {other.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#636663] leading-relaxed">
                  {other.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-[1240px] mx-auto px-6 pb-20">
        <section className="bg-[#004400] text-white rounded-3xl p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Start Your Care Session Today</h2>
          <p className="text-[#d1edd1] max-w-xl">
            Our qualified medical staff provide personalized care designed around your recovery needs.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-white text-[#004400] font-semibold px-8 py-4 rounded-full hover:bg-[#ecf7eb] transition-all shadow-lg"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Service Now</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
