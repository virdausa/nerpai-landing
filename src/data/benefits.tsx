import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "About Us",
    id: "about-us",
    description:
      "Our ERD app offers an intuitive interface that simplifies design, provides comprehensive analytics, and streamlines the management of companies and their stores.",
    bullets: [
      {
        title: "User-Friendly Interface",
        description:
          "Navigate effortlessly with a design built for both beginners and experts.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Comprehensive Analytics",
        description:
          "Leverage detailed insights to make informed business decisions.",
        icon: <FiPieChart size={26} />,
      },
      {
        title: "Streamlined ERD Creation",
        description:
          "Quickly build and manage your entity relationships with ease.",
        icon: <FiBarChart2 size={26} />,
      },
    ],
    imageSrc: "/images/growth.webp",
  },
  {
    title: "Multi Company Management",
    id: "multi-company",
    description:
      "Effortlessly manage multiple companies and their stores. Whether as an owner or an employee, our platform adapts to your role and needs.",
    bullets: [
      {
        title: "Owner & Employee Roles",
        description:
          "Easily switch between managing your own companies and collaborating with others.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Unified Dashboard",
        description:
          "Monitor all your companies from a single, intuitive dashboard.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Real-Time Updates",
        description:
          "Stay informed with up-to-the-minute data across all your entities.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/companies.webp",
  },
  {
    title: "Multi Stores",
    id: "multi-stores",
    description:
      "Designed specifically for managing multiple store locations, our platform offers tailored tools to monitor performance, inventory, and customer interactions across all your outlets.",
    bullets: [
      {
        title: "Centralized Store Dashboard",
        description:
          "View and manage all your stores from a single, comprehensive interface.",
        icon: <FiPieChart size={26} />,
      },
      {
        title: "Customizable Analytics",
        description:
          "Gain deep insights with store-specific performance metrics and reports.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Seamless Store Integration",
        description:
          "Effortlessly add, modify, and synchronize multiple store locations within your company.",
        icon: <FiLock size={26} />,
      },
    ],
    imageSrc: "/images/stores.webp",
  },
  {
    title: "Third Party Integration",
    id: "third-party",
    description:
      "Connect seamlessly with top marketplaces like Tokopedia, Shopee, and Bukalapak for a fully integrated business experience.",
    bullets: [
      {
        title: "Marketplace Sync",
        description:
          "Automatically sync your data with leading e-commerce platforms.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Order Management",
        description:
          "Simplify order processing and tracking with integrated tools.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Seamless Connectivity",
        description:
          "Enhance your operations with reliable, third-party integrations.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/integration.webp",
  },
];
