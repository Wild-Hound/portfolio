"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/lib/animations/pageTransation";
import Image from "next/image";
import SectionBox from "@/components/SectionBox";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/Models/projects";

interface Props {
  params: { id: string };
}

const page: React.FC<Props> = ({ params }) => {
  const router = useRouter();

  const [projectData, setProjectData] = useState<(typeof projects)[0]>();

  useLayoutEffect(() => {
    const projectData = projects?.filter(
      (project) => `${project?.id}` === params?.id
    );

    if (!projectData?.[0]) {
      router.push(`/`);
      return;
    }

    setProjectData(projectData[0]);
  }, []);

  const handleClick = () => {
    animatePageOut(() => router.back());
  };

  return (
    <div>
      <div className="flex flex-row ">
        <div
          className="fixed bg-base-100 rounded-full cursor-pointer p-3 top-24 left-12 z-10"
          onClick={handleClick}
        >
          <IoMdArrowRoundBack className="text-[2.5rem]" />
        </div>
        <div className="min-h-svh w-2/3 flex justify-center items-center text-center text-black text-lg font-bold relative">
          <div className="mockup-browser bg-base-300 w-full h-full rounded-none rounded-t-xl">
            <div className="mockup-browser-toolbar text-white">
              <a
                href={projectData?.live}
                className="input cursor-pointer font-parah font-normal"
              >
                {projectData?.live}
              </a>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200 relative h-full">
              <Image
                src="/fausto-montanari4.gif"
                layout="fill"
                objectFit="fill"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 min-w-[32rem] h-[100vh] overflow-y-scroll">
          <div className="font-primary font-semibold text-[5.5rem] mt-20 ml-10">
            {projectData?.name}
          </div>

          <div className="grid gap-4 mt-auto">
            <SectionBox title="story">
              <div className="font-parah text-[1.2rem]">
                {projectData?.story}
              </div>
            </SectionBox>

            <SectionBox title="Technologies">
              {projectData?.tech?.map((tech, index) => {
                return (
                  <div
                    className="badge badge-lg badge-outline"
                    style={{ color: `${tech?.color}` }}
                    key={index}
                  >
                    {tech?.name}
                  </div>
                );
              })}
            </SectionBox>
            <SectionBox title="Links">
              <a
                href={projectData?.live}
                target="_blank"
                className="btn w-[7rem]"
              >
                Live
                <FaGlobe className="ml-2 text-xl" />
              </a>
              <a
                href={projectData?.github}
                target="_blank"
                className="btn w-[8rem]"
              >
                Github
                <FaGithub className="ml-2 text-xl" />
              </a>
            </SectionBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
