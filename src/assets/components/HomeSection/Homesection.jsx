import Accordian from "../accordian/Accordian";
import FarmerMotion from "../farmermotion/FarmerMotion";
import HomeTabSection from "../tabs/HomeTabSection";
import Banner from "./Banner";

const Homesection = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTabSection></HomeTabSection>
            <h3 className="text-5xl font-semibold mt-[5%] text-center">Search with us</h3>
            <div className="pt-[15%] flex justify-between px-[10%]">

                <div className="w-[50vw] flex justify-center items-center">
                    <FarmerMotion></FarmerMotion>
                </div>
                <div className="w-[50vw] my-auto border-black border p-10 border-dashed rounded-xl">
                    <h3 className="text-4xl font-semibold">Discover With Us</h3>
                    <p className="text-sm">In the realm of job hunting, persistence is your greatest ally. It's the unwavering determination to keep going even when the road seems long and the challenges seem insurmountable. Every no you encounter is simply leading you closer to that one yes that will change everything.

                        Embrace the journey. Treat each application as an opportunity to learn and grow. Refine your resume, polish your cover letter, and hone your interview skills with each experience. Every interaction is a chance to showcase your talents and demonstrate your passion.</p>
                </div>
            </div>
            <Accordian></Accordian>

        </div>
    );
};

export default Homesection;