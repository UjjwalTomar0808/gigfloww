export const gradients = {
  default: "from-[#2784B8] to-[#113B52]",
  dashboard: "from-[#3490c4] to-[#16455a]",
  people: "from-[#2376A4] to-[#0f4d6b]",
  hiring: "from-[#2784B8] to-[#113B52]",
  salary: "from-[#2784B8] to-[#113B52]",
  reviews: "from-[#3490c4] to-[#16455a]",
};

export const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "People", path: "/people" },
  { name: "Hiring", path: "/hiring" },
  { name: "Salary", path: "/salary" },
  { name: "Reviews", path: "/reviews" },
];

export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};