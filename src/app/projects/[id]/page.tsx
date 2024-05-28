"use client";

import TopBar from "@/components/TopBar";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animations/pageTransation";

const page = () => {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(() => router.back());
  };

  return (
    <div>
      <TopBar />
      <div className="flex flex-row">
        <div
          className="fixed bg-base-100 rounded-full cursor-pointer p-3 top-32 left-12"
          onClick={handleClick}
        >
          <IoMdArrowRoundBack className="text-[2.5rem]" />
        </div>
        <div className="min-h-svh w-1/2 bg-orange-300 flex justify-center items-center text-center text-black text-lg font-bold">
          Fuck you nigga
        </div>
        <div className="w-1/2">
          <div className="font-secondary font-semibold text-[5.5rem] mt-20 ml-10">
            Effect 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
