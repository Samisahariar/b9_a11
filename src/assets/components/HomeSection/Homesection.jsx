import Accordian from "../accordian/Accordian";

import SearchWIthUs from "../searchWithUs/SearchWIthUs";
import HomeTabSection from "../tabs/HomeTabSection";
import Banner from "./Banner";

const Homesection = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTabSection></HomeTabSection>
            <SearchWIthUs></SearchWIthUs>
            <Accordian></Accordian>
        </div>
    );
};

export default Homesection;