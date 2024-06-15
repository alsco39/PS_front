import { useEffect } from "react";
import * as _ from "./style";
import { ModalProps } from "./type";

function Modal({ isOpen, setModal, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <_.BackDrop
          onClick={() => {
            setModal(false);
          }}
        >
          <_.Container onClick={(e) => e.stopPropagation()}>
            {children}
          </_.Container>
        </_.BackDrop>
      )}
    </>
  );
}

export default Modal;
