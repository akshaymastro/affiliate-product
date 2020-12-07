import React from "react";
import { Button, Table } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Subs() {
  return (
    <>
      <Sidenav>
        <div className="message">
          <p className="mail">
            YOU ARE CURRENTLY OPTED-IN TO CORRESPONDENCES FROM ALL ADVERTISERS
          </p>
        </div>
      </Sidenav>
    </>
  );
}

export default Subs;
