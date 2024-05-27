"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  animatePageIn,
  instantAnimateOut,
} from "../lib/animations/pageTransation";

interface Props {
  children: React.ReactNode;
}

const template: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();

  const showVerticalbarAnimation = () => {
    console.log(pathname);
    if (pathname.includes("projects")) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log("yoyo");
    if (showVerticalbarAnimation()) {
      animatePageIn();
    } else {
      instantAnimateOut();
    }
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default template;
