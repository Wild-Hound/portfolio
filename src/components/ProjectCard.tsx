"use client";
import React from "react";
import { animatePageOut } from "../lib/animations/pageTransation";
import { useRouter } from "next/navigation";

interface Props {
  bg_color?: string;
}

const ProjectCard: React.FC<Props> = ({ bg_color }) => {
  const router = useRouter();

  const handleClick = () => {
    console.log("click");
    animatePageOut("/projects/1", router);
  };
  return (
    <div onClick={handleClick}>
      <div
        className={`flex justify-center items-center text-center h-[40rem] text-white text-[3rem] font-bold cursor-pointer`}
        style={{ backgroundColor: bg_color }}
      >
        ProjectCard
      </div>
    </div>
  );
};

export default ProjectCard;
