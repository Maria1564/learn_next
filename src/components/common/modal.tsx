"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

type CustomModalProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
};

const CustomModal = ({
  onClose,
  isOpen,
  title,
  children,
  size = "xs",
}: CustomModalProps) => {
  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-black">
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
