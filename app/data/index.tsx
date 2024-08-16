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
import post from "@/public/icons/post.svg";
import story from "@/public/icons/story.svg";
import video from "@/public/icons/video.svg";

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
    link: "/dashboard/subscriptions/add-card",
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
    link: "/dashboard/settings/account",
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

export const samplePollData = [
  {
    id: 1,
    name: "This is option 1 of the poll",
    percent: "70%",
  },
  {
    id: 2,
    name: "This is option 2 of the poll",
    percent: "30%",
  },
];

export const settingsModule = [
  {
    id: 1,
    name: "Account",
    path: "/dashboard/settings/account",
  },
  {
    id: 2,
    name: "Collections",
    path: "/dashboard/settings/collections",
  },
  {
    id: 3,
    name: "Chat",
    path: "/dashboard/settings/chat",
  },
  {
    id: 4,
    name: "Notifications",
    path: "/dashboard/settings/notifications",
  },
  {
    id: 5,
    name: "Story",
    path: "/dashboard/settings/story",
  },
  {
    id: 6,
    name: "Display",
    path: "/dashboard/settings/display",
  },
  {
    id: 7,
    name: "QR Code",
    path: "/dashboard/settings/qr-code",
  },
  {
    id: 8,
    name: "Privacy and safety",
    path: "/dashboard/settings/privacy",
  },
];

export const accountSettingsModules = [
  {
    groupName: "Security",
    items: [
      {
        id: 1,
        name: "Password",
        path: "/dashboard/settings/account/change-password",
      },
      {
        id: 2,
        name: "Login sessions",
        path: "/dashboard/settings/account/login-sessions",
      },
      {
        id: 3,
        name: "Two factor authentication",
        path: "/dashboard/settings/account/two-factor",
      },
    ],
  },
  {
    groupName: "Linked accounts",
    items: [
      {
        id: 1,
        name: "TikTok",
        path: "/dashboard/settings/account/tiktok",
      },
      {
        id: 2,
        name: "X App",
        path: "/dashboard/settings/account/twitter",
      },
      {
        id: 3,
        name: "Facebook",
        path: "/dashboard/settings/account/facebook",
      },
      {
        id: 4,
        name: "Google",
        path: "/dashboard/settings/account/google",
      },
    ],
  },
  {
    groupName: "Account management",
    items: [
      {
        id: 1,
        name: "Delete account",
        path: "/dashboard/settings/account/delete-account",
      },
    ],
  },
];

export const sampleLoginSessions = [
  {
    id: 1,
    deviceName: "Chrome 126, Mac 10.15, Apple",
    ipAddress: "102.88.82.27 Nigeria",
    status: true,
    lastSeen: "",
  },
  {
    id: 2,
    deviceName: "Microsoft Edge 126, Windows 10",
    ipAddress: "102.88.82.27 United States",
    status: false,
    lastSeen: "7/25/24 5:43pm",
  },
  {
    id: 3,
    deviceName: "Microsoft Edge 126, Windows 10",
    ipAddress: "102.88.82.27 United States",
    status: false,
    lastSeen: "7/25/24 5:43pm",
  },
];

export const sampleTwoFactor = [
  { id: 1, name: "SMS", desc: "A one time code will be sent to your phone" },
  { id: 2, name: "Face ID", desc: "Works only on your mobile phone" },
];

export const notificationsSettings = [
  {
    id: 1,
    name: "Push notifications",
    desc: "Get push notifications to find out what’s going on when you’re not on OnlyFans. You can turn them off anytime.",
  },
  {
    id: 2,
    name: "Mentions",
    desc: "When OFF you will be notified when a friend mentions you",
  },
  {
    id: 3,
    name: "Email notification",
    desc: "Get emails to find out what’s going on when you’re not on OnlyFans. You can turn them off anytime.",
  },
];

export const displaySettings = [
  {
    groupName: "Language",
    items: [
      {
        id: 1,
        name: "English",
      },
      {
        id: 2,
        name: "French",
      },
      {
        id: 3,
        name: "Spanish",
      },
    ],
  },
  {
    groupName: "Theme",
    items: [
      {
        id: 1,
        name: "Light",
      },
      {
        id: 2,
        name: "Dark",
      },
      {
        id: 3,
        name: "System",
      },
    ],
  },
];

