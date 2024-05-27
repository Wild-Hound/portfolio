import Link from "next/link";
import React from "react";

interface Props {
  bg_color?: string;
}

const ProjectCard: React.FC<Props> = ({ bg_color }) => {
  return (
    <Link href="/projects/1">
      <div
        className={`flex justify-center items-center text-center h-[40rem] text-white text-[3rem] font-bold cursor-pointer`}
        style={{ backgroundColor: bg_color }}
      >
        ProjectCard
      </div>
    </Link>
  );
};

export default ProjectCard;
