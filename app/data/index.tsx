import home from "@/public/icons/home.svg";
import notification from "@/public/icons/notification.svg";
import realNotification from "@/public/icons/realNotification.svg";
import messages from "@/public/icons/messages.svg";
import collections from "@/public/icons/collections.svg";
import profile from "@/public/icons/profile.svg";
import sub from "@/public/icons/sub.svg";

export const sideBarItems = [
  {
    id: 1,
    name: "Home",
    image: home,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Notifications",
    image: realNotification,
    link: "/notifications",
  },
  {
    id: 3,
    name: "Messages",
    image: notification,
    link: "/dashboard",
  },
  {
    id: 4,
    name: "Collections",
    image: messages,
    link: "/dashboard",
  },
  {
    id: 5,
    name: "Subscriptions",
    image: collections,
    link: "/dashboard",
  },
  {
    id: 6,
    name: "Profile",
    image: sub,
    link: "dashboard/profile",
  },
  {
    id: 7,
    name: "More",
    image: profile,
    link: "/dashboard",
  },
];

export const commentOptions = [
  {
    id: 1,
    name: "Hide user’s post from feed",
  },
  {
    id: 2,
    name: "Block",
  },
  {
    id: 3,
    name: "Report",
  },
];
