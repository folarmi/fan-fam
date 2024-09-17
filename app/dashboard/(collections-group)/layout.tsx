"use client";

import React from "react";
import withAuth from "@/app/hoc/withAuth";
import Sidebar from "@/app/components/molecules/Sidebar";

const MessagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex  justify-center">
      <Sidebar />
      <main className="w-[75%]">{children}</main>
    </div>
  );
};

export default withAuth(MessagesLayout);
