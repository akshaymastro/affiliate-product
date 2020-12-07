import React from "react";
import {
  Container,
  Grid,
  Button,
} from "semantic-ui-react";
import CommonCard from "./common/card";
import { cardContent } from "../utils/commonvar";

function Shop() {
  return (
    <>
      <Container className="about-shop">
        <h2 className="">Features Deals</h2>
        <Grid columns={3} divided>
          <Grid.Row>
            {cardContent.map((item) => (
              <Grid.Column>
                <CommonCard image={item.img2}></CommonCard>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>{" "}
        <div className="join_now">
          <div className="d_flex">
            <div className="">
              <img src="https://www.48hourslogo.com/48hourslogo_data/2019/05/01/84508_1556682459.png" />
            </div>
            <h5>JOIN impact FOR FREE<br/> AND GET A $5 BONUS</h5>
            <Button content="Join For Free" primary />
          </div>
        </div>
        <h2 className="">Sales Deals</h2>
        <Grid columns={3} divided>
          <Grid.Row>
            {cardContent.map((item) => (
              <Grid.Column>
                <CommonCard image={item.img2}></CommonCard>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>{" "}
      </Container>
    </>
  );
}

export default Shop;
