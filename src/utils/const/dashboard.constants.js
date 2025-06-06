import { GrGroup } from "react-icons/gr";
import { RiUserSearchLine } from "react-icons/ri";
import { LuFileChartLine } from "react-icons/lu";

export const INFO_CARD_DATA = [
  {
    title: "Employees",
    value: 24,
    icon: GrGroup,
    iconColor: "#2C1336",
    iconBg: "#EED3EF",
    linkText: "View Details",
    linkTo: "/people",
  },
  {
    title: "Hiring",
    value: 5,
    icon: RiUserSearchLine,
    iconColor: "#21729F",
    iconBg: "#D3E3EF",
    linkText: "View Details",
    linkTo: "/hiring",
  },
  {
    title: "Projects",
    value: 1,
    icon: LuFileChartLine,
    iconColor: "#13361C",
    iconBg: "#E3EFD3",
    linkText: "View Details",
    linkTo: "/",
  },
];

export const MOCK_ACTIONS = [
  {
    startTime: "08:00 am",
    endTime: "09:00 am",
    title: "Team Standup",
    description: "Daily standup with the frontend and backend teams",
  },
  {
    startTime: "09:30 am",
    endTime: "10:30 am",
    title: "Product Planning",
    description: "Quarterly roadmap discussion with product managers",
  },
  {
    startTime: "11:00 am",
    endTime: "12:00 pm",
    title: "Design Review",
    description: "Review new UI designs submitted by the design team",
  },
  {
    startTime: "01:00 pm",
    endTime: "02:00 pm",
    title: "Lunch & Learn",
    description: "Technical session on TypeScript best practices",
  },
  {
    startTime: "02:15 pm",
    endTime: "03:00 pm",
    title: "1:1 Meeting",
    description: "Monthly check-in with engineering manager",
  },
  {
    startTime: "03:30 pm",
    endTime: "04:30 pm",
    title: "Internal Meeting",
    description: "Internal Meeting with Jade Sapphire - UI Designer",
  },
  {
    startTime: "05:00 pm",
    endTime: "06:00 pm",
    title: "Client Sync",
    description: "Call with Client regarding Project X",
  },
  {
    startTime: "06:30 pm",
    endTime: "07:30 pm",
    title: "Code Review",
    description: "Review PRs and provide feedback to team",
  },
  {
    startTime: "08:00 pm",
    endTime: "09:00 pm",
    title: "Wrap-up & Planning",
    description: "Wrap up day and plan tasks for tomorrow",
  },
];

export const DASHBOARD_TEXT = {
  notification: {
    iconColor: "#1163C1",
    message:
      "Optimize your experience on Gigfloww- track your job post, manage teams and streamline HR OPERATIONS EFFORTLESSLY TODAY!",
  },
  heading: "Welcome Back, Nuraj group",
  sectionTitle: "Upcoming Actions",
};