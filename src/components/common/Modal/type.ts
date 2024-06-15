import React, { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}
