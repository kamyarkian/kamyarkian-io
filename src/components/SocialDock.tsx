import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function SocialDock() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kamyarkian/", // لینک خودت را جایگزین کن
      icon: <Linkedin size={20} />,
      color: "hover:text-blue-400 hover:bg-blue-400/10",
    },
    {
      name: "GitHub",
      href: "https://github.com/kamyarkian", // لینک خودت را جایگزین کن
      icon: <Github size={20} />,
      color: "hover:text-purple-400 hover:bg-purple-400/10",
    },
    {
      name: "Email",
      href: "mailto:contact@kamyarkian.com",
      icon: <Mail size={20} />,
      color: "hover:text-emerald-400 hover:bg-emerald-400/10",
    },
    {
      name: "Resume",
      href: "/resume.pdf", // بعداً فایل رزومه را اضافه می‌کنیم
      icon: <FileText size={20} />,
      color: "hover:text-amber-400 hover:bg-amber-400/10",
    },
  ];

  return (
    <div className="flex items-center gap-4 p-2 bg-neutral-900/80 border border-neutral-800 rounded-full backdrop-blur-sm w-fit mx-auto md:mx-0">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          className={`p-3 text-neutral-400 transition-all duration-300 rounded-full ${link.color}`}
          aria-label={link.name}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
