"use client"

import CustomModal from "@/components/common/modal";
import { RegistrationForm } from "@/forms/registrationForm";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт">
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
};

export default RegisterModal;
