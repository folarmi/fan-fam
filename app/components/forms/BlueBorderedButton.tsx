import React from "react";
import Typography from "./Typography";
import Link from "next/link";

type BlueBorderedButtonProps = {
  text: string;
  className?: string;
};

const BlueBorderedButton = ({ text, className }: BlueBorderedButtonProps) => {
  return (
    <div
      className={`border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white ${className}`}
    >
      <Typography variant="subtitle3" className="text-blue_500">
        {text}
      </Typography>
    </div>
  );
};

export default BlueBorderedButton;
