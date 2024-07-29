import React from "react";

const Smile = (props: any) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer"
  >
    <path
      d="M11 0C4.93461 0 0 4.93461 0 11C0 17.0654 4.93461 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93461 17.0655 0 11 0ZM11 20.8108C8.30526 20.8108 5.86092 19.7185 4.08611 17.9537C3.37394 17.2458 2.77406 16.4332 2.30721 15.5441C1.59368 14.1848 1.18921 12.6388 1.18921 11C1.18921 5.59031 5.59031 1.18921 11 1.18921C13.5659 1.18921 15.9045 2.17981 17.6546 3.79817C18.5619 4.63716 19.3112 5.64471 19.8515 6.77089C20.4661 8.05218 20.8108 9.48659 20.8108 11C20.8108 16.4097 16.4097 20.8108 11 20.8108Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M7.40771 9.73632C8.06449 9.73632 8.59692 9.2039 8.59692 8.54712C8.59692 7.89034 8.06449 7.35791 7.40771 7.35791C6.75093 7.35791 6.21851 7.89034 6.21851 8.54712C6.21851 9.2039 6.75093 9.73632 7.40771 9.73632Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M14.7659 9.73632C15.4226 9.73632 15.9551 9.2039 15.9551 8.54712C15.9551 7.89034 15.4226 7.35791 14.7659 7.35791C14.1091 7.35791 13.5767 7.89034 13.5767 8.54712C13.5767 9.2039 14.1091 9.73632 14.7659 9.73632Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M10.979 17.0944C13.2797 17.0944 15.4846 15.9178 16.747 13.9643L15.7481 13.3188C14.5889 15.1127 12.4685 16.1138 10.3452 15.8688C8.69057 15.678 7.16044 14.7247 6.25196 13.3188L5.25317 13.9643C6.35245 15.6655 8.20508 16.8191 10.2089 17.0502C10.4661 17.0799 10.723 17.0944 10.979 17.0944Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
  </svg>
);

export default Smile;
