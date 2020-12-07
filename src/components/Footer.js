import React from "react";
import { Grid,Divider } from "semantic-ui-react";
function Footer() {
  return (
    <>
      <div className="footer_section">
        <div className="d__flex">
          <div class="">
            <h2>Impact</h2>
            <p>
              6Degrees is a unique opportunity predominently designed for two
              key groups. Shoppers & Savers and Passive Income Earners.
            </p>
            <ul className="socil_links">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="popular-links">
            <h2>POpular links</h2>
            <ul>
              <li>SHOP CATEGORIES </li>
              <li> HOW CASH BACK WORKS</li> <li>REFER A FRIEND</li>
              <li>VIP BENEFITS</li>
              <li> TERMS & CONDITIONS</li>
            </ul>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <ul>
                    <li> Travel </li>
                    <li> Finance</li> <li>Electronics</li>
                    <li>Fashion</li>
                    <li> Health & Beauty</li>
                  </ul>
                </Grid.Column>
                <Grid.Column>
                  <ul>
                    <li> Lifestyle </li>
                    <li> FinaMarketplacence</li>
                    <li>Services</li>
                    <li>Others</li>
                    <li> TLC Deals</li>
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
        <Divider />
        <div className="text-center copyright">
          <p>Copyright 2019 impact.CASH. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
