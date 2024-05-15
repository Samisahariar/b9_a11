import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


const TableRowOfMyJob = ({ singleRow, number, handledelbutton }) => {
    const {
        jobtitle, jobpostingdate, deadline, salary, _id, applicantnumber } = singleRow
    return (
        <tr>
            <th>{number + 1}</th>
            <td>{jobtitle}</td>
            <td>{applicantnumber}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <td><NavLink to={`/main/update/${_id}`}><button className="btn text-xl"><MdEditSquare /></button></NavLink></td>
            <td> <button className="btn text-xl" onClick={() => handledelbutton(_id)}><MdDeleteForever /></button></td>
       </tr>
    );
};

export default TableRowOfMyJob;