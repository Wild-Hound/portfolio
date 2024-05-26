import React from "react";

interface Props {
  bg_color?: string;
}

const ProjectCard: React.FC<Props> = ({ bg_color }) => {
  return (
    <div
      className={`flex justify-center items-center text-center h-[40rem] text-white text-[3rem] font-bold cursor-pointer`}
      style={{ backgroundColor: bg_color }}
    >
      ProjectCard
    </div>
  );
};

export default ProjectCard;
