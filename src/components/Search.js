import { React, Component } from "react";
import {
  Button,
  Grid,
  Container,
  Accordion,
  Icon,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";
import Advertisecontent from "./Avertisecontent";
import Sidenav from "./Sidenav";
export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render(props) {
    const { activeIndex } = this.state;

    return (
      <>
        <Sidenav>
          <div className="advertise">
            <div className="top-nav">
              <div className="">
                <h2>Advertisement</h2>
                <p>Find and manage relationships with advertisers</p>
              </div>
              <div className="">
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
                <Button primary>Primary</Button>
              </div>
            </div>
            <Container className="flex-div">
              <div class="left-link">
                <ul>
                  <li>
                    {" "}
                    <div class="ui search mb-2">
                      <div class="ui icon input">
                        <input
                          class="prompt"
                          type="text"
                          placeholder="search..."
                        />
                        <i class="search icon"></i>
                      </div>
                      <div class="results"></div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div class="ui search mb-2">
                      <div class="ui icon input">
                        <input
                          class="prompt"
                          type="text"
                          placeholder="search..."
                        />
                        <i class="search icon"></i>
                      </div>
                      <div class="results"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="right-link">
                <ul>
                  <li>
                    {" "}
                    <Dropdown text="Advertiser">
                      <Dropdown.Menu>
                        <div class>
                          <Checkbox
                            label="Deactivated Advertisers"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Mobile Certified Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="New Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Content Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="International Programs"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Cross-Device Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label=" Cookieless Tracking Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    {" "}
                    <Dropdown text="Status">
                      <Dropdown.Menu>
                        <div class>
                          <Checkbox
                            label="Deactivated Advertisers"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Mobile Certified Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="New Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Content Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="International Programs"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Cross-Device Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label=" Cookieless Tracking Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    {" "}
                    <Dropdown text="Category">
                      <Dropdown.Menu>
                        <div class>
                          <Checkbox
                            label="Deactivated Advertisers"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Mobile Certified Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="New Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Content Advertisers Only"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="International Programs"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label="Cross-Device Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                        <div class>
                          <Checkbox
                            label=" Cookieless Tracking Enabled"
                            onChange={this.toggle}
                            checked={this.state.checked}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </Container>
            <Advertisecontent />
          </div>
        </Sidenav>
      </>
    );
  }
}
