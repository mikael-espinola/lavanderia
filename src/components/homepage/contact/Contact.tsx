import Link from "next/link";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-[50%] h-[300px] flex flex-col items-center p-2">
      <h1 className=" text-xl text-center mb-5">Entre em contato conosco</h1>
      <div className="w-[100%] h-[100%] flex gap-4 justify-center items-center">
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <Link
            className="flex items-center gap-1"
            href="https://wa.me/558422260500"
            target="_blank"
          >
            <FaWhatsapp className="text-3xl text-green-600" />
          </Link>
        </p>
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <Link
            className="flex items-center gap-1"
            href="https://instagram.com"
            target="_blank"
          >
            <FaInstagram className="text-3xl" />
          </Link>
        </p>
        <p className="p-1 text-[16px] flex gap-1 items-center">
          <Link
            className="flex items-center gap-1"
            href="mailto:mluizabaraujo@hotmail.com"
          >
            <SiGmail className="text-3xl text-red-800" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
