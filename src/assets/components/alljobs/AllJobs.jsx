import { useEffect } from "react";
import TableRow from "./TableRow";
import { useState } from "react";
import useAxiousSecure from "../hooks/useAxiousSecure";

const fetchdata = async (params) => {
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
    const [loader, setLoader] = useState(true);
    const [alldata, setalldata] = useState()
    const axioussecure =  useAxiousSecure();
    /* const queryCache = new QueryCache() */
    useEffect(() => {
        axioussecure.get('/alljobs')
        .then(res => {
            setalldata(res.data)
            setLoader(false)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }, [])
    
    if(loader){
        return  <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }


    return (
        <div className="overflow-x-auto dark:bg-base-200 bg-white lg:px-[10%] md:px-[5%] px-[2%]">
            <h3 className="text-4xl text-center dark:text-white text-black mt-[2%]">All the items are <span className="text-[#FF204E] dark:text-[#378CE7]">listed below</span></h3>
            
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
                        alldata?.map((singleRow, idx) => <TableRow key={idx} singleRow={singleRow} number={idx}></TableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;