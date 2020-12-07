import React from "react";
import { Button, Image, Modal, Grid } from "semantic-ui-react";

function ModalExampleModal(props) {
  return (
    <Modal onClose={props.OpenModal} onOpen={props.OpenModal} open={props.open}>
      <Modal.Content>{props.children}</Modal.Content>
    </Modal>
  );
}

export default ModalExampleModal;
