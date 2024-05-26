import React from "react";
import Link from "next/link";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const SideBar: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/newpage">New Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
