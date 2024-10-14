import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../hooks/useAxiousSecure";
import { useContext, useState } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiLocationOn } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { FcRating } from "react-icons/fc";



const JobDetails = () => {

    const { user } = useContext(AuthCon);
    const axioussecure = useAxiousSecure();
    const [userData, setUserData] = useState();

    const { id } = useParams();

    const { isPending, data } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            axioussecure(`/alljobs/${id}`)
                .then(res => {
                    setUserData(res.data)
                })
        }
    })


    const handlethesublit = (e) => {
        e.preventDefault()
        const form = e.target;
        const resume = form.resume.target;
        const deadline = new Date(userData?.deadline);
        const deadtime = deadline.getTime();
        const currentTime = Date.now();
        console.log(deadtime)
        console.log(currentTime)
        if (currentTime < deadtime) {
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
        } else {
            toast("Dead LIne is OVer")
        }

    }

    if (isPending) {
        return <span className="loading loading-infinity loading-lg"></span>
    }


    return (
        <div className="px-[10%] dark:bg-gray-600 dark:text-white text-black">
            <ToastContainer />
            <div className="keen-slider h-[50vh] relative">
                <div className="third_banner"><img src={userData?.photo} alt="" className="w-[100vw] h-[50vh] bg-center" /></div>
                <div className="hero-overlay bg-opacity-30 h-[50vh] w-full absolute top-0 flex justify-center items-center flex-col gap-3">
                    <p className="text-3xl text-white tracking-widest animate__animated animate__fadeInUp">{userData?.jobtitle}</p>
                </div>
            </div>
            <div className="p-2">
                <span className="px-3 py-1 text-white bg-[#FF204E] rounded-xl ml-2 dark:bg-[#378CE7] dark:text-black">#{userData?.jobcategory}</span>
                <div className="flex md:justify-between items-center md:flex-row flex-col text-center">
                    <div>
                        <h3 className="lg:text-4xl font-semibold font-dm text-2xl md:text-3xl">{userData?.jobtitle}</h3>
                    </div>
                    <div className="">
                        <h3 className=" text-4xl font-semibold text-end font-dm">{userData?.salary}</h3>
                        <div className="flex gap-2">
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white dark:bg-gray-700 "><FaShareAlt></FaShareAlt>Share</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white dark:bg-gray-700"><MdFavoriteBorder></MdFavoriteBorder>Favorite</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white dark:bg-gray-700"><IoMdPrint></IoMdPrint>Print</span>
                        </div>
                    </div>
                </div>
                <div className=" p-3 space-y-2 rounded-xl mt-10 shadow-xl bg-white dark:bg-gray-700">
                    <p className="font-semibold">Overview :</p>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3">
                        <div>
                            <p>Job Posting Date:</p>
                            <p>{userData?.jobpostingdate}</p>
                        </div>
                        <div>
                            <p>Dead Line : </p>
                            <p>{userData?.deadline}</p>
                        </div>
                        <div>
                            <p>Applicant number:</p>
                            <p>{userData?.applicantnumber}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-xl mt-10 ">
                    <span className="font-semibold">Description :</span><br />
                    {userData?.description}
                </div>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div>
                <button className="btn w-full bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-gray-700">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">username : {user?.displayName}</h3>
                        <p className="py-4">email : {user?.email}</p>
                        <form action="" onSubmit={handlethesublit}>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text dark:text-white text-black">Enter your Resume</span>
                                </div>
                                <input name="resume" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <input type="submit" className="btn btn-primary" />
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default JobDetails;