import FarmerMotion from "../farmermotion/FarmerMotion";
import HomeTabSection from "../tabs/HomeTabSection";
import Banner from "./Banner";

const Homesection = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeTabSection></HomeTabSection>
           <FarmerMotion></FarmerMotion>
        </div>
    );
};

export default Homesection;