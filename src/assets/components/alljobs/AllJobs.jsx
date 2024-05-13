import { useState } from "react";
import { QueryCache, useMutation, useQuery } from "@tanstack/react-query";
import TableRow from "./TableRow";


const fetchdata = async (params) => {
    console.log(params)
    const fetchdata = await fetch('http://localhost:5000/alljobs')
    if (fetchdata) {
        if (params.meta == undefined) {
            return fetchdata.json();
        } else {
            const data = fetchdata.json();
            const newlist = data?.filter(singledata => singledata.jobtitle != params)
            return newlist
        }
    }
}


const AllJobs = () => {

    const [AllJobs, setAlljobs] = useState();

    /* const queryCache = new QueryCache() */

    const { isPending, data, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchdata
    })

    /* const fetchdatawithparams = useMutation({
        mutationFn: (params) => fetchdata(params),
    }) */

    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    const handlethesubmit = (event) => {
        event.preventDefault();
        const params = event.target.value
        
    }


    return (
        <div className="overflow-x-auto dark:bg-base-200 bg-white lg:px-[10%] md:px-[5%] px-[2%]">
            <h3 className="text-4xl text-center dark:text-white text-black mt-[2%]">All the items are <span className="text-[#FF204E] dark:text-[#378CE7]">listed below</span></h3>
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
            <table className="table table-zebra mt-[5%]">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>jobtitle</th>
                        <th>jobpostingdate</th>
                        <th>deadline</th>
                        <th>salary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data?.map((singleRow, idx) => <TableRow key={idx} singleRow={singleRow} number={idx}></TableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;