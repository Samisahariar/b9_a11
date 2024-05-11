import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import useAxiousSecure from "../hooks/useAxiousSecure";




const MyJob = () => {

    const axioussecure = useAxiousSecure();

    const fetchdata = (params) => {
        const email = params.queryKey[0];
        axioussecure.get("/myjobs", { email })
        .then(res => {
            console.log(res.data)
        })
    }

    const { user } = useContext(AuthCon)
    const { isPending, data } = useQuery({
        queryKey: [user?.email],
        queryFn: fetchdata
    })



    return (
        <div>
            this is my job section!!
        </div>
    );
};

export default MyJob;