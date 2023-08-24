import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Ensure a positive user experience.",
    desc1: ['Consistency','Whitespace','Typography','Color Palette'],
    desc2: ['Forms','Responsive','Testing','Documentation'],
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Combination of technical skills to effectively design and develop these interfaces",
    desc1: ['HTML','CSS','Javascript','TailwindCSS'],
    desc2: ['ReactJS','NextJS','Typescript','NestJS'],
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Combining different functional units or components to create a seamless and well-functioning application",
    desc1: ['Component-Based Architecture','Data Flow Management','Testing','Routing'],
    desc2: ['API Integration','Styling','Error Handling','CI/CD'],
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  }
];

export default featuresTabData;
