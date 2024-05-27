import React from "react";
import LaundryImage from "@/assets/laundry.png";
import Image from "next/image";
import Link from "next/link";

import Items from "./items/Items";
import ClientReview from "./clientReview/ClientReview";

const Homepage = () => {
  return (
    <>
      <section className="mx-auto flex justify-center items-center pt-2">
        <div className="mr-2 max-w-[440px] bg-white bg-opacity-25 rounded-lg p-5">
          <h1 className="text-2xl">Bem-vinda(o) à Lavanderia Iasmim</h1>
          <p className="text-sm pt-1 pl-3">
            Onde suas roupas recebem o cuidado e a higienização que merecem.
          </p>
          <h2 className="text-xl py-4">
            Oferecemos o melhor preço de lavangens em Natal/RN e região
          </h2>
          <ul className="flex justify-evenly">
            <Items />
          </ul>
        </div>
        <div className="w-[350px]">
          <Image src={LaundryImage} alt="laundry picture" />
        </div>
      </section>
      <section className="flex justify-center p-2">
        <Link
          className="bg-fuchsia-400 p-3 rounded-2xl hover:text-white hover:bg-fuchsia-800 hover:transition-colors"
          href="/services"
        >
          <span>Verifique agora nossas ofertas</span>
        </Link>
      </section>
      <section className="w-full bg-white bg-opacity-20 h-[20em] flex items-center justify-center p-3">
        <ClientReview />
      </section>
    </>
  );
};

export default Homepage;
