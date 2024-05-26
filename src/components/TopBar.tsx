import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import SideBar from "./SideBar";

const Topbar = () => {
  return (
    <div className="navbar h-24 p-8">
      <div className="flex-none">
        <SideBar>
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <LiaBarsSolid className="text-4xl" />
          </label>
        </SideBar>
      </div>
      <div className="flex-1 w-full">
        <a className="text-center text-4xl w-full font-bold">Yasin Khan</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost text-4xl">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
