export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export const processData: ProcessStepData[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, goals and the problem we're here to solve.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn what we learn into a clear direction, priorities and a practical plan for the work ahead.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the visual system and experience, refining every detail until everything feels intentional.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We bring the approved direction to life, test the details and prepare everything for launch.",
  },
];