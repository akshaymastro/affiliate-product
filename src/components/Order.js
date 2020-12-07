import React from "react";
import { Container } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Netwrk() {
  return (
    <>
      <Sidenav>
        <Container>
          <div className="order-summary">
            <h2>You do not have any Insertion Orders.</h2>
            <p>
              Create an insertion order to hold all of your placement details.
            </p>
            <div className="order-allow">
              <div className="img-circle">
                <img src="/logo512.png" />
              </div>
              <h3>Insertion orders allow you to:</h3>
              <ul>
                <li>
                  Send an insertion order to your advertiser after they have
                  expressed interest in purchasing one of more placement
                  opportunities.
                </li>
                <li>
                  Keep track of your insertion orders with status updates such
                  as signature status, creative status, and payment status.
                </li>
              </ul>
              <a>Learn more in this video or visit our support center.</a>
              <div className="dashed-border"></div>
              <div className="get-start">
                <h4>Get Started Now!</h4>
                <button class="ui green basic button">Create Content</button>
              </div>
              <div className="dashed-border"></div>
              <p>
                {" "}
                Visit our support center for all of the how-tos you need and to
                contact us with any questions or comments.
              </p>
            </div>
          </div>
        </Container>
      </Sidenav>
    </>
  );
}

export default Netwrk;
