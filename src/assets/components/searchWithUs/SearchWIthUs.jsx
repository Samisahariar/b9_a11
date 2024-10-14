import FarmerMotion from "../farmermotion/FarmerMotion";

const SearchWIthUs = () => {

    return (
        <div className="w-full px-[10%] lg:pt-20 md:pt-10 pt-5 dark:bg-gray-600 text-black dark:text-white">
            <h3 className="text-5xl font-semibold text-center ">Search with <span className="text-[#80f762] dark:text-[#378CE7]">Us</span></h3>
            <div className="flex pt-10 items-center">
                <div className="w-[50%]">
                    <FarmerMotion></FarmerMotion>
                </div>
                <div className="w-[50vw] border-black dark:border-white border p-10 border-dashed rounded-xl">
                    <h3 className="text-4xl font-semibold">Discover With Us</h3>
                    <p className="text-sm">In the realm of job hunting, persistence is your greatest ally. It's the unwavering determination to keep going even when the road seems long and the challenges seem insurmountable. Every no you encounter is simply leading you closer to that one yes that will change everything.

                        Embrace the journey. Treat each application as an opportunity to learn and grow. Refine your resume, polish your cover letter, and hone your interview skills with each experience. Every interaction is a chance to showcase your talents and demonstrate your passion.</p>
                </div>
            </div>
        </div>
    );
};

export default SearchWIthUs;