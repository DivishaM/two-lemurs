export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: "01",
    question: "What services does Two Lemurs offer?",
    answer:
      "We help businesses with logo design, brand identity, graphic design, and web design. Whether you're launching a new brand or refreshing an existing one, we create practical, consistent designs that support your business goals.",
  },
  {
    id: "02",
    question: "How much does a design project cost?",
    answer:
      "Pricing depends on the scope, complexity, and deliverables. Once we understand your requirements, we'll provide a tailored quote so you know what's included before the project begins.",
  },
  {
    id: "03",
    question: "How long does a design project take?",
    answer:
      "It depends on the type and size of the project. A logo design usually takes less time than a complete brand identity or website. We'll agree on a realistic timeline and key milestones before getting started.",
  },
  {
    id: "04",
    question: "Can I request changes during the design process?",
    answer:
      "Absolutely. Your feedback is part of the process. We'll agree on the number and scope of revisions upfront, so you know what to expect as we refine your design.",
  },
  {
    id: "05",
    question: "What files will I receive when the project is complete?",
    answer:
      "You'll receive the final files agreed upon in your project scope. Depending on the service, these may include high-resolution images, vector files, brand guidelines, and digital or print-ready assets.",
  },
  {
    id: "06",
    question: "How do I get started with Two Lemurs?",
    answer:
      "Get in touch and tell us a little about your business and what you need. We'll discuss your goals, clarify the project scope and recommend the best way forward.",
  },
];