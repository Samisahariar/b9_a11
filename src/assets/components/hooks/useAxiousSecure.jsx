import axios from 'axios';
import React, { useEffect } from 'react';


const axioussecure = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials: true
})

const useAxiousSecure = () => {
   useEffect(() =>{
    axioussecure.interceptors.response.use(res =>{
        return res
    }, error =>{
        console.log("error in the axious interceptor", error.response.status)
    })
   }, [])

   return axioussecure
};

export default useAxiousSecure;