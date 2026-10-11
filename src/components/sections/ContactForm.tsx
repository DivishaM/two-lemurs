import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
    return (
        <form className="border border-[#101E27] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Jhon Doe"
                        className="mt-2 w-full border-b border-[#303A43] bg-transparent pb-2 text-xs text-white placeholder:text-[#59636D] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="jhon@gmail.com"
                        className="mt-2 w-full border-b border-[#303A43] bg-transparent pb-2 text-xs text-white placeholder:text-[#59636D] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Company Name */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="ABC Marketing"
                       className="mt-2 w-full border-b border-[#303A43] bg-transparent pb-2 text-xs text-white placeholder:text-[#59636D] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="1234567890"
                        className="mt-2 w-full border-b border-[#303A43] bg-transparent pb-2 text-xs text-white placeholder:text-[#59636D] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                    />
                </div>

                {/* What You Need */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        What You Need
                    </label>
                    <div className="relative mt-2">
                        <select
                            defaultValue=""
                            className="w-full appearance-none border-b border-[#303A43] bg-[#020B14] pb-2 pr-6 text-xs text-[#59636D] focus:outline-none"
                        >
                            <option value="" disabled>Select a service</option>
                            <option>Complete Brand Design</option>
                            <option>Web Design</option>
                            <option>Digital Strategy</option>
                            <option>Product Design</option>
                        </select>
                        <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-0 top-0 text-[#59636D]"
                        />
                    </div>
                </div>

                {/* Estimate Budget */}
                <div>
                    <label className="text-[11px] text-[#D1D5DB]">
                        Estimate Budget <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                        <select
                            defaultValue=""
                            className="w-full appearance-none border-b border-[#303A43] bg-[#020B14] pb-2 pr-6 text-xs text-[#59636D] focus:outline-none"
                        >
                            <option value="" disabled>Select Budget</option>
                            <option>$1,000 - $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000+</option>
                        </select>
                        <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-0 top-0 text-[#59636D]"
                        />
                    </div>
                </div>

            </div>
            {/* Project Description */}
            <div className="mt-6">
                <label className="text-[11px] text-[#D1D5DB]">
                    Tell us about the project
                </label>

                <textarea
                    rows={3}
                    placeholder="A little context, your ambition, and an ideal timeline..."
                    className="mt-2 w-full resize-none border-b border-[#303A43] bg-transparent pb-3 text-xs leading-5 text-white placeholder:text-[#59636D] transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
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