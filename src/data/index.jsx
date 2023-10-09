import { FormatQuote } from "@mui/icons-material";
import {
  b1,
  b2,
  b5,
  call_center,
  courier,
  hardboard,
  home_delivery,
  img4,
  payment,
  process_2,
  process_3,
  process_4,
  search,
  support1,
  tracking,
  transport,
  unboxing,
  world_distribution,
} from "../constants";
import {
  amazon,
  rl_carriers,
  staff,
  staff1,
  staff2,
  staff3,
  staff5,
  staff6,
  staff7,
  staff8,
  staff9,
  storage,
  xpo,
} from "../constants/originals";

export const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Theo Transportation",
    date: "June 4, 2023",
    comments: "No Comments",
    image: staff,
    subtitle: "Why Transport is Key in Logistics?",
    description:
      "Kobita mnis iste natus error sit voluptatem acycu sa mnis iste nat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in […]",
  },
  {
    id: 2,
    title: "Theo Transportation",
    date: "June 4, 2023",
    comments: "No Comments",
    image: staff2,
    subtitle: "Can You Transport Furniture In Uber?",
    description:
      "Kobita mnis iste natus error sit voluptatem acycu sa mnis iste nat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in […]",
  },
  {
    id: 3,
    title: "Theo Transportation",
    date: "June 4, 2023",
    comments: "No Comments",
    subtitle: "Acadian Non Emergency Transport",
    images: [staff5, staff8, staff9, staff6],
    description:
      "Kobita mnis iste natus error sit voluptatem acycu sa mnis iste nat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in […]",
  },
  {
    id: 4,
    title: "Theo Transportation",
    date: "June 4, 2023",
    comments: "No Comments",
    subtitle: "Bus To Borristown Transportation Center",
    image: staff1,
    description:
      "Kobita mnis iste natus error sit voluptatem acycu sa mnis iste nat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in […]",
  },
  {
    id: 5,
    title: "Theo Transportation",
    date: "June 4, 2023",
    comments: "No Comments",
    image: staff,
    subtitle: "New York Door To Door Transportation",
    description:
      "Kobita mnis iste natus error sit voluptatem acycu sa mnis iste nat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in […]",
  },
];

export const cards = [
  {
    id: 1,
    title: "Airport Transfers",
    image: transport,
    description:
      "We provide reliable and comfortable transportation to and from airports, ensuring a hassle-free start or end to your journey.",
  },
  {
    id: 2,
    title: "Corporate Transportation",
    image: home_delivery,
    description:
      "Our corporate transportation services are tailored to meet the needs of businesses. We offer timely and professional transportation for executives, clients, and employees.",
  },
  {
    id: 3,
    title: "Event Transportation",
    image: tracking,
    description:
      "Whether it's a wedding, conference, or any other special event, we can provide transportation solutions to ensure smooth logistics and a memorable experience.",
  },
  {
    id: 4,
    title: "City Tours",
    image: payment,
    description:
      "Explore the city in style with our city tour services. Our knowledgeable drivers will take you to popular attractions and hidden gems, providing a personalized and informative experience.",
  },
  {
    id: 5,
    title: "Special Occasions",
    image: search,
    description:
      "Celebrate your special occasions with Theo Transportation. We offer transportation services for birthdays, anniversaries, proms, and other memorable events.",
  },
  {
    id: 6,
    title: "Medical Transportation",
    image: call_center,
    description:
      "We understand the importance of reliable transportation for medical appointments. Our trained drivers provide safe and comfortable transportation for patients to hospitals, clinics, and other healthcare facilities.",
  },
  {
    id: 7,
    title: "Hourly Charters",
    image: call_center,
    description:
      " If you need transportation for a specific period of time, our hourly charter service is the perfect option. Enjoy flexibility and convenience as you travel to multiple destinations or attend meetings throughout the day.",
  },
];

export const works = [
  {
    id: 1,
    title: "Pick A Service",
    image: hardboard,
    description:
      "Knim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip betha kake jeye.",
  },
  {
    id: 2,
    title: "Send The Product",
    image: process_2,
    description:
      "Knim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip betha kake jeye.",
  },
  {
    id: 3,
    title: "Delivery Confirmation",
    image: process_3,
    description:
      "Knim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip betha kake jeye.",
  },
  {
    id: 4,
    title: "Clear The Payments",
    image: process_4,
    description:
      "Knim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip betha kake jeye.",
  },
];

