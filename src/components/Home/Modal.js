"use client";
import React, { useEffect, useState } from "react";
import modalImage from "../../asstes/gorur-ghash-home/PUJA-HAUL (1).png";
import Image from "next/image";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      {/* <button
        onClick={toggleModal}
        className="px-4 py-2 bg-pink-500 text-white rounded"
      >
        Show Promotion
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg overflow-hidden  mx-auto p-6">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal content */}
            <div>
              <Image src={modalImage} alt="modalImage"></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
