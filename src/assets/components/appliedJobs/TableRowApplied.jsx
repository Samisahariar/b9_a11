import { NavLink } from "react-router-dom";


const TableRowApplied = ({ singleCard, number }) => {

    const {
        jobtitle, jobpostingdate, deadline, salary, _id, applicantnumber } = singleCard


    return (
        <tr>
            <th>{number + 1}</th>
            <td>{jobtitle}</td>
            <td>{applicantnumber}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <NavLink to={`/main/jobdetails/${_id}`}><span>View Details</span></NavLink>
        </tr>
    );
};

export default TableRowApplied;