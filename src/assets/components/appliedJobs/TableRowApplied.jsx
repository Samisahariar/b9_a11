import { PDFDownloadLink } from '@react-pdf/renderer';
import { NavLink } from 'react-router-dom';
import MyPdf from '../mypdf/MyPdf';

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
            <td><PDFDownloadLink document={<MyPdf/>} fileName="example.pdf" className='btn'>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink></td>
        </tr>
    );
};

export default TableRowApplied;