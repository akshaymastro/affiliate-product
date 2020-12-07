import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Netwrk() {
  return (
    <>
      <Sidenav>
        <Container className="networking">
          <div className="network-div">
            <h4>Network Profile</h4>
            <span className="">Edit</span>
          </div>
          <div className="general">General</div>
          <p>
            Make a great first impression: state your strengths, your business
            goals, and relevant statistics about traffic or demographics.{" "}
            <a>Learn more.</a>
          </p>
          <div className="promotion">
            <h2>Promotional Methods</h2>
            <p>
              We're moving promotional method information to the PID level!
              Learn
            </p>
            <p> more.Manage your promotional properties here.</p>
            <button class="ui green basic button">
              Manage Promotional Methods
            </button>
            <div className="space-between">
              <p>
                Post more information for advertisers to consider (Optional)
              </p>
              <p>Scanned with Symantec™ AntiVirus</p>
            </div>
          </div>
        </Container>
      </Sidenav>
    </>
  );
}

export default Netwrk;
