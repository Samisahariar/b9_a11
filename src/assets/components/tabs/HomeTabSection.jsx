import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiousSecure from '../hooks/useAxiousSecure';
import SingleCardHome from './SingleCardHome';
import { useQuery } from '@tanstack/react-query';


const HomeTabSection = () => {

    const axioussecure = useAxiousSecure();


    const [data, setData] = useState()
    useEffect(() => {
        axioussecure("/homesection/On-Site Job")
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])


    /*const { isPending } = useQuery({
        queryFn: async () => {
            axioussecure('/alljobs')
                .then(res => {
                    setData(res.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    })*/


    const fecthdifferentCat = (str) => {
        if (str !== "All") {
            axioussecure(`/homesection/${str}`)
                .then(res => {
                    setData(res.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        } else {
            axioussecure('/alljobs')
                .then(res => {
                    setData(res.data)
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }

    if (isPending) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center dark:bg-gray-600 dark:text-white text-black"><span className="loading loading-infinity loading-lg"></span></div>
    }

    return (
        <div className='px-[10%] pt-10 dark:bg-gray-600'>
            <h3 className='text-4xl font-semibold text-center text-black dark:text-white'>Available <span className='text-[#80f762] dark:text-[#378CE7]'>Jobs</span> Are Here</h3>
            <Tabs className="mt-10">
                <TabList>
                    <Tab onClick={() => fecthdifferentCat("All")} >All</Tab>
                    <Tab onClick={() => fecthdifferentCat("On-Site Job")} >On-Site Job</Tab>
                    <Tab onClick={() => fecthdifferentCat("Remote Job")} >Remote Job</Tab>
                    <Tab onClick={() => fecthdifferentCat("Hybrid")} >Hybrid</Tab>
                    <Tab onClick={() => fecthdifferentCat("Part-Time")}>Part-Time</Tab>
                </TabList>
            </Tabs>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    data?.map((singledatamyjob, idx) => <SingleCardHome singledatamyjob={singledatamyjob} key={idx}></SingleCardHome>)
                }
            </div>
        </div>
    );
};

export default HomeTabSection;