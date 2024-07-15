import React from "react";

const CircleChat = (props: any) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#ECEEFB" />
      <path
        d="M16.0002 23.2066C15.5402 23.2066 15.1068 22.9733 14.8002 22.5666L13.8002 21.2333C13.7802 21.2066 13.7002 21.1733 13.6668 21.1666H13.3335C10.5535 21.1666 8.8335 20.4133 8.8335 16.6666V13.3333C8.8335 10.3866 10.3868 8.83325 13.3335 8.83325H18.6668C21.6135 8.83325 23.1668 10.3866 23.1668 13.3333V16.6666C23.1668 19.6133 21.6135 21.1666 18.6668 21.1666H18.3335C18.2802 21.1666 18.2335 21.1933 18.2002 21.2333L17.2002 22.5666C16.8935 22.9733 16.4602 23.2066 16.0002 23.2066ZM13.3335 9.83325C10.9468 9.83325 9.8335 10.9466 9.8335 13.3333V16.6666C9.8335 19.6799 10.8668 20.1666 13.3335 20.1666H13.6668C14.0068 20.1666 14.3935 20.3599 14.6002 20.6333L15.6002 21.9666C15.8335 22.2733 16.1668 22.2733 16.4002 21.9666L17.4002 20.6333C17.6202 20.3399 17.9668 20.1666 18.3335 20.1666H18.6668C21.0535 20.1666 22.1668 19.0533 22.1668 16.6666V13.3333C22.1668 10.9466 21.0535 9.83325 18.6668 9.83325H13.3335Z"
        fill="#6F7076"
      />
      <path
        d="M19.3332 13.8333H12.6665C12.3932 13.8333 12.1665 13.6066 12.1665 13.3333C12.1665 13.0599 12.3932 12.8333 12.6665 12.8333H19.3332C19.6065 12.8333 19.8332 13.0599 19.8332 13.3333C19.8332 13.6066 19.6065 13.8333 19.3332 13.8333Z"
        fill="#6F7076"
      />
      <path
        d="M16.6665 17.1667H12.6665C12.3932 17.1667 12.1665 16.9401 12.1665 16.6667C12.1665 16.3934 12.3932 16.1667 12.6665 16.1667H16.6665C16.9398 16.1667 17.1665 16.3934 17.1665 16.6667C17.1665 16.9401 16.9398 17.1667 16.6665 17.1667Z"
        fill="#6F7076"
      />
    </svg>
  );
};

export default CircleChat;
