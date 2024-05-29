"use client";
import React from "react";
import { animatePageOut } from "../lib/animations/pageTransation";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
}

const ProjectCard: React.FC<Props> = ({ imgSrc, title }) => {
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
          <div className="text-[3rem] font-secondary bg-base-100 py-2 px-6">
            {title}
          </div>
        </div>
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
