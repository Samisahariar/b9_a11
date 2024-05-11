import { Link, NavLink } from "react-router-dom";


const TableRow = ({ singleRow, number }) => {
    console.log(singleRow)

    const {
        jobtitle, jobpostingdate, deadline, salary, _id } = singleRow;

    const handletoremove = () =>{
        console.log("sami")
        document.getElementById("alljobs").classList.add("inactive");
    }

    return (
        <tr>
            <th>{number + 1}</th>
            <td>{jobtitle}</td>
            <td>{jobpostingdate}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <NavLink to={`/main/alljobs/${_id}`} onClick={handletoremove}><span>View Details</span></NavLink>
        </tr>
    );
};

export default TableRow;