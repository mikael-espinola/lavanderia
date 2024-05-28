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
    <div className="flex w-full h-[100%] p-4">
      {data.map((client) => (
        <div
          key={client.id}
          className="bg-purple-300  w-[35%] flex justify-center flex-col mx-2"
        >
          <div className="p-2 ">
            <p className="flex justify-center text-5xl">
              <CgProfile />
            </p>
            <p className="text-center my-3">{client.name}</p>
          </div>
          <span className="flex justify-center items-center text-center h-[100%] w-[100%] text-[13px] p-2">
            {client.message}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClientReview;
