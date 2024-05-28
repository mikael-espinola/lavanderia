import Link from "next/link";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";

const WAButton = () => {
  return (
    <div className="flex items-center justify-center fixed bottom-3 right-2 rounded-full p-[0.5em] bg-green-50 ">
      <Link href="https://wa.me/558422260500">
        <span className="text-green-400 hover:text-green-600 text-5xl">
          <FaWhatsapp />
        </span>
      </Link>
    </div>
  );
};

export default WAButton;
