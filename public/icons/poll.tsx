import React from "react";

const Poll = (props: any) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.26736 16.6378H5.79321C5.41738 16.6378 5.10571 16.3261 5.10571 15.9503V11.2569C5.10571 10.3036 5.88487 9.52441 6.8382 9.52441H9.26736C9.64319 9.52441 9.95486 9.83608 9.95486 10.2119V15.9411C9.95486 16.3261 9.64319 16.6378 9.26736 16.6378ZM6.48071 15.2628H8.57986V10.9086H6.8382C6.6457 10.9086 6.48071 11.0644 6.48071 11.266V15.2628V15.2628Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M12.7325 16.6376H9.2583C8.88247 16.6376 8.5708 16.3259 8.5708 15.9501V7.09506C8.5708 6.14173 9.34995 5.36255 10.3033 5.36255H11.6966C12.65 5.36255 13.4291 6.14173 13.4291 7.09506V15.9501C13.42 16.3259 13.1175 16.6376 12.7325 16.6376ZM9.95495 15.2626H12.0541V7.09506C12.0541 6.90256 11.8983 6.73755 11.6966 6.73755H10.3033C10.1108 6.73755 9.9458 6.8934 9.9458 7.09506V15.2626H9.95495Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M16.2068 16.6377H12.7327C12.3568 16.6377 12.0452 16.326 12.0452 15.9502V11.7793C12.0452 11.4035 12.3568 11.0918 12.7327 11.0918H15.1618C16.1152 11.0918 16.8943 11.871 16.8943 12.8243V15.9502C16.8943 16.326 16.5918 16.6377 16.2068 16.6377ZM13.4202 15.2627H15.5193V12.8243C15.5193 12.6318 15.3635 12.4668 15.1618 12.4668H13.4202V15.2627V15.2627Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M13.7499 20.8541H8.24992C3.27242 20.8541 1.14575 18.7274 1.14575 13.7499V8.24992C1.14575 3.27242 3.27242 1.14575 8.24992 1.14575H13.7499C18.7274 1.14575 20.8541 3.27242 20.8541 8.24992V13.7499C20.8541 18.7274 18.7274 20.8541 13.7499 20.8541ZM8.24992 2.52075C4.02409 2.52075 2.52075 4.02409 2.52075 8.24992V13.7499C2.52075 17.9758 4.02409 19.4791 8.24992 19.4791H13.7499C17.9758 19.4791 19.4791 17.9758 19.4791 13.7499V8.24992C19.4791 4.02409 17.9758 2.52075 13.7499 2.52075H8.24992Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
  </svg>
);

export default Poll;
