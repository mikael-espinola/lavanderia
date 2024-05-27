import Image from "next/image";
import React from "react";
import ServicesItem from "./serviceItem/ServicesItem";

const ServicesPage = () => {
  const data = [
    {
      id: 1,
      service_name: "cesto de roupas",
      price: "59,99",
    },
    {
      id: 2,
      service_name: "roupas unitárias",
      price: "7,99",
    },
    {
      id: 3,
      service_name: "roupas sociais",
      price: "29,99",
    },
    {
      id: 4,
      service_name: "estofados",
      price: "a consultar",
    },
  ];
  return (
    <div className="flex py-2 ">
      <ul className="flex justify-evenly w-[100%]">
        {data.map((item) => (
          <ServicesItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
