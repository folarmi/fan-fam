import {
  engagementMessagesStories,
  engagementMessagesSummary,
  engagementSummary,
  reachProfileSummary,
  reachPromotionsSummary,
} from "../data";

export const phoneRegex =
  // /^(\+\d{1,3}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  /^(?=.{1,14}$)(\+\d{1,3}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent pasting
};

export const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent copying
};

export const handleCut = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent cutting
};

export const engagementTypeData = (type: string) => {
  let typeData;
  if (type === "Posts") typeData = engagementSummary;
  else if (type === "Messages") typeData = engagementMessagesSummary;
  else if (type === "Streaming") typeData = engagementMessagesSummary;
  else if (type === "Stories") typeData = engagementMessagesStories;

  return typeData;
};

export const reachTypeData = (type: string) => {
  let typeData;
  if (type === "Profile Visitors") typeData = reachProfileSummary;
  else if (type === "Promotions" || "Trial Links")
    typeData = reachPromotionsSummary;

  return typeData;
};

export const statTimeLine = (type: string | undefined) => {
  let name;
  if (type === "Tips") name = "1 Story, $0.00";
  else if (type === "Views") name = "1 Story, $0.00";
  else if (type === "Likes") name = "1 Story, 0 Likes";
  else if (type === "Comments") name = "1 Story, 0 Comments";

  return name;
};
