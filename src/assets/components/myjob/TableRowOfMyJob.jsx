import React from 'react';

const TableRowOfMyJob = ({ singleRow, number }) => {
    const {
        jobtitle, jobpostingdate, deadline, salary, _id, applicantnumber } = singleRow
    return (
        <tr>
            <th>{number + 1}</th>
            <td>{jobtitle}</td>
            <td>{applicantnumber}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
           
        </tr>
    );
};

export default TableRowOfMyJob;