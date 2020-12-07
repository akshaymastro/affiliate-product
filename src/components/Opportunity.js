import React from "react";
import { Container } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Netwrk() {
  return (
    <>
      <Sidenav>
        <Container>
          <div className="order-summary">
            <h2>You do not have any placement opportunities.</h2>
            <p>
              Create a new placement opportunity that will be searchable by
              advertisers.
            </p>
            <div className="order-allow">
              <div className="img-circle">
                <img src="/logo512.png" />
              </div>
              <h3>e.g. Site, email, social, mobile, and content placemets.</h3>
              <ul>
                <li>
                  Offer your advertisers the opportunity to display their
                  banners and links on your site for a flat fee or a commission.
                </li>
                <li>
                  Leverage features within the placements tab to promote your
                  opportunities within the CJ network.
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
