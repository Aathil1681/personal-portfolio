"use client";
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      Icon: SiGithub,
      href: "https://github.com/Aathil1681/ ",
      color: "from-indigo-400 to-pink-400",
      hover: "hover:from-indigo-300 hover:to-pink-300",
    },
    {
      Icon: SiLinkedin,
      href: "https://www.linkedin.com/in/aathil-ihlaas/",
      color: "from-blue-400 to-indigo-400",
      hover: "hover:from-blue-300 hover:to-indigo-300",
    },
    {
      Icon: SiFacebook,
      href: "https://www.facebook.com/ihlaas.aathil/",
      color: "from-blue-500 to-blue-600",
      hover: "hover:from-blue-400 hover:to-blue-500",
    },
    {
      Icon: SiInstagram,
      href: "https://www.instagram.com/aathil_ihlaas_?igsh=Yjd4bmdydmg1M3Rj",
      color: "from-pink-500 to-yellow-500",
      hover: "hover:from-pink-400 hover:to-yellow-400",
    },
    {
      Icon: SiWhatsapp,
      href: "https://w.app/m7iccp",
      color: "from-green-500 to-green-600",
      hover: "hover:from-green-400 hover:to-green-500",
    },
  ];

  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent mb-4">
          Let's Work Together
        </h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          I'm available for internships and entry-level roles. Reach out and
          let's discuss how we can create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-yellow-500/10 border border-indigo-400/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30">
              <FiMapPin className="text-indigo-300 text-xl" />
            </div>
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
          </div>

          <p className="text-slate-200 mb-8 leading-relaxed">
            I'm passionate about creating innovative solutions and always
            excited to take on new challenges. Whether you have a project in
            mind or just want to connect, I'd love to hear from you!
          </p>

          {/* Contact Methods */}
          <div className="space-y-4">
            <a
              href="mailto:aathil168@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-400/20 hover:border-pink-400/30 hover:from-indigo-500/20 hover:to-pink-500/20 transition-all group"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border border-yellow-400/30 group-hover:scale-110 transition-transform">
                <FiMail className="text-yellow-300 text-lg" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-400">Email</div>
                <div className="text-white font-medium">
                  aathil168@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-400/20">
              <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-pink-400/20 border border-pink-400/30">
                <FiPhone className="text-pink-300 text-lg" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="text-white font-medium">+971 54 528 0331</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <div className="text-sm text-slate-400 mb-4">Follow me on</div>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, color, hover }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 rounded-xl bg-gradient-to-r ${color} border border-white/10 ${hover} transition-all transform hover:scale-110 hover:shadow-lg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-pink-500/5 to-yellow-500/5 border border-indigo-400/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 flex items-center justify-center">
              <svg
                className="text-indigo-300 text-2xl"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Download CV
            </h4>
            <p className="text-slate-400 mb-6">
              Get a copy of my resume with all my skills, experience, and
              achievements in one document.
            </p>
            <a
              href="/cv/Aathil_Resume.pdf"
              download="Aathil-CV.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
