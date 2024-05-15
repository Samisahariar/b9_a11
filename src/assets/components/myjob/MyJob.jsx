
import { useContext, useState } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import SingleCard from "./SingleCard";
import Swal from 'sweetalert2';
import useAxiousSecure from "../hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { data } from "autoprefixer";
import TableRowOfMyJob from "./TableRowOfMyJob";


const MyJob = () => {
    const [userData, setUserData] = useState();
    const { user } = useContext(AuthCon);
    const axioussecure = useAxiousSecure();
    console.log(user)

    const { isPending } = useQuery({
        queryFn: async (req, res) => {
            axioussecure(`/myjobs/${user?.email}`)
                .then(res => {
                    setUserData(res.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    });


    const handledelbutton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a11-server-site.vercel.app/del/${id}`, {
                    method: 'PUT'
                })
                    .then(res => {
                        if (res.status === 200) {
                            axioussecure(`https://b9a11-server-site.vercel.app/myjobs/${user?.email}`)
                                .then(res => {
                                    setUserData(res.data)
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                })
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    };


    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    return (
        <div>
            <table className="table table-zebra mt-[5%]">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>jobtitle</th>
                        <th>applicant number</th>
                        <th>deadline</th>
                        <th>salary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        userData?.map((singleRow, idx) => <TableRowOfMyJob key={idx} singleRow={singleRow} number={idx} handledelbutton={handledelbutton}></TableRowOfMyJob>)
                    }
                </tbody>
            </table>
        </div>
    );

};

export default MyJob;