import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
    const [service, setService] = useState("");
    const [budget, setBudget] = useState("");

    return (
        <form className="border border-dark p-6 md:p-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Jhon Doe"
                        className="mt-[12px] w-full border-b border-neutral-600 bg-transparent pb-2 text-base text-white placeholder:text-[#5E686F] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="jhon@gmail.com"
                        className="mt-[12px] w-full border-b border-neutral-600 bg-transparent pb-2 text-base text-white placeholder:text-[#5E686F] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Company Name */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="ABC Marketing"
                        className="mt-[12px] w-full border-b border-neutral-600 bg-transparent pb-2 text-base text-white placeholder:text-[#5E686F] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="1234567890"
                        className="mt-[12px] w-full border-b border-neutral-600 bg-transparent pb-2 text-base text-white placeholder:text-[#5E686F] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* What You Need */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        What You Need
                    </label>
                    <div className="relative mt-[12px]">
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className={`w-full appearance-none border-b border-neutral-600 bg-transparent pb-2 pr-6 text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none ${service ? "text-white" : "text-[#5E686F]"}`}
                        >
                            <option value="" disabled className="bg-typography-dark text-[#5E686F]">Select a service</option>
                            <option value="Complete Brand Design" className="bg-typography-dark text-white">Complete Brand Design</option>
                            <option value="Web Design" className="bg-typography-dark text-white">Web Design</option>
                            <option value="Digital Strategy" className="bg-typography-dark text-white">Digital Strategy</option>
                            <option value="Product Design" className="bg-typography-dark text-white">Product Design</option>
                        </select>
                        <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-0 top-1 text-[#5E686F]"
                        />
                    </div>
                </div>

                {/* Estimate Budget */}
                <div>
                    <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                        Estimate Budget <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-[12px]">
                        <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className={`w-full appearance-none border-b border-neutral-600 bg-transparent pb-2 pr-6 text-base transition-colors duration-300 hover:border-white focus:border-white focus:outline-none ${budget ? "text-white" : "text-[#5E686F]"}`}
                        >
                            <option value="" disabled className="bg-typography-dark text-[#5E686F]">Select Budget</option>
                            <option value="$1,000 - $5,000" className="bg-typography-dark text-white">$1,000 - $5,000</option>
                            <option value="$5,000 - $10,000" className="bg-typography-dark text-white">$5,000 - $10,000</option>
                            <option value="$10,000+" className="bg-typography-dark text-white">$10,000+</option>
                        </select>
                        <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-0 top-1 text-[#5E686F]"
                        />
                    </div>
                </div>

            </div>
            {/* Project Description */}
            <div className="mt-6">
                <label className="text-sm text-typography-offwhite avenir-400 opacity-90">
                    Tell us about the project
                </label>

                <textarea
                    rows={3}
                    placeholder="A little context, your ambition, and an ideal timeline..."
                    className="mt-[12px] w-full resize-none border-b border-neutral-600 bg-transparent pb-3 text-base text-white placeholder:text-[#5E686F] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 bg-[#1F6FD0] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#185CB0]"
            >
                Submit
                <ArrowUpRight size={16} />
            </button>
        </form>
    );
}
