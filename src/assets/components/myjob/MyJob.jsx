import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";

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

    if (isPending && user) {
        return <span className="loading loading-infinity loading-lg"></span>
    } else {
        return (
            <div>
                this is my job section!!{data?.length}
            </div>
        );

    }


};

export default MyJob;