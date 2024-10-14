import { NavLink, useNavigate } from "react-router-dom";
import "../../../App.css"
import { useContext, useState } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import Swal from 'sweetalert2';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import userNullImage from "../../images/pngwing.com.png";
import image from "../../images/search.png"



const Navbar = () => {

    const { signIn, logOut, user } = useContext(AuthCon);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();


    const tothelogin = () => {
        navigate("/")
    }



    const navlinks = <>

        <NavLink to="home" className={({ isActive, isPending }) =>
            isActive
                ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                : "inactive dark:text-white"
        }
        >Home</NavLink>
        <NavLink id="alljobs" to="alljobs" className={({ isActive, isPending }) =>
            isActive
                ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                : "inactive dark:text-white"
        }
        >All Jobs</NavLink>
        {
            user && <NavLink to={user ? `appliedjobs/${user.email}` : "/"} className={({ isActive, isPending }) =>
                isActive
                    ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                    : "inactive dark:text-white"
            }
            >Applied Jobs</NavLink>
        }
        {
            user && <NavLink to="addajob" className={({ isActive, isPending }) =>
                isActive
                    ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                    : "inactive dark:text-white"
            }
            >Add A Job</NavLink>
        }
        {
            user && <NavLink to="myjobs" className={({ isActive, isPending }) =>
                isActive
                    ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                    : "inactive dark:text-white"
            }
            >My Jobs</NavLink>
        }
        <NavLink to="blogs" className={({ isActive, isPending }) =>
            isActive
                ? "active dark:text-[#378CE7] dark:bg-gray-600 dark:border-b-[#378CE7]"
                : "inactive dark:text-white"
        }
        >Blogs</NavLink>
    </>

    const handlethelogout = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Log-Out Successfull!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const darkmode = (checked) => {
        console.log(checked)
        const thewholehtml = document.getElementById("html")
        if (!checked) {
            thewholehtml.classList.add("dark")
        } else {
            thewholehtml.classList.remove("dark")
        }
    }


    return (
        <div className="navbar dark:bg-gray-600 bg-white border-b-4 border-[#80f762] dark:border-[#378CE7]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={image} className="w-10 h-10 rounded-full" alt="" /><span className="text-black dark:text-white">Job</span><span className="dark:text-[#378CE7] text-[#80f762]">MANIA</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <HeartSwitch
                    size="lg"
                    inactiveTrackFillColor="#cffafe"
                    inactiveTrackStrokeColor="#22d3ee"
                    activeTrackFillColor="#06b6d4"
                    activeTrackStrokeColor="#0891b2"
                    inactiveThumbColor="#ecfeff"
                    activeThumbColor="#ecfeff"
                    checked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked)
                        darkmode(checked)
                    }}></HeartSwitch>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" : userNullImage} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                {
                    user ? <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handlethelogout}>LOG-OUT</button>
                        : <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={tothelogin}>LOG-IN</button>

                }
            </div>
        </div>
    );
};

export default Navbar;