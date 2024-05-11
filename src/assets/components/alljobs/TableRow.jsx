import { Link } from "react-router-dom";


const TableRow = ({ singleRow, number }) => {
    console.log(singleRow)

    const {
        jobtitle, jobpostingdate, deadline, salary, _id } = singleRow

    return (
        <tr>
            <th>{number + 1}</th>
            <td>{jobtitle}</td>
            <td>{jobpostingdate}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <td><Link to={`/alljobs/${_id}`}><span>View Details</span></Link></td>
        </tr>
    );
};

export default TableRow;