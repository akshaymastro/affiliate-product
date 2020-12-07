import React, { useState } from "react";

import { Card } from "semantic-ui-react";

function CommonCard(props) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{props.header}</Card.Header>

          <Card.Description>
            {props.description}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}

export default CommonCard;
