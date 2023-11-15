import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-20 m-40">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex items-center mx-20">
        <h1 className="mx-3">Name</h1>

        <div className="dropdown">
          <CgProfile tabIndex={0} className="cursor-pointer" />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box w-52 -left-20"
          >
            <li>
              <Link className="justify-center" href="/stats">
                Stats
              </Link>
            </li>
            <li>
              <Link className="justify-center" href="/user_settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
