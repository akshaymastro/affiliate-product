import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Shop() {
  return (
    <Sidenav>
      <Container className="mt-2">
        <div className="admin-setting">
          <div class="">
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column width="11">
                  <div className="setting-account">
                    <h3>Account</h3>
                    <span className="">Edit</span>
                  </div>
                </Grid.Column>
                <Grid.Column width="4">
                  <div className="setting-account">
                    <h3>Tax Information</h3>
                    <span className="">Edit</span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="info">
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column width={3}>
                  <label>Orgainisation Name:</label>
                  <label>Orgainisation Name:</label>
                  <label>Orgainisation Name:</label>
                  <label>Orgainisation Name:</label>
                </Grid.Column>
                <Grid.Column>
                  <label>Zip Code:</label>
                  <label>Country: </label>
                  <label>United States Phone: </label>
                  <label>Fax:</label>
                </Grid.Column>
                <Grid.Column>
                  <label>Zip Code:</label>
                  <label>Country: </label>
                  <label>United States Phone: </label>
                  <label>Fax:</label>
                </Grid.Column>
                <Grid.Column>
                  <label>Zip Code:</label>
                  <label>Country: </label>
                  <label>United States Phone: </label>
                  <label>Fax:</label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Container>
    </Sidenav>
  );
}

export default Shop;
