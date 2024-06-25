import type { skills } from "./skill";

const projectImages: Project[] = [
  {
    name: "Proshop",
    description:
      "This e-commerce site is secure, responsive, and packed with features like user-authentication, add-to-cart, PayPal integration, and admin-user routes. It utilizes JWT-based HTTP-only secure cookies for enhanced security.",
    src: "/images/projectImages/proshop.png",
    stack: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Redux", "Render"],
    link: "https://github.com/krishna2k3/e-commerce-website",
  },
  {
    name: "Recharge '23",
    description:
      "This is the official website of RECHARGE '23, the flagship cultural fest organized by REC. Within just 3 weeks of its launch, the website has attracted over 15,000 unique visitors. It boasts a responsive and intuitive design, leveraging ReactJS and TailwindCSS. Every component has been carefully crafted for reusability, ensuring an enhanced user experience.",
    src: "/images/projectImages/recharge.png",
    stack: ["ReactJS", "TailwindCSS"],
    link: "https://github.com/krishna2k3/Recharge-23",
  },
  {
    name: "War of Words '23",
    description:
      "This is a responsive website with an intuitive user experience, built using ReactJS and TailwindCSS. The website had over 1,500 unique visitors within the first week of its launch, prior to the WoW '23 event. I analyzed the requirements and designed and developed the website within two days of receiving notice.",
    src: "/images/projectImages/wow.png",
    stack: ["ReactJS", "TailwindCSS"],
    link: "https://github.com/krishna2k3/wow23",
  },
];

export default projectImages;

type Project = {
  name: string;
  description: string;
  src: string;
  stack: (keyof typeof skills)[];
  link: string;
};
