import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../hooks/useAxiousSecure";
import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const fetchdata = async (params) => {
    const id = params.queryKey[0];
    const fetchdata = await fetch(`http://localhost:5000/alljobs/${id}`);
    if (fetchdata) {
        return fetchdata.json()
    }
}

const JobDetails = () => {

    const { user } = useContext(AuthCon);
    const axioussecure = useAxiousSecure();
    const { id } = useParams();

    const { isPending, data } = useQuery({
        queryKey: [id],
        queryFn: fetchdata
    })


    const handlethesublit = (e) => {
        e.preventDefault()
        const form = e.target;
        const resume = form.resume.target;
        const deadline = new Date(data?.deadline);
        const deadtime = deadline.getTime();
        const currentTime = Date.now();
        if (currentTime > deadtime) {
            axioussecure.put(`/appliedjobs`, { job_ID: id, resume: resume, email: user?.email })
                .then(res => {
                    if (res.data.message) {
                        toast.error(res.data.message);
                    }
                    if (res.data.acknowledged) {

                        toast("Sunmission is succesfull!!")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            toast("Dead LIne is OVer")
        }

    }

    if (isPending) {
        return <span className="loading loading-infinity loading-lg"></span>
    }


    return (
        <div>
            <ToastContainer />
            <h3>{data?.jobtitle}</h3>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">username : {user?.displayName}</h3>
                    <p className="py-4">email : {user?.email}</p>
                    <form action="" onSubmit={handlethesublit}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input name="resume" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default JobDetails;