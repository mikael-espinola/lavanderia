import React from "react";
import ImageFake from "@/assets/laundry.png";
import ImageFake2 from "@/assets/estofado.png";
import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

interface Props {
  item: {
    id: number;
    service_name: string;
    price: string;
  };
}

const ServicesItem = ({ item }: Props) => {
  return (
    <li key={item.id} className="p-4 bg-purple-300 rounded ">
      <h2 className="text-center uppercase p-2">{item.service_name}</h2>
      {item.id === 4 ? (
        <>
          <div className="w-[180px] py-3">
            <Image src={ImageFake2} alt="test" />
          </div>
          <div className="flex gap-2 justify-center">
            <span className="capitalize">{item.price}</span>
          </div>
        </>
      ) : (
        <>
          <div className="w-[180px] py-3">
            <Image src={ImageFake} alt="test" />
          </div>
          <div className="flex gap-2">
            <p>
              <span className="capitalize">por</span> apenas:{" "}
            </p>
            <span>R$ {item.price}</span>
            <span className="text-[10px] flex items-center">cada</span>
          </div>
        </>
      )}
      <Link
        target="_blank"
        href={"https://wa.me/558422260500"}
        className="flex justify-center w-[100%] bg-green-400 rounded py-2 my-2"
      >
        <span className="capitalize flex items-center gap-3">
          agende agora <FaWhatsapp />
        </span>
      </Link>
    </li>
  );
};

export default ServicesItem;
