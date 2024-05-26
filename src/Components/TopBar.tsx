import React from "react";
import { FaGithub } from "react-icons/fa";
import SideBar from "./SideBar";

const Topbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <SideBar>
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </SideBar>
      </div>
      <div className="flex-1 w-full">
        <a className="text-center text-xl w-full font-bold">Yasin Khan</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost text-xl">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
