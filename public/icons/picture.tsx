import React from "react";

const Picture = (props: any) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7499 20.8541H8.24992C3.27242 20.8541 1.14575 18.7274 1.14575 13.7499V8.24992C1.14575 3.27242 3.27242 1.14575 8.24992 1.14575H13.7499C18.7274 1.14575 20.8541 3.27242 20.8541 8.24992V13.7499C20.8541 18.7274 18.7274 20.8541 13.7499 20.8541ZM8.24992 2.52075C4.02409 2.52075 2.52075 4.02409 2.52075 8.24992V13.7499C2.52075 17.9758 4.02409 19.4791 8.24992 19.4791H13.7499C17.9758 19.4791 19.4791 17.9758 19.4791 13.7499V8.24992C19.4791 4.02409 17.9758 2.52075 13.7499 2.52075H8.24992Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M8.25008 9.85417C6.85675 9.85417 5.72925 8.72667 5.72925 7.33333C5.72925 5.94 6.85675 4.8125 8.25008 4.8125C9.64341 4.8125 10.7709 5.94 10.7709 7.33333C10.7709 8.72667 9.64341 9.85417 8.25008 9.85417ZM8.25008 6.1875C7.61758 6.1875 7.10425 6.70083 7.10425 7.33333C7.10425 7.96583 7.61758 8.47917 8.25008 8.47917C8.88258 8.47917 9.39592 7.96583 9.39592 7.33333C9.39592 6.70083 8.88258 6.1875 8.25008 6.1875Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
    <path
      d="M2.44762 18.0584C2.22762 18.0584 2.00762 17.9484 1.87928 17.7559C1.66845 17.4443 1.75095 17.0134 2.07178 16.8026L6.59095 13.7684C7.58095 13.0993 8.94678 13.1818 9.84512 13.9426L10.1476 14.2084C10.6059 14.6026 11.3851 14.6026 11.8343 14.2084L15.6476 10.9359C16.6193 10.1018 18.1501 10.1018 19.131 10.9359L20.6251 12.2193C20.9093 12.4668 20.9459 12.8976 20.6985 13.1909C20.4509 13.4751 20.0201 13.5118 19.7268 13.2643L18.2326 11.9809C17.7743 11.5868 16.9951 11.5868 16.5368 11.9809L12.7235 15.2534C11.7518 16.0876 10.221 16.0876 9.24012 15.2534L8.93762 14.9876C8.51595 14.6301 7.81928 14.5934 7.35178 14.9143L2.83262 17.9484C2.71345 18.0218 2.57595 18.0584 2.44762 18.0584Z"
      fill={props.isActive ? "#2599F6" : "#8D8E96"}
    />
  </svg>
);

export default Picture;
