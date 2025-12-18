import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "This platform has transformed how we manage our business. The analytics features alone have saved us countless hours and improved our decision-making process significantly.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager at Scale Co",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "The integration capabilities are outstanding. We were able to connect all our existing tools seamlessly. The customer support team is also incredibly responsive and helpful.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "CTO at DataFlow",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "Security was our main concern when choosing a platform, and this solution exceeded our expectations. The encryption and compliance features give us complete peace of mind.",
    rating: 5,
  },
];

export const products = [
  {
    name: "ekiliSense",
    desc: "AI-powered school management system",
    features: [
      "Real-time data collection",
      "Intelligent analytics engine",
      "Actionable insights dashboard",
      "Enterprise integration",
    ],
    link: "https://sense.ekilie.com",
    isFeatured: false,
  },
  {
    name: "ekiliRelay",
    desc: "Open-source email & SMS API",
    features: [
      "High-performance relay system",
      "RESTful API architecture",
      "Scalable infrastructure",
      "99.9% uptime guarantee",
    ],
    link: "https://relay.ekilie.com",
    isFeatured: false,
  },
  {
    name: "ekiliConvo",
    desc: "Intelligent conversation platform",
    features: [
      "AI-powered interactions",
      "Multi-channel support",
      "Custom workflow engine",
      "Advanced NLP capabilities",
    ],
    link: "https://convo.ekilie.com",
    isFeatured: false,
  },
  {
    name: "Insights",
    desc: "Enterprise analytics platform",
    features: [
      "Real-time data processing",
      "Advanced visualizations",
      "Custom reporting engine",
      "Predictive analytics AI",
    ],
    link: "https://insights.ekilie.com",
    isFeatured: false,
  },
];

export const philosophy = [
  {
    name: "Innovation First",
    desc: "We embrace bold ideas and pioneering technologies to create meaningful change.",
  },
  {
    name: "Human-Centered Design",
    desc: "Technology should serve people. Our solutions are built with empathy and usability in mind.",
  },
  {
    name: "Integrity & Trust",
    desc: "We believe in transparency, accountability, and building systems people can rely on.",
  },
  {
    name: "Sustainable Impact",
    desc: "Every solution we craft considers its long-term effect on communities and the environment.",
  },
];