export const disclosures = [
  {
    id: 1,
    title: "How to send my percel?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatmnis iste natus error sits when the musics over turn off the light",
  },
  {
    id: 2,
    title: "What is the best way to use Transico?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatmnis iste natus error sits when the musics over turn off the light",
  },
  {
    id: 3,
    title: "Why Transico is very popualr?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatmnis iste natus error sits when the musics over turn off the light",
  },
  {
    id: 4,
    title: "How to get refund from Transico?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatmnis iste natus error sits when the musics over turn off the light",
  },
  {
    id: 5,
    title: "How to receive my percel?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatmnis iste natus error sits when the musics over turn off the light",
  },
];

export const reviews = [
  {
    id: 1,
    icon: <FormatQuote className="text-[#005bac] w-8 h-8" />,
    description:
      " Kenim ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon ulla ",
    user: "Jewel Khan",
    job: "Traveller",
    image: b1,
  },
  {
    id: 2,
    icon: <FormatQuote className="text-[#005bac] w-8 h-8" />,
    description:
      " Kenim ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon ulla ",
    user: "Nayan Eva",
    job: "Traveller",
    image: b2,
  },
  {
    id: 3,
    icon: <FormatQuote className="text-[#005bac] w-8 h-8" />,
    description:
      " Kenim ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon ulla ",
    user: "Mike Peter",
    job: "Journalist",
    image: b5,
  },
];

export const abouts = [
  {
    id: 1,
    number: "24",
    title: "Total Countries",
    description: "accusa mnis iste natus error sit vol uptatem accusa nulla",
  },
  {
    id: 2,
    number: "62",
    title: "Worldwide Cities",
    description: "kccusa mnis iste natus error sit vol uptatem accusa oulla",
  },
  {
    id: 3,
    number: "136",
    title: "People Engaged",
    description: "pccusa mnis iste natus error sit vol uptatem accusa iulles",
  },
  {
    id: 4,
    number: "2",
    title: "Package Delivery",
    description: "dccusa mnis iste natus error sit vol uptatem accusa yulls",
  },
];

export const members = [
  {
    id: 1,
    name: "John Doe",
    position: "Founder & CEO",
    image: staff2,
  },
  {
    id: 2,
    name: "Peter Make",
    position: "General Manager",
    image: staff5,
  },
  {
    id: 3,
    name: "Harrison Lake",
    position: "Delivery Head",
    image: staff7,
  },
  {
    id: 4,
    name: "Parker Lambark",
    position: "Founder & CEO",
    image: staff9,
  },
  {
    id: 5,
    name: "Paul Combs",
    position: "Delivery Head",
    image: staff8,
  },
  {
    id: 6,
    name: "Johnson Blake",
    position: "General Manager",
    image: staff6,
  },
];

export const images = [
  {
    id: 1,
    image: staff,
  },
  {
    id: 2,
    image: staff1,
  },
  {
    id: 3,
    image: staff2,
  },
  {
    id: 4,
    image: staff3,
  },
  {
    id: 5,
    image: storage,
  },
  {
    id: 6,
    image: img4,
  },
];

export const homes = [
  {
    id: 1,
    icon: support1,
    title: "Premium Logistics Support",
    description:
      "Knim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    icon: world_distribution,
    title: "Worldwide Product Delivery",
    description:
      "Cnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ponsequat.",
  },
  {
    id: 3,
    icon: courier,
    title: "Highly Skilled Logistics Parnters",
    description:
      "Pnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo jonsequat.",
  },
  {
    id: 4,
    icon: unboxing,
    title: "Safe & Secure Product Delivery",
    description:
      "Qnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo aonsequat.",
  },
];

export const who_we_work_with = [
  {
    id: 1,
    image: amazon,
  },
  {
    id: 2,
    image: xpo,
  },
  {
    id: 3,
    image: rl_carriers,
  },
];
