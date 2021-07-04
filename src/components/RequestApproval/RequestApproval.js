import React from "react";
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const RequestApproval = () => {
  return (
    <div>
      <Table>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Letter" dataIndex="Letter" key="letter" />
        <Column title="Type" dataIndex="Type" key="Type" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    </div>
  );
};

export default RequestApproval;
