import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const Items = () => {
  const data = [
    {
      id: 0,
      item: "cestos",
    },
    {
      id: 1,
      item: "roupas unitárias",
    },
    {
      id: 2,
      item: "roupas delicadas",
    },
    {
      id: 3,
      item: "estofados",
    },
    {
      id: 4,
      item: "plus",
    },
  ];
  return (
    <>
      {data.map((itemObj) =>
        itemObj.id === 4 ? (
          <li className=" p-1 rounded-lg ">
            <p className="text-[18px]">
              <BsPlusCircleDotted />
            </p>
          </li>
        ) : (
          <li className="bg-purple-400 p-[0.3em] rounded-lg bg-opacity-50">
            <p className="text-[12px] capitalize">{itemObj.item}</p>
          </li>
        )
      )}
    </>
  );
};

export default Items;
