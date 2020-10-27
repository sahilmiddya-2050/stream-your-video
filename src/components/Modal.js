import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClick, header, content, actions }) => {
  return ReactDOM.createPortal(
    <div onClick={onClick} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
