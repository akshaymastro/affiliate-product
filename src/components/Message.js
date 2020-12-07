import React from "react";
import { Button, Table } from "semantic-ui-react";
import Sidenav from "./Sidenav";
function Subs() {
  return (
    <>
      <Sidenav>
        <div className="message">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colspan="4">
                  <button class="ui green basic button">Compose</button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Folders</Table.Cell>
                <Table.Cell>Messages</Table.Cell>

                <Table.Cell>New</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell colspan="4">CJ main folder</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Inbox</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Notifications</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Archived Items</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sent Items</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell colspan="4">
                  {" "}
                  <button class="ui green basic button">Folder</button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell colspan="4">Your Folders</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sent Items</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sent Items</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Sidenav>
    </>
  );
}

export default Subs;
