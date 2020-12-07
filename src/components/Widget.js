import React from "react";
import { Container, Tab } from "semantic-ui-react";
import Sidenav from "./Sidenav";
const panes = [
  {
    menuItem: "My Widget",
    render: () => (
      <Tab.Pane attached={false}>
        {" "}
        <div class="ui input">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="ui checkbox pl-2">
          <input type="checkbox" name="example" />
          <label>View only widgets requiring attention</label>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "My Collection",
    render: () => (
      <Tab.Pane attached={false}>
        <p className="collection">
          No product collection found. Create a collection by going to the
          Products Tab
        </p>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Create Widget",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];
function Netwrk() {
  return (
    <Sidenav>
      <Container className="widget">
        <Tab menu={{ attached: false }} panes={panes} />
      </Container>
    </Sidenav>
  );
}

export default Netwrk;
