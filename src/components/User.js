import React from "react";
import { Container } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Netwrk() {
  return (
    <Sidenav>
      <Container className="mt-2">
        <div className="user">
          <div className="button-user">
            <button class="ui primary basic button">Add User</button>
            <button class="ui secondary basic button">Change Superuser</button>
            <button class="ui positive basic button">Change Password</button>
          </div>
          <table class="ui celled table pt-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Verified User Type</th>
                <th>Phone</th>

                <th>Title</th>
                <th>Partner Contact General</th>
                <th>Advertiser</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc</td>
                <td>@gmail.com</td>
                <td>superuser</td>
                <td>978548934</td>
                <td>abc@gmail.com</td>
                <td>Account News Legal/Financial Order Inquiry Updates</td>
                <td>
                  Advertiser Messaging Program Term Change Deactivation &
                  Reactivation
                </td>
                <td>edit ico</td>
              </tr>
            </tbody>
          </table>
          <div class="user-info">
            <p>
              Superuser: May view, access and edit the account settings and
              program terms. There can be only one Superuser per account and
              this user is created when the account is created.
            </p>
            <p>
              Operator: May not modify account, payment or other user's
              settings.
            </p>
            <p>
              Analyzer: May not modify account, payment or user settings. May
              not accept, decline or expire relationships.
            </p>
            <p>
              Link User: May only search for, view and copy links for
              advertisers.
            </p>
            <p>
              Checked items within communication preferences indicate that you
              are set to receive the corresponding communication. At least one
              person needs to be opted in to receive Joined Publisher
              Communication, Account News and Legal and Financial , Program Term
              Change, Deactivation / Reactivation notifications.
            </p>
          </div>
        </div>
      </Container>
    </Sidenav>
  );
}

export default Netwrk;
