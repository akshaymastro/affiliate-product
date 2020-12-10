import React, { useState } from "react";

import { Card,Image } from "semantic-ui-react";

function CommonCard(props) {
  return (
    <>
      <Card>
        <Image
          src={props.image}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.header}</Card.Header>

          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}

export default CommonCard;
