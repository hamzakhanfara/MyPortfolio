"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, Linkedin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "khanfarahamza@gmail.com",
    href: "mailto:khanfarahamza@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 768500195",
    href: "tel:+15551234567"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@hamzakhanfara",
    href: "https://github.com/hamzakhanfara"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Hamza Khanfara",
    href: "https://www.linkedin.com/in/hamza-khanfara-689b241b3/"
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 md:grid-cols-2 z-100 gap-6 mt-4"
    >
      {contactItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 }
          }}
        >
          <div className="p-3 rounded-lg bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors duration-300">
            <item.icon className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-medium">{item.label}</h3>
            <p className="text-sm text-gray-700">{item.value}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
