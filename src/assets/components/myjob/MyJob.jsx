import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import SingleCard from "./SingleCard";

const fetchdata = async (params) => {
    const email = params.queryKey[0];
    const fetchdata = await fetch(`http://localhost:5000/myjobs/${email}`);
    if (fetchdata.status == 200
    ) {
        return fetchdata.json()
    }
}

const MyJob = () => {

    const { user } = useContext(AuthCon)
    const { isPending, data } = useQuery({
        queryKey: [user?.email],
        queryFn: fetchdata
    })

    const handletheupdatebutton = () =>{
        
    }





    if (isPending && user) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    } else {
        return (
            <div>
                {
                    data?.map((singledatamyjob, idx) => <SingleCard singledatamyjob={singledatamyjob} key={idx}></SingleCard>)
                }
            </div>
        );

    }


};

export default MyJob;