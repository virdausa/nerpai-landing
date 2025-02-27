import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Starter",
    price: "Free",
    description: "All of these features, for free!",
    features: [
      "Free access",
      "Limited to 2 Companies",
      "Limited to 10 Empoyees",
      "Limited to 5 Stores",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$5-$100/mo",
    description: "Everything in basic, plus...",
    features: [
      "Increase Companies limit to 10",
      "Increase Employees limit to 50",
      "Increase Stores limit to 20",
      "Limited support",
      "Basic app training",
      "Limited internal & external database access",
      "Third party integration",
      "Access to Sponsor Leaderboard",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Everything in basic and pro, plus...",
    features: [
      "24/7 Dedicated Cloud Server",
      "Dedicated Support on Workdays",
      "Custom Solutions",
      "On-site Training",
      "Full database access",
    ],
  },
];
