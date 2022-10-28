import React from "react";

const Modal = ({ modalVisible, setModalVisible }) => {
  return (
    <div className={`overlay ${modalVisible ? "" : "hidden"}`}>
      <div className="modal">
        <div className="modal_header">
          <div className="modal_title">модальное окно</div>
          <div onClick={() => setModalVisible(false)} className="modal_close">
            &times;
          </div>
        </div>
        <div className="modal_content">
          <svg>
            <title />
            <path />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
