import React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="mx-8">
      <Image
        src={logo}
        alt="logo"
        className="object-contain"
        width={216}
        height={96}
      />
    </div>
  );
};

export default Navbar;
