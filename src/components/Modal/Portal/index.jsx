import ReactDOM from "react-dom";

export const PortalModal = ({ children }) => {
  const portal = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, portal);
};
