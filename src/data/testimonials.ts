import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Samsul Arip",
    role: "CEO of PT Bahagia Sukacita Bersama",
    message: `${siteDetails.siteName}'s ERP transforms what was once a headache into a fun and productive works!`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Roro Jonggrang",
    role: "Product Manager",
    message: `As a product manager, ${siteDetails.siteName} helps our company a lot in our day to day operation.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Ahmad Hae",
    role: "Man",
    message: `${siteDetails.siteName} is the best ERP in the world! I couldn't imagine living without ${siteDetails.siteName}`,
    avatar: "/images/testimonial-3.webp",
  },
];
