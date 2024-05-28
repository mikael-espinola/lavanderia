import React from "react";

interface Props {
  setIsOpen: (toggle: boolean) => void;
}

const ButtonTable = ({ setIsOpen }: Props) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className="bg-purple-200 text-black border-2 rounded-lg p-2"
    >
      <span className="capitalize">tabela</span> de preços
    </button>
  );
};

export default ButtonTable;
