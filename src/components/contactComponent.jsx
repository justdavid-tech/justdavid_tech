import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import {
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
  IconBrandWhatsapp,
  IconBrandYoutube
} from "@tabler/icons-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dummy EmailJS credentials (replace them)
  const SERVICE_ID = "service_t6316zc";
  const TEMPLATE_ID = "template_xxxxxx";
  const PUBLIC_KEY = "public_xxxxxxxxxxxxx";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      title: "Email",
      detail: "justdavidtech@gmail.com",
      link: "mailto:justdavidtech@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      title: "Phone",
      detail: "+234 903 997 7439",
      link: "tel:+2349039977439"
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      title: "Location",
      detail: "Abuja, Nigeria"
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Working Hours",
      detail: "Mon - Fri: 9AM - 6PM"
    }
  ];

  const socialLinks = [
    { icon: <IconBrandX />, url: "#", color: "hover:bg-black" },
    { icon: <IconBrandWhatsapp />, url: "#", color: "hover:bg-green-600" },
    { icon: <IconBrandYoutube />, url: "#", color: "hover:bg-red-600" },
    { icon: <IconBrandThreads />, url: "#", color: "hover:bg-black" },
    { icon: <IconBrandTiktok />, url: "#", color: "hover:bg-black" },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project? Tell me about it and let's build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* LEFT INFO SECTION */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-gray-800 bg-opacity-40 border border-gray-700 rounded-xl p-5 flex gap-4 hover:border-orange-500 transition"
              >
                <div className="w-12 h-12 bg-orange-600 bg-opacity-30 rounded-lg flex items-center justify-center">
                  {info.icon}
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-white text-lg font-semibold hover:text-orange-500">
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-white text-lg font-semibold">{info.detail}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="bg-gray-800 bg-opacity-40 border border-gray-700 rounded-xl p-5">
              <h3 className="text-white font-bold mb-3">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110 ${s.color}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT FORM SECTION */}
          <div className="lg:col-span-3 bg-gray-800 bg-opacity-40 border border-gray-700 rounded-2xl p-8">

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-white text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll reply soon.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-full"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-full"
                    placeholder="Email Address"
                  />
                </div>

                {/* Phone + Subject */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-full"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-full"
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-full resize-none"
                  placeholder="Your Message..."
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
