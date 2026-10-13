export interface Insight {
  id: number;
  image: string;
  title: string;
  date: string;
  link: string;
}

export const insightsData: Insight[] = [
  {
    id: 1,
    image: "./images/insight-1.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Accumsan urna sit volutpat id enim.",
    date: "September 24, 2026",
    link: "#",
  },
  {
    id: 2,
    image: "./images/insight-2.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Accumsan urna sit volutpat id enim.",
    date: "September 24, 2026",
    link: "#",
  },
  {
    id: 3,
    image: "./images/insight-3.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Accumsan urna sit volutpat id enim.",
    date: "September 24, 2026",
    link: "#",
  },
];