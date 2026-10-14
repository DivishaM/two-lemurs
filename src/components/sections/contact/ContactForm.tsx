import React, { useState, useRef } from "react";
import { ChevronDown, ArrowUpRight, Loader2 } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
import { burstConfetti } from "../../../utils/effects";
import gsap from "gsap";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !company.trim() || !budget) {
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { x: -8 },
          {
            x: 8,
            duration: 0.08,
            repeat: 5,
            yoyo: true,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(formRef.current, { x: 0, duration: 0.1 });
            },
          }
        );
      }
      showToast("Please fill in all required fields marked with *", "er");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (buttonRef.current) {
        burstConfetti(buttonRef.current);
      }

      showToast("Thanks! Your message has been sent. We'll be in touch soon.", "ok");

      // Reset
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setService("");
      setBudget("");
      setMessage("");
    }, 900);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="border border-dark p-5 md:p-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jhon Doe"
            className="mt-3 w-full border-b border-neutral-600 bg-transparent pb-2 text-sm md:text-base text-white placeholder:text-typography-light transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jhon@gmail.com"
            className="mt-3 w-full border-b border-neutral-600 bg-transparent pb-2 text-sm md:text-base text-white placeholder:text-typography-light transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="ABC Marketing"
            className="mt-3 w-full border-b border-neutral-600 bg-transparent pb-2 text-sm md:text-base text-white placeholder:text-typography-light transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="1234567890"
            className="mt-3 w-full border-b border-neutral-600 bg-transparent pb-2 text-sm md:text-base text-white placeholder:text-typography-light transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
          />
        </div>

        {/* What You Need */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            What You Need
          </label>
          <div className="relative mt-3">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`w-full appearance-none border-b border-neutral-600 bg-transparent pb-2 pr-6 text-sm md:text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none ${
                service ? "text-white" : "text-typography-light"
              }`}
            >
              <option value="" disabled className="bg-typography-dark text-typography-light text-sm md:text-base">
                Select a service
              </option>
              <option value="Complete Brand Design" className="bg-typography-dark text-white text-sm md:text-base">
                Complete Brand Design
              </option>
              <option value="Web Design" className="bg-typography-dark text-white text-sm md:text-base">
                Web Design
              </option>
              <option value="Digital Strategy" className="bg-typography-dark text-white text-sm md:text-base">
                Digital Strategy
              </option>
              <option value="Product Design" className="bg-typography-dark text-white text-sm md:text-base">
                Product Design
              </option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1 text-typography-light"
            />
          </div>
        </div>

        {/* Estimate Budget */}
        <div>
          <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
            Estimate Budget <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-3">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`w-full appearance-none border-b border-neutral-600 bg-transparent pb-2 pr-6 text-sm md:text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none ${
                budget ? "text-white" : "text-typography-light"
              }`}
            >
              <option value="" disabled className="bg-typography-dark text-typography-light text-sm md:text-base">
                Select Budget
              </option>
              <option value="$1,000 - $5,000" className="bg-typography-dark text-white text-sm md:text-base">
                $1,000 - $5,000
              </option>
              <option value="$5,000 - $10,000" className="bg-typography-dark text-white text-sm md:text-base">
                $5,000 - $10,000
              </option>
              <option value="$10,000+" className="bg-typography-dark text-white text-sm md:text-base">
                $10,000+
              </option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1 text-typography-light"
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-6">
        <label className="text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90">
          Tell us about the project
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A little context, your ambition, and an ideal timeline..."
          className="mt-3 w-full resize-none border-b border-neutral-600 bg-transparent pb-3 text-sm md:text-base text-white placeholder:text-typography-light transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        ref={buttonRef}
        type="submit"
        disabled={isSubmitting}
        className="mt-8 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-xs md:text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-hover disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Submit</span>
            <ArrowUpRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
