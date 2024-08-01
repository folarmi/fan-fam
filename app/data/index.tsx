import home from "@/public/icons/home.svg";
import notification from "@/public/icons/notification.svg";
import realNotification from "@/public/icons/realNotification.svg";
import messages from "@/public/icons/messages.svg";
import collections from "@/public/icons/collections.svg";
import profile from "@/public/icons/profile.svg";
import sub from "@/public/icons/sub.svg";
import defaultAvatar from "@/public/defaultAvatar.svg";
import defaultAvatarTwo from "@/public/icons/defaultAvatarTwo.svg";
import defaultAvatarThree from "@/public/icons/defaultAvatarThree.svg";
import defaultAvatarFour from "@/public/icons/defaultAvatarFour.svg";
import defaultAvatarFive from "@/public/icons/defaultAvatarFive.svg";
import gridOne from "@/public/gridOne.svg";
import gridTwo from "@/public/gridTwo.svg";
import gridThree from "@/public/gridThree.svg";
import gridFour from "@/public/gridFour.svg";
import gridFive from "@/public/gridFive.svg";
import gridSix from "@/public/gridSix.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import audioFile from "@/public/icons/audioFile.svg";

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
    link: "/dashboard/notifications",
  },
  {
    id: 3,
    name: "Messages",
    image: notification,
    link: "/dashboard/messages",
  },
  {
    id: 4,
    name: "Collections",
    image: messages,
    link: "/dashboard/collections",
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
    link: "/dashboard/profile",
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
    name: "Add User to list",
  },
  {
    id: 3,
    name: "Block",
  },
  {
    id: 4,
    name: "Report",
  },
];

export const sortOptions = [
  {
    id: 1,
    name: "All time",
  },
  {
    id: 2,
    name: "Date",
  },
  {
    id: 3,
    name: "Latest post",
  },
  {
    id: 4,
    name: "Most liked",
  },
  {
    id: 5,
    name: "Highest tips",
  },
];

export const notificationSampleData = [
  {
    id: 1,
    photo: defaultAvatar,
    tag: "@yummychill54",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "Priscilia yummy",
  },
  {
    id: 2,
    photo: defaultAvatarTwo,
    tag: "@Timmy88",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "PetitTimmy",
  },
  {
    id: 3,
    photo: defaultAvatarThree,
    tag: "@investorchill",
    time: "6 h ago",
    message: "Commented on your post.",
    name: "mArk 🤪 SpecCer 🤪",
  },
  {
    id: 4,
    photo: defaultAvatarFour,
    tag: "@NickiCer",
    time: "6 h ago",
    message: "Commented on your post.",
    name: "SpenCer 🤪",
  },
  {
    id: 5,
    photo: defaultAvatarFive,
    tag: "@inCin25",
    time: "3 h ago",
    message: "Commented on your post.",
    name: "BellaCa",
  },
  {
    id: 6,
    photo: defaultAvatar,
    tag: "@Timmy88",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "PetitTimmy",
  },
  {
    id: 7,
    photo: defaultAvatar,
    tag: "@yummychill54",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "Priscilia yummy",
  },
  {
    id: 8,
    photo: defaultAvatarTwo,
    tag: "@Timmy88",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "PetitTimmy",
  },
  {
    id: 9,
    photo: defaultAvatarThree,
    tag: "@investorchill",
    time: "6 h ago",
    message: "Commented on your post.",
    name: "mArk 🤪 SpecCer 🤪",
  },
  {
    id: 10,
    photo: defaultAvatarFour,
    tag: "@NickiCer",
    time: "6 h ago",
    message: "Commented on your post.",
    name: "SpenCer 🤪",
  },
  {
    id: 11,
    photo: defaultAvatarFive,
    tag: "@inCin25",
    time: "3 h ago",
    message: "Commented on your post.",
    name: "BellaCa",
  },
  {
    id: 12,
    photo: defaultAvatar,
    tag: "@Timmy88",
    time: "3 h ago",
    message: "Subscribed to your account",
    name: "PetitTimmy",
  },
];

export const dummyCollectionData = [
  {
    id: 1,
    folderName: "Fans",
    noOfUsers: "8 users",
    noOfPosts: "56 posts",
  },
  {
    id: 2,
    folderName: "Following",
    noOfUsers: "5 users",
    noOfPosts: "56 posts",
  },
  {
    id: 3,
    folderName: "Restricted",
    noOfUsers: "8 users",
    noOfPosts: "56 posts",
  },
  {
    id: 4,
    folderName: "Blocked",
    noOfUsers: "8 users",
    noOfPosts: "56 posts",
  },
  {
    id: 5,
    folderName: "Friends",
    noOfUsers: "8 users",
    noOfPosts: "56 posts",
  },
  {
    id: 6,
    folderName: "My people",
    noOfUsers: "8 users",
    noOfPosts: "56 posts",
  },
  {
    id: 7,
    folderName: "Following",
    noOfUsers: "5 users",
    noOfPosts: "56 posts",
  },
  {
    id: 8,
    folderName: "Following",
    noOfUsers: "5 users",
    noOfPosts: "56 posts",
  },
];

export const collectionsOptions = [
  {
    id: 1,
    name: "Add to another list",
  },
  {
    id: 2,
    name: "Remove from list",
  },
  {
    id: 3,
    name: "Block",
  },
  {
    id: 4,
    name: "Restrict",
  },
  {
    id: 5,
    name: "Report",
  },
];

export const userListCollectionsOptions = [
  {
    id: 1,
    name: "Subscription",
  },
  {
    id: 2,
    name: "Promotions",
  },
  {
    id: 3,
    name: "Tags",
  },
  {
    id: 4,
    name: "Comments",
  },
  {
    id: 5,
    name: "Mentions",
  },
];

export const notificationTabs = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Promotions",
  },
  {
    id: 3,
    name: "Subscription",
  },
  {
    id: 4,
    name: "Tags",
  },
  {
    id: 5,
    name: "Comments",
  },
  {
    id: 6,
    name: "Mentions",
  },
];

export const sampleChatGroups = [
  {
    id: 1,
    groupName: "Newly subscribed users",
    noOfUsers: "8 users",
  },
  {
    id: 2,
    groupName: "$30 users",
    noOfUsers: "5 users",
  },
  {
    id: 3,
    groupName: "$50 users",
    noOfUsers: "8 users",
  },
];

export const images = [
  gridOne,
  timelineTwo,
  gridThree,
  gridFour,
  gridFive,
  gridSix,
  gridOne,
  gridTwo,
  gridThree,
  gridFour,
  gridFive,
  gridSix,
];

export const audioImages = [
  audioFile,
  audioFile,
  audioFile,
  audioFile,
  audioFile,
  audioFile,
  audioFile,
  audioFile,
  audioFile,
];
