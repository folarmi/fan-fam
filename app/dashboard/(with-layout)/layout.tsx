"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Typography from "../../components/forms/Typography";
import VerticalCarousel from "../../components/VerticalCarousel";
import { useMutation } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { toast } from "react-toastify";
import withAuth from "@/app/hoc/withAuth";
import Sidebar from "@/app/components/molecules/Sidebar";
import { useAppSelector } from "@/app/lib/hook";
import { RootState } from "@/app/lib/store";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [isUserSubscribed] = useState(true);
  const { isCreator } = useAppSelector((state: RootState) => state.auth);

  const logOutMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("auth/logout");
      return response;
    },
    onSuccess: (data) => {
      if (data?.status === 200) {
        router.push("/");
        localStorage.clear();
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.data?.message);
    },
  });

  return (
    <div className="flex justify-center">
      <Sidebar />
      <main className="w-[50%]">{children}</main>

      <div className="w-[25%] px-8 mt-20">
        {isUserSubscribed && (
          <div className="">
            {!isCreator && (
              <p className="font-medium text-sm text-grey_800">SUGGESTIONS</p>
            )}
            <VerticalCarousel />
          </div>
        )}

        <div
          className={`flex items-center justify-between mt-3 ${
            !isUserSubscribed ? "h-[674px]" : ""
          }`}
        >
          <Typography variant="labelOne" className="text-grey_400">
            Terms of service
          </Typography>
          <div className="bg-grey_300 w-[2px] h-[2px]"></div>
          <Typography variant="labelOne" className="text-grey_400">
            Privacy
          </Typography>
          <div className="bg-grey_300 w-[2px] h-[2px]"></div>
          <Typography variant="labelOne" className="text-grey_400">
            Cookie notice
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardLayout);
