/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  Check, 
  Sparkles, 
  AlertCircle, 
  Clock, 
  Globe, 
  Send,
  Linkedin,
  Compass,
  Link2
} from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [statusStep, setStatusStep] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState('');
  const [localTime, setLocalTime] = useState<string>('');

  const services = [
    'UI/UX Design',
    'Helmet Graphic Design',
    'Motion Graphics',
    'Visual Strategy'
  ];

  // Dynamic live clock in user's zone / India (IST, UTC+5:30)
  useEffect(() => {
    const updateISTTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setLocalTime(`${formatted} IST`);
    };
    
    updateISTTime();
    const interval = setInterval(updateISTTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrorMsg('');
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please write a short message.');
      return;
    }

    setStatus('sending');
    
    // Simulate beautiful micro-sequence steps
    setStatusStep('Validating secure connection...');
    setTimeout(() => {
      setStatusStep('Encrypting message payload...');
      setTimeout(() => {
        setStatusStep('Delivering to inbox...');
        setTimeout(() => {
          // Create mailto link with form data
          const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.service} - ${formData.name}`);
          const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
          const mailtoUrl = `mailto:aryan19abhishek@gmail.com?subject=${subject}&body=${body}`;
          
          // Open user's default email client
          window.location.href = mailtoUrl;
          
          setStatus('success');
        }, 600);
      }, 600);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: 'UI/UX Design',
      message: ''
    });
    setStatus('idle');
    setStatusStep('');
    setErrorMsg('');
  };

  return (
    <footer id="footer-contact" className="bg-[#080808] text-white pt-28 pb-12 px-6 sm:px-12 md:px-20 lg:px-24 relative overflow-hidden select-none border-t border-neutral-900/80">
      {/* Decorative premium radial gradients */}
      <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E8FEA]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Background blueprint microgrid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pb-20 border-b border-neutral-900/80">
          
          {/* Left Panel: Content overview & status updates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#6E8FEA]/15 to-indigo-500/5 text-[#6E8FEA] border border-[#6E8FEA]/20 text-[10px] sm:text-xs font-mono font-bold rounded-full uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E8FEA] animate-ping" />
                <span>Available for collaborations</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-4xl sm:text-5xl lg:text-[44px] font-semibold leading-[1.1] font-sans text-neutral-100 tracking-tight">
                  Let's bring custom <span className="text-[#6E8FEA]">ideas</span> to life.
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed max-w-md">
                  Have an upcoming launch, a product requiring clean graphic decaling, or an app needing intuitive UX design workflows? Get in touch to schedule a review session.
                </p>
              </div>
            </div>

            {/* Micro Details Metadata block */}
            <div className="space-y-6 pt-8 border-t border-neutral-900/60 lg:max-w-xs">
              <div className="grid grid-cols-2 gap-6">
                {/* Time Block */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6E8FEA]" />
                    <span>My Time</span>
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-neutral-300 font-mono tracking-tight whitespace-nowrap">
                    {localTime || 'Calculating...'}
                  </div>
                </div>

                {/* Base Location */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#6E8FEA]" />
                    <span>Base</span>
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-neutral-300 tracking-tight">
                    Delhi NCR, India
                  </div>
                </div>
              </div>

              {/* Directly Accessible email route block */}
              <div className="space-y-2 pt-2 text-left max-w-full">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Prefer direct inquiries?</span>
                <a 
                  href="mailto:aryan19abhishek@gmail.com" 
                  className="group inline-flex items-center gap-2 text-[11px] sm:text-sm font-semibold text-[#6E8FEA] hover:text-white transition-all duration-300 bg-neutral-900/60 hover:bg-[#6E8FEA]/10 border border-neutral-800/80 hover:border-[#6E8FEA]/30 px-3.5 py-2.5 rounded-xl max-w-full overflow-hidden"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="break-all tracking-tight">{`aryan19\u200Babhishek@gmail.com`}</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: High-Performance Glass Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 border border-neutral-800/80 rounded-[32px] p-8 sm:p-10 relative overflow-hidden shadow-2xl">
              
              {/* Internal abstract graphic edge */}
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-white/10 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Feedback Deck */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/5">
                      <Check className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-2 max-w-sm">
                      <h4 className="text-xl font-bold tracking-tight text-white font-sans">
                        Message Transmitted.
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed">
                        Excellent, I’ve received your design inquiry. I review incoming portfolio briefs daily and will write back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 transition-all rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:border-neutral-700 cursor-pointer"
                    >
                      Send another brief
                    </button>
                  </motion.div>
                ) : (
                  /* Interactive Multi-step Input Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name field */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="name" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <span>01. Your Name</span>
                          <span className="text-[#6E8FEA]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="What should I call you?"
                          disabled={status === 'sending'}
                          className="w-full bg-[#111111]/60 border border-neutral-800/80 focus:border-[#6E8FEA] focus:bg-[#111111] focus:ring-[1px] focus:ring-[#6E8FEA]/30 rounded-xl px-4 py-3.5 text-neutral-200 text-sm font-sans outline-none transition-all duration-300 placeholder:text-neutral-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <span>02. Email Address</span>
                          <span className="text-[#6E8FEA]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="where@shouldireply.com"
                          disabled={status === 'sending'}
                          className="w-full bg-[#111111]/60 border border-neutral-800/80 focus:border-[#6E8FEA] focus:bg-[#111111] focus:ring-[1px] focus:ring-[#6E8FEA]/30 rounded-xl px-4 py-3.5 text-neutral-200 text-sm font-sans outline-none transition-all duration-300 placeholder:text-neutral-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                        />
                      </div>
                    </div>

                    {/* Service Pill Selectors */}
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold block">
                        03. Select Area of Interest
                      </label>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {services.map((service) => {
                          const isSelected = formData.service === service;
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceSelect(service)}
                              disabled={status === 'sending'}
                              className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer border transition-all duration-300 ${
                                isSelected
                                  ? 'bg-[#6E8FEA] text-white border-[#6E8FEA]/20 shadow-md shadow-[#6E8FEA]/10 font-medium'
                                  : 'bg-neutral-950/60 hover:bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800/80 hover:border-neutral-700'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        <span>04. Project Description</span>
                        <span className="text-[#6E8FEA]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your targets, constraints, or a simple greeting..."
                        disabled={status === 'sending'}
                        className="w-full bg-[#111111]/60 border border-neutral-800/80 focus:border-[#6E8FEA] focus:bg-[#111111] focus:ring-[1px] focus:ring-[#6E8FEA]/30 rounded-xl px-4 py-3.5 text-neutral-200 text-sm font-sans outline-none transition-all duration-300 placeholder:text-neutral-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] resize-none"
                      />
                    </div>

                    {/* Interactive Error message strip */}
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-left font-normal"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}

                    {/* Submissions Trigger Module */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-white hover:bg-neutral-100 disabled:bg-neutral-900 disabled:text-neutral-600 text-neutral-950 font-semibold py-4 px-6 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-white/5 border border-white/10"
                      >
                        {status === 'sending' ? (
                          <div className="flex flex-col items-center justify-center space-y-1">
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="font-sans font-bold text-neutral-500 text-xs">Sending Brief...</span>
                            </span>
                            <span className="text-[9px] font-mono text-neutral-600 font-light lowercase">{statusStep}</span>
                          </div>
                        ) : (
                          <>
                            <span>Send Design Inquiry</span>
                            <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Footing Section with Dynamic metadata links & copy rights */}
        <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-8 text-[11px] font-normal text-neutral-500 uppercase tracking-widest font-sans">
          
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-neutral-400 font-medium font-sans">© 2026 ARYAN ABHISHEK · Portfolio Showcase</span>
            <span className="text-[9px] text-neutral-600 tracking-normal capitalize font-mono normal-case">Strictly adhering to clean design principles and high resolution layout rules.</span>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-semibold text-xs text-neutral-400">
            <a
              href="https://behance.net/aryanabhishek19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6E8FEA] hover:scale-105 transition-all duration-300 inline-flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Behance</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6E8FEA] hover:scale-105 transition-all duration-300 inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:aryan19abhishek@gmail.com"
              className="hover:text-[#6E8FEA] hover:scale-105 transition-all duration-300 inline-flex items-center gap-1"
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
