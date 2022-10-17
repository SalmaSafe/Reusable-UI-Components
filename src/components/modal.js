//suitable for sending alerts in your application

import React, { useState, useEffect } from "react";




function Modal(props) {
  const [message] = useState(props.message);
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">{message}</section>
    </div>
  );
}
export default Modal;

//close the modal, we’d need to set the show state to false. We can do that by calling a setTimeout() function in the useEffect() hook