import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility Helper
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Types & Interfaces
export interface ServiceData {
  title: string;
  badge: string;
  description: string;
  detailedIntro: string;
  featuresTitle: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  location: string;
  serviceUsed: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  qualification: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Navigation Data
export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book Now", href: "/booking" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

// Team Data
export const teamMembers: TeamMember[] = [
  {
    id: "mousifa",
    name: "Miss. Mousifa Sultana",
    role: "Managing Director",
    imageSrc: "/images/team_mousifa.png",
    qualification: "Healthcare Management & Operations",
  },
  {
    id: "praveen",
    name: "Mr. Praveen H R",
    role: "Admin & Marketing Head",
    imageSrc: "/images/team_praveen.png",
    qualification: "Patient Services & Strategic Admin",
  },
  {
    id: "chandhrashekar",
    name: "Mr. Chandhrashekar",
    role: "Operational Manager",
    imageSrc: "/images/team_chandhrashekar.png",
    qualification: "Clinical Coordination & 24/7 Deployment",
  },
];

// FAQ Data
export const homeFaqs: FaqItem[] = [
  {
    question: "What services does FOR HEALTH CARE provide?",
    answer:
      "We provide professional home healthcare services including individual nursing care, elderly care, physiotherapy, rehabilitation services, ICU trained attendants, post-surgery recovery support, occupational therapy, and patient care assistance.",
  },
  {
    question: "How do I book a healthcare service?",
    answer:
      "You can book directly by filling out our online booking form on the Book Now page, calling us at +91 81975 26597 / +91 99640 05780, or emailing forhealthcare.forlife@gmail.com.",
  },
  {
    question: "Are your healthcare professionals qualified?",
    answer:
      "Yes! All our nurses, physiotherapists, and ICU attendants are certified medical professionals with background checks and extensive clinical training.",
  },
  {
    question: "Do you provide 24/7 services at home?",
    answer:
      "Yes, we offer both 12-hour day/night shifts and 24-hour full-time resident nursing and attendant support across Bengaluru.",
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "FOR HEALTH CARE provided exceptional nursing care for my mother after her knee replacement surgery. The nurse was polite, punctual, and highly professional.",
    authorName: "Anand R.",
    location: "Indiranagar, Bengaluru",
    serviceUsed: "Individual Nursing Care",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The home physiotherapy sessions helped my father walk independently again after his stroke. We are forever grateful to the dedicated therapy team.",
    authorName: "Sowmya N.",
    location: "Jayanagar, Bengaluru",
    serviceUsed: "Physiotherapy Support",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Very reliable 24/7 elderly care attendant service. They treated my grandmother with great patience, dignity, and personal warmth.",
    authorName: "Karthik V.",
    location: "Whitefield, Bengaluru",
    serviceUsed: "Elderly Home Care",
    rating: 5,
  },
];

// Services Map
export const serviceMap: Record<string, ServiceData> = {
  "individual-nursing-care": {
    title: "Individual Nursing Care",
    badge: "NURSING SERVICES",
    description:
      "Professional nursing care delivered at home with compassion, safety, and medical expertise. Our trained nurses provide personalized healthcare support for patients recovering from surgery, illness, or chronic conditions.",
    detailedIntro:
      "Our home nursing services are designed to reduce hospital visits and help patients recover comfortably in a familiar environment. Whether short-term recovery support or long-term nursing assistance, FOR HEALTH CARE ensures quality patient-centered care tailored to individual medical needs.",
    featuresTitle: "Services Include:",
    features: [
      "Medication Administration",
      "Injection & IV Support",
      "Wound Dressing & Care",
      "Post-Surgical Care",
      "Bedridden Patient Care",
      "Vital Signs Monitoring",
      "Catheter & Tube Care",
      "Elderly Nursing Support",
      "Palliative & Supportive Care",
    ],
  },
  "physiotherapy-support": {
    title: "Physiotherapy Support",
    badge: "PHYSIOTHERAPY & REHAB",
    description:
      "Our physiotherapy services help patients regain strength, mobility, flexibility, and independence through customized home rehabilitation programs guided by experienced therapists.",
    detailedIntro:
      "Our therapists assess every patient individually and create personalized therapy plans to improve physical function and enhance recovery outcomes. Through guided exercises, mobility training, pain relief techniques, and rehabilitation support, we help patients restore confidence and quality of life.",
    featuresTitle: "Conditions We Support:",
    features: [
      "Joint Pain & Arthritis",
      "Stroke Rehabilitation",
      "Back & Neck Pain",
      "Sports Injury Recovery",
      "Post Fracture Rehabilitation",
      "Muscle Weakness",
      "Balance & Mobility Issues",
      "Post-Surgery Recovery",
      "Neurological Rehabilitation",
    ],
  },
  "elderly-home-care": {
    title: "Elderly Home Care",
    badge: "SENIOR CITIZEN CARE",
    description:
      "Our elderly care services provide compassionate assistance and personalized support for senior citizens who require help with daily activities, mobility, companionship, hygiene, and health monitoring.",
    detailedIntro:
      "We understand the emotional and physical challenges faced by aging individuals and their families, which is why our caregivers focus on dignity, comfort, safety, and emotional well-being. Our trained caregivers assist seniors in maintaining independence while ensuring proper care in the comfort of their homes.",
    featuresTitle: "Elderly Care Services Include:",
    features: [
      "Daily Living Assistance",
      "Personal Hygiene Support",
      "Medication Reminders",
      "Mobility Assistance",
      "Meal Support",
      "Bedridden Elderly Care",
      "Emotional Companionship",
      "Dementia & Alzheimer’s Support",
      "Health Monitoring",
    ],
  },
  "icu-trained-attendants": {
    title: "ICU Trained Attendants",
    badge: "CRITICAL CARE ATTENDANTS",
    description:
      "FOR HEALTH CARE provides highly trained ICU attendants capable of managing critical patient support at home with medical rigor, professionalism, and compassion.",
    detailedIntro:
      "Our ICU-trained staff assist patients recovering from severe illnesses, surgeries, intensive care treatments, neurological conditions, and long-term hospitalization. They are experienced in patient handling, emergency response support, hygiene management, monitoring patient comfort, and assisting medical professionals.",
    featuresTitle: "Support Includes:",
    features: [
      "Critical Patient Assistance",
      "Bedridden Patient Support",
      "Hygiene & Mobility Care",
      "Oxygen Support Assistance",
      "Monitoring Patient Comfort",
      "Post-ICU Recovery Support",
      "Feeding & Tracheostomy Assistance",
      "Hospital-to-Home Transition Care",
      "24/7 Long-Term Care Support",
    ],
  },
  "post-surgery-recovery": {
    title: "Post Surgery Recovery",
    badge: "POST-OPERATIVE CARE",
    description:
      "Recovering after surgery requires professional care, proper monitoring, and rehabilitation support. Our post-surgical care services help patients heal safely and comfortably at home.",
    detailedIntro:
      "We provide personalized recovery plans focused on pain management, mobility improvement, wound care, medication support, and complication prevention to ensure faster and smoother recovery under expert guidance.",
    featuresTitle: "Post Surgery Services Include:",
    features: [
      "Surgical Wound Care",
      "Medication Support",
      "Mobility Assistance",
      "Physiotherapy Rehabilitation",
      "Vital Signs Monitoring",
      "Personal Care Assistance",
      "Nutritional Guidance",
      "Recovery Monitoring",
      "Home Nursing Support",
    ],
  },
  rehabilitation: {
    title: "Rehabilitation Service",
    badge: "REHABILITATION PROGRAMS",
    description:
      "FOR HEALTH CARE provides comprehensive rehabilitation services designed to help patients regain strength, mobility, independence, and confidence after illness, surgery, or stroke.",
    detailedIntro:
      "Our experienced rehabilitation specialists, physiotherapists, occupational therapists, and trained caregivers deliver personalized recovery programs in the comfort of your home focusing on movement, functioning, speech, and pain management.",
    featuresTitle: "Rehabilitation Services Include:",
    features: [
      "Physical Therapy (Physiotherapy)",
      "Occupational Therapy",
      "Speech & Language Therapy",
      "Neurological Rehabilitation",
      "Orthopedic Care",
      "Cardiopulmonary Rehabilitation",
      "Cognitive Rehabilitation",
      "Pain Management Services",
      "24/7 Rehabilitation Nursing",
    ],
  },
};
