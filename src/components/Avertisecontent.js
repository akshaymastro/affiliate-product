import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

import CommonTable from "./common/table";
import { tableContent } from "../utils/commonvar";

function Shop() {
  return (
    <>
      <div className="">
        <CommonTable array={tableContent} />
      </div>
    </>
  );
}

export default Shop;
