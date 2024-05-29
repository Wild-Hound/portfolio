"use client";

import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/lib/animations/pageTransation";
import Image from "next/image";
import SectionBox from "@/components/SectionBox";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  const pathname = usePathname();

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
              <div className="input cursor-pointer font-parah font-normal">
                https://daisyui.com
              </div>
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
            King game
          </div>

          <div className="grid gap-4 mt-auto">
            <SectionBox title="story">
              <div className="font-parah text-[1.2rem]">
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil)
              </div>
            </SectionBox>

            <SectionBox title="Technologies">
              <div className="badge badge-lg badge-outline">React</div>
              <div className="badge badge-lg badge-primary badge-outline">
                Typescript
              </div>
              <div className="badge badge-lg badge-secondary badge-outline">
                Redux
              </div>
              <div className="badge badge-lg badge-accent badge-outline">
                NextJS
              </div>
            </SectionBox>
            <SectionBox title="Links">
              <button className="btn w-[7rem]">
                Live
                <FaGlobe className="ml-2 text-xl" />
              </button>
              <button className="btn w-[8rem]">
                Github
                <FaGithub className="ml-2 text-xl" />
              </button>
            </SectionBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
