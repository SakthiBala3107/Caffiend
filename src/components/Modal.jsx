import { Children } from "react";
import ReactDom from "react-dom";
const Modal = ({ children, handleCloseModal }) => {

  return ReactDom.createPortal(


    <div className="modal-container">
      <button className="modal-underlay" onClick={handleCloseModal} />

      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
