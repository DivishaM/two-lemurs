import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight, Loader2, Check, X } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
import { burstConfetti } from "../../../utils/effects";
import gsap from "gsap";

export interface EnquiryDetails {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
  submittedAt: string;
}

export const SERVICE_OPTIONS = [
  "Logo Design",
  "Brand Identity & Branding",
  "Website & UI/UX Design",
  "Graphic & Marketing Design",
  "Packaging & Print Design",
  "Other",
] as const;

interface ContactFormProps {
  onSubmitEnquiry?: (details: EnquiryDetails) => void;
}

export default function ContactForm({ onSubmitEnquiry }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceOpen(false);
      }
    };

    if (isServiceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServiceOpen]);

  const toggleService = (option: string) => {
    setSelectedServices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !company.trim() || selectedServices.length === 0) {
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

    const enquiryDetails: EnquiryDetails = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      phone: phone.trim(),
      services: selectedServices,
      budget,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("Enquiry submitted:", enquiryDetails);
    onSubmitEnquiry?.(enquiryDetails);

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
      setSelectedServices([]);
      setIsServiceOpen(false);
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
        <div ref={serviceDropdownRef} className="relative">
          <label
            onClick={() => setIsServiceOpen((prev) => !prev)}
            className="cursor-pointer text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90 transition-colors duration-200 hover:text-white flex items-center h-5"
          >
            What can we help you with? <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="group relative mt-3">
            <div
              id="service-select"
              role="button"
              tabIndex={0}
              aria-haspopup="listbox"
              aria-expanded={isServiceOpen}
              onClick={() => setIsServiceOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsServiceOpen((prev) => !prev);
                }
              }}
              className="flex w-full min-h-[32px] md:min-h-[34px] cursor-pointer items-center justify-between border-b border-neutral-600 bg-transparent pb-2 pr-6 text-left text-sm md:text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
            >
              {selectedServices.length === 0 ? (
                <span className="text-sm md:text-base text-typography-light">
                  Select a service
                </span>
              ) : (
                <div className="flex flex-wrap items-center gap-1.5">
                  {selectedServices.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-1.5 rounded-sm bg-[#182635] border border-primary/40 px-2 py-0.5 text-xs text-white"
                    >
                      <span>{service}</span>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleService(service);
                        }}
                        className="cursor-pointer text-neutral-400 hover:text-white transition-colors"
                        title={`Remove ${service}`}
                      >
                        <X size={11} strokeWidth={2.5} />
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <ChevronDown
              size={16}
              className={`pointer-events-none absolute right-0 top-1 text-typography-light transition-transform duration-300 group-hover:text-white ${
                isServiceOpen ? "rotate-180 text-white" : ""
              }`}
            />

            {/* Multi-select Dropdown */}
            {isServiceOpen && (
              <div
                role="listbox"
                aria-multiselectable="true"
                className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto border border-neutral-600 bg-typography-dark py-1.5 shadow-2xl"
              >
                {SERVICE_OPTIONS.map((option) => {
                  const isChecked = selectedServices.includes(option);
                  return (
                    <div
                      key={option}
                      role="option"
                      aria-selected={isChecked}
                      onClick={() => toggleService(option)}
                      className="flex cursor-pointer items-center gap-3 px-3.5 py-2 text-xs md:text-sm transition-colors duration-150 hover:bg-[#1A232C] select-none"
                    >
                      <div
                        className={`flex size-4 shrink-0 items-center justify-center border transition-colors ${
                          isChecked
                            ? "border-primary bg-primary text-white"
                            : "border-neutral-500 bg-transparent"
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} className="text-white" />}
                      </div>
                      <span className={isChecked ? "text-white font-medium" : "text-neutral-300"}>
                        {option}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* What's your estimated budget? */}
        <div>
          <label
            htmlFor="budget-select"
            className="cursor-pointer text-xs md:text-sm text-typography-offwhite avenir-400 opacity-90 transition-colors duration-200 hover:text-white flex items-center h-5"
          >
            <span>What's your estimated budget?</span>
            <span className="text-typography-light font-normal text-xs ml-1">(AUD)</span>
          </label>
          <div className="group relative mt-3">
            <select
              id="budget-select"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`w-full h-[32px] md:h-[34px] cursor-pointer appearance-none border-b border-neutral-600 bg-transparent pb-2 pr-6 text-sm md:text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none ${
                budget ? "text-white" : "text-typography-light"
              }`}
            >
              <option value="" disabled className="bg-typography-dark text-typography-light text-sm md:text-base">
                Select Budget (AUD)
              </option>
              <option value="Under $500" className="bg-typography-dark text-white text-sm md:text-base">
                Under $500
              </option>
              <option value="$500–$1,000" className="bg-typography-dark text-white text-sm md:text-base">
                $500–$1,000
              </option>
              <option value="$1,000–$2,500" className="bg-typography-dark text-white text-sm md:text-base">
                $1,000–$2,500
              </option>
              <option value="$2,500–$5,000" className="bg-typography-dark text-white text-sm md:text-base">
                $2,500–$5,000
              </option>
              <option value="$5,000+" className="bg-typography-dark text-white text-sm md:text-base">
                $5,000+
              </option>
              <option value="Not sure yet" className="bg-typography-dark text-white text-sm md:text-base">
                Not sure yet
              </option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1 text-typography-light transition-colors duration-300 group-hover:text-white"
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
        className="group mt-8 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-xs md:text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md hover:shadow-primary/25 disabled:opacity-70 cursor-pointer active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Submit</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-45"
            />
          </>
        )}
      </button>
    </form>
  );
}
