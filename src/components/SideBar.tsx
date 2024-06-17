import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const SideBar: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="drawer z-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="text-3xl mt-[4rem]">Links</div>
            <ul className="mt-4">
              <li className="text-xl">
                <Link href="/">Portfolio</Link>
              </li>
              {/* <li className="text-xl">
                <Link href="/">Blogs</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
