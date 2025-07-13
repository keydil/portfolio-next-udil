"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Pesan berhasil dikirim!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Gagal mengirim pesan.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fadhilfirdausadha493@gmail.com",
      link: "mailto:fadhilfirdausadha493@gmail.com",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+62 853-1728-3905",
    //   link: "tel:+6285317283905",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Bandung, West Java, Indonesia",
      link: "https://maps.google.com/?q=Bandung",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/",
      link: "https://github.com/",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/fadhil-firdaus-adha-13a3a5350",
      link: "https://linkedin.com/in/fadhil-firdaus-adha-13a3a5350",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@",
      link: "https://instagram.com/",
      color: "hover:text-pink-400",
    },
    // {
    //   icon: MessageCircle,
    //   label: "WhatsApp",
    //   value: "+62 812-3456-7890",
    //   link: "https://wa.me/6285317283905",
    //   color: "hover:text-green-400",
    // },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau ingin tahu lebih lanjut tentang
            project saya? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 ${social.color} transition-colors`}
                      >
                        <social.icon size={20} />
                        <div>
                          <p className="font-medium text-white text-sm">
                            {social.label}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {social.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Full-time Internship</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Part-time Projects</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Freelance Work</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      Limited
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
