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




    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    } else {
        return (
            <div className=" grid md:grid-cols-2 grid-cols-1 px-[10%] gap-2">
                {
                    data?.map((singleCard, idx) => <SingleCardJ singleCard={singleCard} key={idx}></SingleCardJ>)
                }
            </div>
        );
    }


};

export default AppliedJobs;