export const subscriptionSettings = [
  {
    id: 1,
    name: "Profile  promotion campaign",
    desc: "Offer a free trial or a discounted subscription on your profile for a limited number or already expired subscription",
    buttonText: "Start promotion campaign",
  },
  {
    id: 2,
    name: "Subscription bundles",
    desc: "Offer several months of subscription as a discounted bundle",
    buttonText: "Add bundle",
  },
  {
    id: 3,
    name: "Trial links",
    desc: "Create and share separate links with free trial subscription",
    buttonText: "Create new free trial link",
  },
];

export const limitedOfferData = [
  {
    id: 1,
    name: "Started",
    date: "July 31",
  },
  {
    id: 2,
    name: "End",
    date: "August 4",
  },
  {
    id: 3,
    name: "Days left",
    date: "2",
  },
  {
    id: 4,
    name: "Claims count",
    date: "5",
  },
];

export const happyPeopleFeed = [
  {
    id: 1,
    name: "Link created",
    date: "July 31",
  },
  {
    id: 2,
    name: "Link expires",
    date: "August 4",
  },
  {
    id: 3,
    name: "Offer limit",
    date: "August 4",
  },
  {
    id: 4,
    name: "Claims count",
    date: "5",
  },
];

export const subBundles = [
  {
    id: 1,
    amount: "$15",
    duration: "1 month",
  },
  {
    id: 2,
    amount: "$100",
    duration: "6 months",
  },
];

export const privacyAndSafetyItems = [
  {
    groupName: "Profile",
    items: [
      {
        id: 1,
        name: "Show activity status",
        isOn: true,
      },
      {
        id: 2,
        name: "Show activity status",
        isOn: false,
      },
      {
        id: 3,
        name: "Show media count on your profile",
        isOn: true,
      },
      {
        id: 4,
        name: "Public friends lst",
        isOn: true,
      },
      {
        id: 5,
        name: "Password",
        isOn: true,
      },
    ],
  },
  {
    groupName: "Discoverability",
    items: [
      {
        id: 1,
        name: "Opt out of suggestions",
        isOn: false,
      },
    ],
  },
  {
    groupName: "Water marks",
    items: [
      {
        id: 1,
        name: "Pictures",
        isOn: false,
      },
      {
        id: 2,
        name: "Videos",
        isOn: false,
      },
    ],
  },
  {
    groupName: "Posts",
    items: [
      {
        id: 1,
        name: "Enable comments",
        isOn: true,
      },
      {
        id: 2,
        name: "Allow comments only from subscribers who spent $1 or more",
        isOn: false,
      },
      {
        id: 3,
        name: "Show post tips sum",
        isOn: true,
      },
    ],
  },
];

export const privacyAndSafety = [
  {
    id: 1,
    name: "Blocked by country",
    path: "/dashboard/settings/privacy/block-country",
  },
  {
    id: 2,
    name: "Blocked by IP address",
    path: "/dashboard/settings/privacy/block-ip",
  },
];

export const subscriptionMenu = [
  {
    id: 1,
    name: "Add card",
    path: "/dashboard/subscriptions/add-card",
  },
  {
    id: 2,
    name: "Subscriptions Settings",
    path: "/dashboard/subscriptions/settings",
  },
  {
    id: 3,
    name: "Returned Payments",
    path: "",
  },
  {
    id: 4,
    name: "Statistics",
    path: "/dashboard/subscriptions/statistics",
  },
  {
    id: 5,
    name: "Statements",
    path: "",
  },
];

export const earningsSampleData = [
  { id: 1, earningsType: "Total", amount: "$0.00", net: "$0.00" },
  { id: 2, earningsType: "Subscriptions", amount: "$0.00", net: "$0.00" },
  { id: 3, earningsType: "Tips", amount: "$0.00", net: "$0.00" },
  { id: 4, earningsType: "Stream Tips", amount: "$0.00", net: "$0.00" },
  { id: 5, earningsType: "Posts", amount: "$0.00", net: "$0.00" },
  { id: 6, earningsType: "Messages", amount: "$0.00", net: "$0.00" },
  { id: 7, earningsType: "Streams", amount: "$0.00", net: "$0.00" },
  { id: 8, earningsType: "Referrals", amount: "$0.00", net: "$0.00" },
];

export const sampleStreakData = [
  {
    id: 1,
    name: "New Post",
    image: post,
  },
  {
    id: 2,
    name: "Add to Story",
    image: story,
  },
  {
    id: 3,
    name: "Reply your followers",
    image: post,
  },
  {
    id: 4,
    name: "Go Live",
    image: video,
  },
];
