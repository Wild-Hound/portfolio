import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const SectionBox: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="m-6">
      <div className="font-secondary text-3xl font-bold text-white mb-2">
        {title}
      </div>
      <div className="bg-neutral p-6  rounded-md flex gap-3">{children}</div>
    </div>
  );
};

export default SectionBox;
