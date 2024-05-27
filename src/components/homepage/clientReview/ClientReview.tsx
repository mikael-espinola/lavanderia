import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

const ClientReview = () => {
  const data = [
    {
      id: 1,
      name: "Alice Silva",
      message: "Excelente serviço! Minhas roupas ficaram impecáveis.",
    },
    {
      id: 2,
      name: "Bob Santos",
      message: "Rápido e eficiente. Recomendo a todos!",
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      message: "Atendimento muito bom e preços justos.",
    },
    {
      id: 4,
      name: "Diana Costa",
      message: "A melhor lavanderia da cidade! Muito satisfeita.",
    },
    {
      id: 5,
      name: "Eva Pereira",
      message:
        "Minhas roupas delicadas foram tratadas com muito cuidado. Adorei!",
    },
  ];

  return (
    <>
      {data.map((client) => (
        <div
          key={client.id}
          className="bg-fuchsia-300 h-[70%] w-[15em] flex justify-center flex-col mx-2"
        >
          <div className="p-2">
            <p className="flex justify-center text-5xl">
              <CgProfile />
            </p>
            <p className="text-center my-3">{client.name}</p>
          </div>
          <span className="text-center text-[13px] p-2">{client.message}</span>
        </div>
      ))}
    </>
  );
};

export default ClientReview;
