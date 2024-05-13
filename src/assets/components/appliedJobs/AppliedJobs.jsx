import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const fetchdata = async (params) =>{
    const email = params.queryKey[0];
    console.log(email)
    const fetchdata = await fetch(`/appliedJobPage/${email}`);
    if(data){
        return data.json()
    }
}



const AppliedJobs = () => {

    const { email } = useParams();

    const { isPending, data } = useQuery({
        queryKey: [email],
        queryFn: fetchdata
    })


    return (
        <div>
            this is applied jobs section
        </div>
    );
};

export default AppliedJobs;