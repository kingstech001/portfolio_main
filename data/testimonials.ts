export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
  quote: string;
  rating: 5 | 4;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Mehta",
    role: "CTO",
    company: "Attio",
    avatarSrc: "/images/testimonials/priya.jpg",
    quote:
      "Jordan rewrote our data-ingestion pipeline while shipping new features in parallel — zero downtime, 40 % faster p95 latency. Rare ability to move fast without cutting corners.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Osei",
    role: "Founder",
    company: "Launchpad Studio",
    avatarSrc: "/images/testimonials/marcus.jpg",
    quote:
      "We went from zero to a polished, investor-ready MVP in six weeks. Jordan asked the right questions before writing a single line — that product thinking saved us months of rework.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Elina Vorobieva",
    role: "VP Engineering",
    company: "Crux Analytics",
    avatarSrc: "/images/testimonials/elina.jpg",
    quote:
      "The code quality, documentation, and the way Jordan handled feedback made integration into our existing team seamless. Would bring them on for any greenfield project without hesitation.",
    rating: 5,
  },
];