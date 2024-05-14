
import { useContext, useEffect, useState } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import SingleCard from "./SingleCard";
import Swal from 'sweetalert2';
import useAxiousSecure from "../hooks/useAxiousSecure";


const MyJob = () => {
    const [userData, setUserData] = useState();
    const { user } = useContext(AuthCon);
    const axioussecure = useAxiousSecure();


    useEffect( () => {
        axioussecure(`/myjobs/${user?.email}`)
        .then(res => {
            setUserData(res.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])


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
                fetch(`http://localhost:5000/del/${id}`, {
                    method: 'PUT'
                })
                    .then(res => {
                        if (res.status === 200) {
                            fetch(`http://localhost:5000/myjobs/${user?.email}`, {
                                method: 'GET'
                            })
                                .then(res => res.json())
                                .then(data => setUserData(data))
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });


                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }



    return (
        <div>
            {
                userData?.map((singledatamyjob, idx) => <SingleCard singledatamyjob={singledatamyjob} key={idx} handledelbutton={handledelbutton}></SingleCard>)
            }
        </div>
    );
};

export default MyJob;