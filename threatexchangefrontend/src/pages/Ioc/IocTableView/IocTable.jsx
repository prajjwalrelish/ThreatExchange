import React, { Component } from "react";
import Table from "../../../common/table";

const IocsTable = ({iocs, list}) => {
  return (
    <Table
      data={iocs}
      list={list}
    />
  );
}

export default IocsTable;
