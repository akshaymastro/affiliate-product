import React, { useState } from "react";
import { Table } from "semantic-ui-react";

function CommonTable(props) {
  return (
    <>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
            <Table.HeaderCell>Effect</Table.HeaderCell>
            <Table.HeaderCell>Efficacy</Table.HeaderCell>
            <Table.HeaderCell>Consensus</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.array.map((item, key) => (
            <Table.Row>
              <Table.Cell>{item.td1}</Table.Cell>
              <Table.Cell>{item.td2}</Table.Cell>
              <Table.Cell>{item.td3}</Table.Cell>

              <Table.Cell>{item.td4}</Table.Cell>
              <Table.Cell>{item.td5}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <Table responsive>
        <thead>
          <tr>
            <th>T</th>
            <th>Key</th>
            <th>Summary</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <td>{item.td1}</td>
              <td>{item.td2}</td>
              <td>{item.td2}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>
  );
}

export default CommonTable;
