import { CgDetailsMore } from "react-icons/cg";
import { IoTimerSharp } from "react-icons/io5";
import { FaHammer } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



const SingleCard = ({ singledatamyjob }) => {
    const navigate = useNavigate();
    const { applicantnumber, deadline, jobpostingdate, jobtitle, photo, salary, _id } = singledatamyjob;



    return (
        <div className="card card-side dark:bg-base-100  cursor-pointer bg-white text-black shadow-xl dark:text-white">
            <div className="w-[40%]"><img src="photo" alt="Movie" className="rounded-xl bg-cover" /></div>
            <div className=" flex justify-between w-[60%] items-center">
                <div className=" space-y-1 p-1">
                    <h2 className="text-xl font-semibold">{jobtitle}</h2>
                    <span className="text-xs">subcategory</span>
                    <div className="flex gap-5">
                        <span className="flex items-center text-md gap-1">price</span>
                        <span className="flex items-center text-md gap-1"><IoTimerSharp />processingtime</span>
                        <span className="flex items-center text-md gap-1"><FaHammer />customization</span>
                    </div>
                    <div>
                        <p className="text-xs">description</p>
                    </div>
                    <div className="flex gap-5">
                        <span className="flex items-center text-md gap-1">ratings</span>
                        <span className="flex items-center text-md gap-1"><IoTimerSharp />processingtime</span>
                    </div>

                </div>
                <div className="join join-vertical gap-1">
                    <NavLink to={`/main/update/${_id}`}><span>View Details</span></NavLink>
                    <button className="btn text-xl" /* onClick={() => handledelbutton(_id)} */><MdDeleteForever /></button>
                    <button className="btn text-xl" /* onClick={() => tothecarddetails(_id)} */><CgDetailsMore /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;