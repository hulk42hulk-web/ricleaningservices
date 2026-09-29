"use client";

import React, { useState } from "react";
import { Mail, MapPin, CheckCircle, Send, Sparkles, Building, Phone } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";
import { companyInfo } from "@/lib/siteData";

export default function ContactSection() {
  const { t } = useLanguage();
  const formText = t.contact.form;
  const directText = t.contact.directInfo;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Kantoor schoonmaak",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(formText.requiredError);
      return;
    }

    setIsSubmitting(true);
    // Simulate swift form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {t.contact.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1F33] tracking-tight leading-tight mb-3">
            {t.contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.contact.description}
          </p>
        </div>

        {/* Responsive Grid: Form on Left, Contact Details & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Glass Contact Form (First on Mobile) */}
          <div className="lg:col-span-7 w-full">
            <GlassCard variant="feature" hover={false} className="p-6 sm:p-10 border-white/90">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#0B1F33] mb-2">
                    {formText.successTitle}
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base">
                    {formText.successMsg}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        serviceType: "Kantoor schoonmaak",
                        location: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-all"
                  >
                    Nieuwe aanvraag versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.nameLabel} <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={formText.namePlaceholder}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.companyLabel}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={formText.companyPlaceholder}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.emailLabel} <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={formText.emailPlaceholder}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={formText.phonePlaceholder}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.serviceLabel}
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43] bg-white cursor-pointer"
                      >
                        {formText.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                        {formText.locationLabel}
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder={formText.locationPlaceholder}
                        className="glass-input w-full min-h-[52px] px-4 rounded-xl text-sm text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                      {formText.messageLabel} <span className="text-brand-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formText.messagePlaceholder}
                      className="glass-input w-full p-4 rounded-xl text-sm text-[#102A43] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[54px] rounded-xl bg-gradient-to-r from-[#1677FF] to-[#38BDF8] text-white font-semibold text-base shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/35 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>{formText.submitting}</span>
                    ) : (
                      <>
                        <span>{formText.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 pt-2">
                    Uw aanvraag is 100% vrijblijvend. We delen uw gegevens nooit met derden.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Right Column: Direct Contact Info & Map (Second & Third on Mobile) */}
          <div className="lg:col-span-5 w-full flex flex-col space-y-6">
            
            {/* Direct Contact Cards */}
            <GlassCard hover={false} className="p-6 sm:p-8 space-y-6 border-white/90">
              <h3 className="font-display font-bold text-lg text-[#0B1F33] pb-3 border-b border-slate-200/60">
                {directText.title}
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    {directText.emailTitle}
                  </span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-[#102A43] hover:text-brand-blue transition-colors break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    {directText.addressTitle}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#102A43]">
                    {companyInfo.address.street}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {companyInfo.address.postalCode} {companyInfo.address.city}, {companyInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    {directText.coverageTitle}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {directText.coverageValue}
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Amsterdam Location Map Embed */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/90 shadow-md aspect-[16/10] sm:aspect-[16/9] w-full relative">
              <iframe
                title="Locatie Ri Cleaning Services Amsterdam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.3845012586737!2d4.951594976722885!3d52.31340005118742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60bddfb6fffff%3A0x6b4ef84a169116e9!2sElizabeth%20Cady%20Stantonplein%20413%2C%201102%20BL%20Amsterdam!5e0!3m2!1snl!2snl!4v1710000000000!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[105%]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
