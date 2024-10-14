import SingleCard from "./SingleCard";



const Accordian = () => {

    const itemNumber =
        ["https://i.ibb.co/sVw2jNK/premium-photo-1671656333460-793292581bc6-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
            "https://i.ibb.co/JtfMT6j/photo-1712847333437-f9386beb83e4-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
            "https://i.ibb.co/WnrB4C9/photo-1499996860823-5214fcc65f8f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
            "https://i.ibb.co/72KwLrj/photo-1542909168-82c3e7fdca5c-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
            "https://i.ibb.co/g75J26f/photo-1438761681033-6461ffad8d80-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
            "https://i.ibb.co/kyHzRBn/photo-1601412436009-d964bd02edbc-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"];

    return (
        <div className="dark:bg-gray-600 ">
            <h3 className="text-4xl text-center font-semibold pt-10 text-black dark:text-white">Our Best <span className="dark:text-[#378CE7] text-[#80f762]">Memeber</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[8%] gap-2 mt-10">
                {
                    itemNumber.map((single) => <SingleCard single={single}></SingleCard>)
                }

            </div>
        </div>

    );
};

export default Accordian;