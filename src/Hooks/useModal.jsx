import React, { useState, useEffect } from "react";

export const useModal = (initualValue) => {
  const [isOpen, setIsOpen] = useState(initualValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
