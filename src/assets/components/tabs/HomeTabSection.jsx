import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiousSecure from '../hooks/useAxiousSecure';
import SingleCardHome from './SingleCardHome';


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

    const fecthdifferentCat = (str) => {
        axioussecure(`/homesection/${str}`)
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='px-[15%]'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => fecthdifferentCat("On-Site Job")}>On-Site Job</Tab>
                    <Tab onClick={() => fecthdifferentCat("Remote Job")}>Remote Job</Tab>
                    <Tab onClick={() => fecthdifferentCat("Hybrid")}>Hybrid</Tab>
                    <Tab onClick={() => fecthdifferentCat("Part-Time")}>Part-Time</Tab>
                </TabList>
            </Tabs>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-2'>
                {
                    data?.map((singledatamyjob, idx) => <SingleCardHome singledatamyjob={singledatamyjob} key={idx}></SingleCardHome>)
                }
            </div>
        </div>
    );
};

export default HomeTabSection;