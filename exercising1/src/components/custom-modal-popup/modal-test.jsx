import React, { useState } from "react";
import Modal from "./modal";

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(!showModalPopup);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        <Modal
        id={"custom-id"}
          onClose={onClose}
          body={<div>Customized body</div>}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
        />
      }
    </div>
  );
}

export default ModalTest;
