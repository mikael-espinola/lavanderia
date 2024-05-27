import Image from "next/image";
import React from "react";

import Logo from "@/assets/logo.svg";
import Link from "next/link";
import MenuItem from "../menuItem/MenuItem";

const Header = () => {
  return (
    <header className="flex bg-fuchsia-400">
      <div className="flex w-full h-20 justify-between pr-16 pl-16">
        <div className="object-cover w-[100px] flex items-center">
          <Image src={Logo} alt="logo lavanderia" />
        </div>
        <ul className="flex w-80 items-center justify-evenly">
          <MenuItem name={"início"} />
          <MenuItem name={"serviços"} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
