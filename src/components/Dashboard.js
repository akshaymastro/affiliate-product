import { React, useState } from "react";
import { Grid, Image, Button, Table } from "semantic-ui-react";

import DatePicker from "react-date-picker";
import Calendar from "react-calendar";
import Sidenav from "./Sidenav";

function Dash() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Sidenav>
        <div className="dashboard_content">
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width="10">
                <div className="tabs">
                  <div className="outer-tab">
                    <i class="fas fa-user-friends d-block"></i>
                    <span className="d-block">128</span>
                    <span className="">cleint</span>
                  </div>
                  <div className="outer-tab">
                    <i class="fas fa-user-friends d-block"></i>
                    <span className="d-block">128</span>
                    <span className="">cleint</span>
                  </div>
                  <div className="outer-tab active">
                    <i class="fas fa-user-friends d-block"></i>
                    <span className="d-block">128</span>
                    <span className="">cleint</span>
                  </div>
                  <div className="outer-tab">
                    <i class="fas fa-user-friends d-block"></i>
                    <span className="d-block">128</span>
                    <span className="">cleint</span>
                  </div>
                </div>
                <div className="graph-div">
                  <img src="/Group 1.svg" />
                </div>
              </Grid.Column>
              <Grid.Column width="6">
                <Calendar onChange={onChange} value={value} />
                <div className="activity-graph">
                  <img src="/Group 2.svg" />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid className="cleint-type" divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width="6">
                <div className="cleint-list">
                  <h2>New Cleints</h2>
                  <div className="flex-div">
                    <div className="mid-div">
                      <img src="/img.svg" />
                      <div className="content">
                        <p>Nicci Troiani</p>
                        <span className="">chicago al</span>
                      </div>
                    </div>

                    <div className="dot-ico">
                      <img src="/cvector.svg" />
                    </div>
                  </div>
                  <div className="flex-div">
                    <div className="mid-div">
                      <img src="/img.svg" />
                      <div className="content">
                        <p>Nicci Troiani</p>
                        <span className="">chicago al</span>
                      </div>
                    </div>

                    <div className="dot-ico">
                      <img src="/cvector.svg" />
                    </div>
                  </div>
                  <div className="flex-div">
                    <div className="mid-div">
                      <img src="/img.svg" />
                      <div className="content">
                        <p>Nicci Troiani</p>
                        <span className="">chicago al</span>
                      </div>
                    </div>

                    <div className="dot-ico">
                      <img src="/cvector.svg" />
                    </div>
                  </div>
                  <div className="flex-div">
                    <div className="mid-div">
                      <img src="/img.svg" />
                      <div className="content">
                        <p>Nicci Troiani</p>
                        <span className="">chicago al</span>
                      </div>
                    </div>

                    <div className="dot-ico">
                      <img src="/cvector.svg" />
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width="10">
                <div className="graph">
                  <img src="/graph.svg" />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Sidenav>
    </>
  );
}

export default Dash;
