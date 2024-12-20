import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Mail',
    href: "mailto:khanfarahamza@gmail.com",
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    href: "https://www.linkedin.com/in/hamza-khanfara-689b241b3/",
    icon: Linkedin,
  },
  {
    title: 'Github',
    href: "https://github.com/hamzakhanfara",
    icon: Github,
  },
  {
    title: 'Instagram',
    href: "https://www.instagram.com/hamzakh_99/?igsh=MnRrbmwxMTFlbmky",
    icon: Instagram,
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] left-1/2 bottom-0 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            Made from scratch | &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 -z-9">
            {footerLinks.map((link) => (
              <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition"
            >
              <link.icon className="w-5 h-5" />
              <span className="font-semibold">{link.title}</span>
            </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
