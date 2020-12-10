import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import TopSlider from "../components/topslider";
import Footer from "../components/Footer";
function Work() {
  return (
    <>
      <Navbar />
      <TopSlider />
      <Container className="about-work">
        <h3 className="text-center">Get paid to shop!</h3>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <h2 className="text-center">how does cash back works?</h2>
            <Grid.Column>
              <Image src="https://static.vecteezy.com/system/resources/thumbnails/000/183/241/original/cashback-01.jpg" />
            </Grid.Column>
            <Grid.Column>
              <p>
                6Degrees promotes global and local brands that you know and
                trust. When you buy your favourite products though your 6Degrees
                account, you save money in Cash Back. On average an active
                shopper may save hundreds of dollars a year. To start saving
                Join FREE today!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Work;
