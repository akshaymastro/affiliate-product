import React from "react";
import { Container, Grid, Input, Divider, Checkbox,Image,Card } from "semantic-ui-react";
import CommonCard from "./common/card";
import { cardContent } from "../utils/commonvar";


function Shop() {
  return (
    <>
      <Container className="about-shop">
        <h2 className="text-center">Shop Categroies</h2>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="sidebar">
                <div className="filters">
                  <h3>Service area</h3>
                  <Input placeholder="Search..." />
                  <Divider inverted />
                </div>
                <div className="filters">
                  <h3>Merchant Type</h3>
                  <Checkbox label="Make my profile visible" />
                  <Divider inverted />
                  <Checkbox label="Make my profile visible" />
                </div>
                <div className="filters">
                  <h3>Merchant Type</h3>
                  <Checkbox label="Make my profile visible" />
                  <Divider inverted />
                  <Checkbox label="Make my profile visible" />
                </div>
                <div className="filters">
                  <h3>Merchant Type</h3>
                  <Checkbox label="Make my profile visible" />
                  <Divider inverted />
                  <Checkbox label="Make my profile visible" />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3>Categories</h3>
             
              <div class="ui secondary menu category">
                <a class="active item">ALL</a>
                <a class="item">ELECTRONICS</a>
                <a class="item">Health & Beauty</a>
                <a class="item">TRAVEL</a>
                <a class="item">FASHION</a>
                <a class="item">Lifestyle</a>
                <a class="item">Marketplace</a>
                <a class="item">Services</a>
                <a class="item">Services</a>
                <a class="item">Services</a>
              </div>
              <Grid columns={3} divided>
                <Grid.Row>
                  {cardContent.map((item) => (
                    <Grid.Column>
                      <CommonCard image={item.img2}></CommonCard>
                    </Grid.Column>
                  ))}
                 
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
