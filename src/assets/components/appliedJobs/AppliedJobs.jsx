import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SingleCardJ from "./SingleCardJ";
import { key } from "localforage";


const fetchdata = async (params) => {
    const email = params.queryKey[0];
    console.log(email)
    const fetchdata = await fetch(`http://localhost:5000/appliedJobPage/${email}`);
    if (fetchdata) {
        return fetchdata.json();
    }
}

const AppliedJobs = () => {

    const { email } = useParams();

    const { isPending, data } = useQuery({
        queryKey: [email],
        queryFn: fetchdata
    })

    /* const fetchdatawithparams = useMutation({
            mutationFn: (params) => fetchdata(params),
        }) */
    const handlethesubmit = (event) => {
        event.preventDefault();
        const params = event.target.value
        console.log(params)
        /* fetchdatawithparams.mutate(params); */
    }




    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    } else {
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
                <div className=" grid md:grid-cols-2 grid-cols-1 px-[10%] gap-2">

                    {
                        data?.map((singleCard, idx) => <SingleCardJ singleCard={singleCard} key={idx}></SingleCardJ>)
                    }
                </div>
            </>

        );
    }


};

export default AppliedJobs;