"use client";
import React from "react";
import { animatePageOut } from "../lib/animations/pageTransation";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {}

const ProjectCard: React.FC<Props> = () => {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(() => router.push("/projects/1"));
  };
  return (
    <div onClick={handleClick}>
      <div
        className={`flex justify-center items-center text-center h-[40rem] text-white text-[3rem] font-bold cursor-pointer relative filter-saturate-blur`}
      >
        <div className="z-10 glass-bg">
          <div className="text-[3rem] font-secondary bg-base-100 py-3 px-8">
            Project
          </div>
        </div>
        <Image
          src="/photo1.avif"
          layout="fill"
          objectFit="fill"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
