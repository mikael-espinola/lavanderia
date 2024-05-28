import Image from "next/image";
import React from "react";
import Modal from "react-modal";

import { RiCloseLargeFill } from "react-icons/ri";

import Table from "@/assets/pricing_table.jpg";

interface Props {
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
}

const ModalTable = ({ isOpen, setIsOpen }: Props) => {
  const customStyles = {
    content: {
      padding: "1em",
      width: "65%",
      margin: "0 auto",
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="flex absolute right-4 top-3">
        <button onClick={() => setIsOpen(false)}>
          <RiCloseLargeFill className="text-[25px]" />
        </button>
      </div>
      <div className="flex justify-center">
        <Image className="h-[100%] max-w-96" alt="pricing table" src={Table} />
      </div>
    </Modal>
  );
};

export default ModalTable;
