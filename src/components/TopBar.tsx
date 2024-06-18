import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import SideBar from "./SideBar";
import styles from "../styles/topbar.module.scss";

const { glitch } = styles;

const Topbar = () => {
  return (
    <div className="navbar h-24 p-8 bg-base-100 relative">
      <div className="flex-none ">
        <SideBar>
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <LiaBarsSolid className="text-4xl" />
          </label>
        </SideBar>
      </div>
      <div className="flex-1 w-full">
        <div className={`${glitch} m-auto`} data-text="Yasin Khan">
          Yasin Khan
        </div>
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
