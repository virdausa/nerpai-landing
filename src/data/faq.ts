import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      "Absolutely! We use top of the notch security tactics to store your data",
  },
  {
    question: `Can I use ${siteDetails.siteName} on multiple devices?`,
    answer: `Absolutely! Your ${siteDetails.siteName}'s account will always be used on multiple devices`,
  },
  {
    question: `Do I need to have an expertise in operating technology to utilize ${siteDetails.siteName}'s features?`,
    answer: `Not at all! ${siteDetails.siteName} is designed to be as intuitive and as easy to operate as possible`,
  },
  {
    question: "What if I need help using the app?",
    answer:
      "For free user, you can ask help in our community section. For paid users, you can freely email us!",
  },
];
