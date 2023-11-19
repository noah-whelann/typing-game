import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png"
import { PersonRounded } from '@mui/icons-material';
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import "./Header.css"

const Header = async () => {

  const session = await getServerSession(authOptions);

  return (
    <div className="header">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="user">
        <div className="dropdown">
        <p id="username">{session?.user?.name}</p>
          <PersonRounded tabIndex={0} className="cursor-pointer" id="userIcon"/>
          <ul id="dropdownbox"
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-md bg-secondary rounded-box w-52 -left-20"
          >
            <li>
              <Link className="justify-center" href="/stats">
                stats
              </Link>
            </li>
            <li>
              <Link className="justify-center" href="/user_settings">
                settings
              </Link>
            </li>
            <li>
              <Link className="justify-center" href="/auth/signout">
                sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
