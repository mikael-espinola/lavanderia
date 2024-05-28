"use client";
import React, { useState } from "react";
import ServicesItem from "./serviceItem/ServicesItem";
import ButtonTable from "../buttonTable/ButtonTable";
import ModalTable from "../modalTable/ModalTable";

const ServicesPage = () => {
  const data = [
    {
      id: 1,
      service_name: "cesto de roupas",
      unity: "25 unidades",
      price: "100,00",
    },
    {
      id: 2,
      service_name: "roupas unitárias",
      price: "4,00",
    },
    {
      id: 3,
      service_name: "roupas sociais",
      price: "9,99",
    },
    {
      id: 4,
      service_name: "estofados",
      price: "a consultar",
    },
    {
      id: 5,
      service_name: "Vestidos",
      price: "29,99",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex py-2 min-h-[500px] flex-col ">
      <ul className="flex gap-3 h-[100%] mt-3 justify-center w-[100%]">
        {data.map((item) => (
          <ServicesItem item={item} />
        ))}
      </ul>
      <div className="flex justify-center my-10">
        <ButtonTable setIsOpen={setIsOpen} />
      </div>
      <ModalTable isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ServicesPage;
