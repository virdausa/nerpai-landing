import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering businesses with cutting-edge technology solutions to drive success and efficiency",
  quickLinks: [
    {
      text: "About us",
      url: "#about-us",
    },
    {
      text: "Multi Company",
      url: "#multi-company",
    },
    {
      text: "Third Party",
      url: "#third-party",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Testimonial",
      url: "#testimonial",
    },
    {
      text: "Sponsor",
      url: "#sponsor",
    },
  ],
  email: "help@nerpai.space",
  telephone: "+62 812 234 567",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://x.com/firdausa_com",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com/company/nerpai/",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};
