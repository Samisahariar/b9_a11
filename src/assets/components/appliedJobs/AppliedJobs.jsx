import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SingleCardJ from "./SingleCardJ";
import { useEffect, useState } from "react";
import useAxiousSecure from "../hooks/useAxiousSecure";
import TableRow from "../alljobs/TableRow";
import TableRowApplied from "./TableRowApplied";


const fetchdata = async (params) => {
    const email = params.queryKey[0];
    console.log(email)
    const fetchdata = await fetch(`http://localhost:5000/appliedJobPage/${email}`);
    if (fetchdata) {
        return fetchdata.json();
    }
}

const AppliedJobs = () => {

    const [data, setdata] = useState();
    const [filterdata, setfilterdata] = useState();
    const axioussecure = useAxiousSecure();
    const { email } = useParams();

    /* useEffect(() => {
        axioussecure(`http://localhost:5000/appliedJobPage/${email}`)
            .then(res => {
                setdata(res.data)
            })
            .catch(error => {
                alert(error.message)
            })
    }, []) */

    const { isPending } = useQuery({
        queryFn: async () => {
            axioussecure(`/appliedJobPage/${email}`)
                .then(res => {
                    setdata(res.data)
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    })

    const handlethesubmit = (event) => {
        event.preventDefault();
        const jobtitle = event.target.value;
        if (jobtitle !== "All") {
            const filterdata = data.filter((singledata) => singledata.jobtitle === jobtitle)
            setfilterdata(filterdata)
        } else {
            setfilterdata(data)
        }
    }

    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }


    return (
        <>
            <div className="flex items-center gap-2">
                <p className="text-xl font-semibold">Search Specific jobs : </p>
                <form className="max-w-sm ">
                    <label className="sr-only">Underline select</label>
                    <select onChange={(handlethesubmit)} id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="All" hidden>Choose a job</option>
                        <option value="All">All</option>
                        {
                            data?.map(singleoption => <option value={singleoption.jobtitle}>{singleoption.jobtitle}</option>)
                        }
                    </select>
                </form>
            </div>
            <div className=" ">
                <table className="table table-zebra mt-[5%]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>jobtitle</th>
                            <th>applicant number</th>
                            <th>deadline</th>
                            <th>salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filterdata ? filterdata?.map((singleCard, idx) => <TableRowApplied singleCard={singleCard} key={idx} number={idx}></TableRowApplied>) : data?.map((singleCard, idx) => <TableRowApplied singleCard={singleCard} key={idx} number={idx}></TableRowApplied>)
                        }
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AppliedJobs;