import Link from "next/link";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-[50%] h-[300px] flex flex-col items-center p-2">
      <h1 className=" text-xl text-center mb-5">Entre em contato conosco</h1>
      <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <FaWhatsapp />
          <Link
            className="flex items-center gap-1"
            href="https://wa.me/558422260500"
            target="_blank"
          >
            84 2226-0500 <LuExternalLink />
          </Link>
        </p>
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <SiGmail />
          <Link
            className="flex items-center gap-1"
            href="mailto:email@email.com"
          >
            email@email.com <LuExternalLink />
          </Link>
        </p>
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <FaInstagram />
          <Link
            className="flex items-center gap-1"
            href="https://instagram.com"
            target="_blank"
          >
            Lavanderia Iasmim <LuExternalLink />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
