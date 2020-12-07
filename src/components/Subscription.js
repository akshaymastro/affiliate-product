import React from "react";
import { Button } from "semantic-ui-react";
import Sidenav from "./Sidenav"
function Subs() {
  return (
    <>
      <Sidenav>
        <div className="subscription">
          <div className="advertise-box">
            <p>
              Advertisers are moving to the Shopping (Google Format) feed.
              <a>
                View the advertisers now sending the Shopping (Google Format)
                feed.
              </a>
            </p>
            <div className="float-right">
              <Button basic color="green basic button">
                Sample Export Files
              </Button>
              <Button basic color="green basic button">
                Create Product Export
              </Button>
            </div>
          </div>
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>

                <th> Type</th>
                <th>Format</th>
                <th> Schedule</th>
                <th> Last Export Date</th>
                <th>Last Export Message</th>
                <th>Transfer Method</th>
                <th> Email Recipients</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td colspan="10">No Export Subscription</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Sidenav>
    </>
  );
}

export default Subs;
