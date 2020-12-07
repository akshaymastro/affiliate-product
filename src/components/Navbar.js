import React, { useState } from "react";
import { Dropdown, Grid, Button, Form, Checkbox } from "semantic-ui-react";

import ModalExampleModal from "./common/modal";
function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topnav">
        <div className="d-flex">
          <span className="">IMPACT</span>
          <div class="ui search">
            <div class="ui icon input">
              <input class="prompt" type="text" placeholder="search" />
              <i class="search icon"></i>
            </div>
          </div>
          <div className="right-div">
            <ul>
              <li>Language</li>
              <li>
                <Dropdown text="File">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="Vendor"
                      onClick={() => setOpen(!open)}
                    />

                    <Dropdown.Item text="Affiliate Partner" />
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="router-link">
        <ul>
          <li>
            <a href="/shop">SHOP CATEGORIES</a>
          </li>
          <li>
            <a href="/work">HOW CASH BACK WORK</a>
          </li>
          <li>
            <a href="reference">REFER A FRIEND</a>
          </li>
          <li>
            <a href="benefit"> VIP BENEFITS</a>
          </li>
          <li>
            <a href="/account">MY ACCOUNT</a>
          </li>
        </ul>
      </div>
      <ModalExampleModal open={open} OpenModal={() => setOpen(false)}>
           <div className="form__section">
                <div className="animate">
                  <h4>Impact</h4>
                  <img src="https://i0.wp.com/floridafapa.org/wp-content/uploads/2018/07/one_voice_impaact.png?fit=500%2C500" />
                  <Form>
                    <Form.Field>
                      <input placeholder="Enter Username" />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Enter Password" />
                    </Form.Field>
                    <div className="center-btn">
                      <Button primary>Login</Button>
                    </div>
                  </Form>
                </div>
              </div>
         
      </ModalExampleModal>
    </>
  );
}

export default TopNav;
