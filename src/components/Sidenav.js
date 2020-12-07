import React, { Component, useEffect, useState } from "react";
import { Grid, Progress, Button, Dropdown } from "semantic-ui-react";
import Dashboard from "./Dashboard";
import Advertisement from "./Advertisement";
import AdminSetting from "./AdminSetting";

function Sidenav(props) {
  return (
    <>
      <div className="dashboard">
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <div className="sidebar">
                <div className="ico text-center">
                  <img src="/img.svg" />
                  <i class="fas fa-check-circle"></i>
                  <h3 className="">Affiliate</h3>
                  <p>abc@gmail.com</p>
                </div>

                <ul className="side-bar">
                  <li>
                    <i class="fas fa-user"></i>
                    <Dropdown text="Acount">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="/setting"
                          text="Administrative Settings"
                        />
                        <Dropdown.Item href="/network" text="Network Profile" />
                        <Dropdown.Item href="/user" text="User" />
                        <Dropdown.Item href="/user" text="Website" />
                        <Dropdown.Item
                          href="/subscription"
                          text="Subscription"
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="active">
                    <i class="fas fa-ticket-alt"></i>
                    <a href="/support" className="with-sub">
                      {" "}
                      Support
                      <span class="shape1"></span>
                      <span class="shape2"></span>
                    </a>
                  </li>
                  <li>
                    <i class="fas fa-ad"></i>
                    <a href="/advertise"> Advertisers</a>
                  </li>
                  <li>
                    <i class="fas fa-link"></i>
                    <Dropdown text="Link">
                      <Dropdown.Menu>
                        <Dropdown.Item href="/search" text="Search" />
                        <Dropdown.Item href="/linktool" text="Link Tools" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <i class="fas fa-text-width"></i>
                    <Dropdown text="Widgets">
                      <Dropdown.Menu>
                        <Dropdown.Item href="/widget" text="My Widgets" />
                        <Dropdown.Item text="My Collections" />
                        <Dropdown.Item text="Create Widget" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <i class="fas fa-bug"></i>
                    <Dropdown text="Reports">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Performance" />
                        <Dropdown.Item text="Transaction" />
                        <Dropdown.Item text="Balance Details" />
                        <Dropdown.Item text="Promo Codes" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <i class="fas fa-envelope-open"></i>
                    <Dropdown text="Mail">
                      <Dropdown.Menu>
                        <Dropdown.Item href="/message" text="Messages" />
                        <Dropdown.Item
                          href="/mailsetting"
                          text="Mail Settings"
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <i class="fas fa-road"></i>
                    <Dropdown text="Placements">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="/opportunity"
                          text="Opportunities"
                        />
                        <Dropdown.Item href="/order" text="Insertion Orders" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <i class="fas fa-coins"></i>
                    <a href="/"> Insight</a>
                  </li>
                  <li>
                    <i class="fas fa-power-off"></i>
                    <a href="/"> Logout</a>
                  </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
              {/* <Dashboard /> */}

              {console.log(props.children)}
              {props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Sidenav;
