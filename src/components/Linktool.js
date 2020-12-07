import React from "react";
import { Button, Tab, Checkbox, TextArea, Form } from "semantic-ui-react";
import Sidenav from "./Sidenav";
const panes = [
  {
    menuItem: "Deep Link Generator",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="generate">
          <p>
            Allows you to create a deep link without having to log into the CJ
            Account Manager. You just need to install the bookmarklet on your
            toolbar, visit a joined advertiser's website, find a product to
            promote, and click the CJ Deep Link Generator bookmarklet.
          </p>
          <ul>
            <p>
              To Place the Deep Link Generator on your toolbar, follow these
              steps:
            </p>
            <li>Open a supported browser (Chrome, Firefox, Safari).</li>
            <li>
              Make sure that your bookmarks toolbar is visible in the selected
              browser.
            </li>
            <li>DragCJ Deep Linkgenerator to your bookmarks toolbar.</li>
          </ul>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Page-Based Link Tools",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="tool-link">
          <p>
            Create a single line of Javascript to place on your website that
            will automatically monetize any link that leads to a CJ advertiser
            and / or enable Page-Based Impression Reporting.
          </p>
          <p>
            To generate your page-based script with deep link automation and/or
            impression tracking, fill out the form below:
          </p>
          <div class="ui read-only checkbox">
            <input type="checkbox" />
            <label>Select to enable Deep Link Automation for your site</label>
          </div>
          <div className="mt-2">
            <div className="field">
              <div class="ui radio checkbox">
                <input type="radio" name="radio" checked="checked" />
                <label>
                  Evaluate content link only when user clicks a link
                </label>
              </div>
            </div>
            <div className="field">
              <div class="ui radio checkbox">
                <input type="radio" name="radio" checked="checked" />
                <label>
                  Evaluate and modify all links on my page when user loads my
                  page
                </label>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="field">
              <div class="ui radio checkbox">
                <input type="radio" name="radio" checked="checked" />
                <label>
                  Evaluate content link only when user clicks a link
                </label>
              </div>
            </div>
            <div className="field">
              <div class="ui radio checkbox">
                <input type="radio" name="radio" checked="checked" />
                <label>
                  Evaluate and modify all links on my page when user loads my
                  page
                </label>
              </div>
            </div>
          </div>
          <div class="ui input success mt-2">
            <input type="text" placeholder="Enter the Id." class="" />
          </div>
          <div className="mt-2">
            <select class="ui dropdown">
              <option value="">Specify and advertiser</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="mt-2">
            <div class="ui read-only checkbox">
              <input type="checkbox" />
              <label>Enable Page-Based Impression Reporting</label>
            </div>
            <p className="mt-2">
              By enabling page-based impression tracking you agree that your
              impression data may be shared with Advertisers and/or third
              parties.
            </p>
            <Form>
              <TextArea placeholder="Tell us more" />
            </Form>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

function Subs() {
  return (
    <>
      <Sidenav>
        <div className="link-tool">
          <Tab menu={{ attached: false }} panes={panes} />
        </div>
      </Sidenav>
    </>
  );
}

export default Subs;
