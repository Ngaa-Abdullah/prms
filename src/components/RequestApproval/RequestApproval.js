import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

// const data = [
//     {
//         key: '1',
//         firstName: 'John',
//         lastName: 'Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         firstName: 'Jim',
//         lastName: 'Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         firstName: 'Joe',
//         lastName: 'Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];


const RequestApproval = () => {
    return (
        <div>
            <Table >
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                <Column title="Letter"  dataIndex='Letter' key="letter" />
                <Column title="Type" dataIndex="Type" key="Type" />
                <Column title="Status" dataIndex="status" key="status"
                />
                
            </Table>
        </div>
    );
}

export default RequestApproval;