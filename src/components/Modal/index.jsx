import React, { useEffect } from "react";

import { PortalModal } from "./Portal";

import { Overlay, Dialog } from "./styles";

export const Modal = ({ children, open, onClose }) => {
  //fechar modal ao apertar esc, cod 27 é esc
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }

    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  //fechar ao clicar fora da modal
  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <PortalModal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </PortalModal>
  );
};
