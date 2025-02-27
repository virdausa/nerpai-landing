import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "All features, for free",
      "Unlimited companies",
      "Unlimited stores",
      "1GB storage",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: 5,
    features: [
      "Basic app training",
      "Limited support email & phone support",
      "5GB storage",
      "Limited database access",
      "Limited analytics",
      "Limited third-party integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "On-site app training",
      "24/7 dedicated support",
      "Unlimited storage",
      "Full database access",
      "Comprehensive analytics",
      "Unlimited third-party integration",
      "Custom solutions",
    ],
  },
];
