import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  perfume1,
  perfume2,
  perfume3,
  customer1,
  customer2,
  perfumeimg,
  thumbnailperfume1,
  thumbnailperfume2,
  thumbnailperfume3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailperfume1,
    perfume: perfume1,
  },
  {
    thumbnail: thumbnailperfume2,
    perfume: perfume2,
  },
  {
    thumbnail: thumbnailperfume3,
    perfume: perfume3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Perfumes" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: perfumeimg,
    name: "Perfume Name 1",
    price: "$200.20",
  },
  {
    imgURL: perfumeimg,
    name: "Perfume Name 1",
    price: "$210.20",
  },
  {
    imgURL: perfumeimg,
    name: "Perfume Name 1",
    price: "$220.20",
  },
  {
    imgURL: perfumeimg,
    name: "Perfume Name 1",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Perfume 1", link: "/" },
      { name: "Perfume 2", link: "/" },
      { name: "Perfume 3", link: "/" },
      { name: "Perfume 4", link: "/" },
      { name: "Perfume 5", link: "/" },
      { name: "Perfume 6", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "sabir3388@fragrance.com", link: "sabir3388@fragrance.com" },
      { name: "+1 (347) 417-6602", link: "+1 (347) 417-6602" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
