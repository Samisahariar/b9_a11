import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineUpdateDisabled } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import Swal from 'sweetalert2';


const SingleCardHome = ({ singledatamyjob }) => {

    const { user } = useContext(AuthCon)

    const { applicantnumber, deadline, jobpostingdate, jobtitle, photo, salary, _id, username } = singledatamyjob;

    const showthemodal = () => {
        console.log("to the login page")
    }



    return (
        <motion.div whileHover={{ scale: 1.08 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className="h-[70vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-[50%] w-[100%]" src={photo} alt="" />
            </a>
            <div className="p-5 flex flex-col">
                <div className="h-[10vh]">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobtitle}</h5>
                    </a>
                </div>
                <div className="dark:text-white mb-2">
                    <div className="flex items-center gap-1">
                        <CgProfile />
                        {username}
                    </div>
                </div>
                <div className="dark:text-white text-black space-y-2">
                    <div className="flex gap-5 text-xs">
                        <div className="flex items-center gap-1">
                            <MdOutlineDateRange />
                            {jobpostingdate}
                        </div>
                        <div className="flex items-center gap-1">
                            <MdOutlineUpdateDisabled />
                            {deadline}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaDollarSign />
                            {salary}
                        </div>
                    </div>
                    <div className='gap-1 dark:text-white text-xs flex items-center'>
                        <FaPeopleGroup />
                        {applicantnumber}
                    </div>
                </div>

                <div className="flex">
                    <NavLink to={`/main/jobdetails/${_id}`} onClick={() =>
                        {
                            if(!user){
                                Swal.fire({
                                    title: "You Have to log-in FIirst!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "OK"
                                })
                            }
                        }
                     } className="w-full btn text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">VIew Details</NavLink>
                </div>
            </div>
        </motion.div>

    )
};
export default SingleCardHome;